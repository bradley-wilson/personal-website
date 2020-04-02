/* -------------------- PAN AND ZOOM -------------------- */

// Add touch gestures
var eventsHandler;

eventsHandler = {
haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel']
, init: function(options) {
    var instance = options.instance
    , initialScale = 1
    , pannedX = 0
    , pannedY = 0

    // Init Hammer
    // Listen only for pointer and touch events
    this.hammer = Hammer(options.svgElement, {
    inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
    })

    // Enable pinch
    this.hammer.get('pinch').set({enable: true})

    // Handle double tap
    this.hammer.on('doubletap', function(ev){
    instance.zoomIn()
    })

    // Handle pan
    this.hammer.on('panstart panmove', function(ev){
    // On pan start reset panned variables
    if (ev.type === 'panstart') {
        pannedX = 0
        pannedY = 0
    }

    // Pan only the difference
    instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY})
    pannedX = ev.deltaX
    pannedY = ev.deltaY
    })

    // Handle pinch
    this.hammer.on('pinchstart pinchmove', function(ev){
    // On pinch start remember initial zoom
    if (ev.type === 'pinchstart') {
        initialScale = instance.getZoom()
        instance.zoom(initialScale * ev.scale)
    }

    instance.zoom(initialScale * ev.scale)

    })

    // Prevent moving the page on some devices when panning over SVG
    options.svgElement.addEventListener('touchmove', function(e){ e.preventDefault(); });
}

, destroy: function(){
    this.hammer.destroy()
}
}

// Init zoom and pan + configuration
var panZoomMap = svgPanZoom(document.querySelector('.map__content'), {
    minZoom: 1,
    maxZoom: 12,
    onZoom: function() {
        resizeMarkers();
        resizeLines();
    },
    customEventsHandler: eventsHandler
});

// Resize markers on zoom
var mapMarkers = document.getElementsByClassName('map__marker');

function resizeMarkers() {
    var zoom = panZoomMap.getZoom();
    var markerScale = 4.5;
    var markerOffset = markerScale - 2;
    var markerRadius = ((zoom / (zoom * zoom)) * markerScale) + markerOffset;

    for (var i = 0; i < mapMarkers.length; i++) {
        if (markerRadius < 7) {
            mapMarkers[i].setAttribute('r', markerRadius);
        }
    }
}

function resizeLines() {
    var mapLines = document.getElementsByClassName('map__line');
    var zoom = panZoomMap.getZoom();
    var lineScale = .8;
    var lineOffset = .6;
    var lineWidth = ((zoom / (zoom * zoom)) * lineScale) + lineOffset;

    for (var i = 0; i < mapLines.length; i++) {
        if (lineWidth < 2) {
            mapLines[i].style['stroke-width'] = lineWidth;
        }
    }
}

/* -------------------- MAP INFO -------------------- */

for (var i = 0; i < mapMarkers.length; i++) {
    // Check if the mouse has been moved
    var moved = false;
    mapMarkers[i].addEventListener('mousedown', function(){ moved = false }, false);
    mapMarkers[i].addEventListener('mousemove', function(){ moved = true }, false);

    // If the mouse hasn't been moved, get the data
    mapMarkers[i].addEventListener('mouseup', function(){
        var markerId = this.id;

        if (!moved) {
            for (var u = 0; u < mapMarkers.length; u++) {
                mapMarkers[u].style.fill = '#09A47C';
            }

            getJSON('/data/connections.json', function(data){
                showMarkerData(data, markerId);
            });
            this.style.fill = '#424BAF';
        }
    }, false);
}

function showMarkerData(obj, id) {
    var infoTitle = document.querySelector('.map-info__title');
    var infoIcon = document.querySelector('.map-info__icon');
    var infoDescription = document.querySelector('.map-info__description');
    var infoMeta = document.querySelector('.map-info__meta');

    for (var i = 0; i < obj.length; i++) {
        if (obj[i].id == id) {
            infoTitle.innerHTML = obj[i].title;
            infoIcon.style.display = 'block';
            infoIcon.style.backgroundImage = "url('" + obj[i].icon + "'";
            infoDescription.innerHTML = obj[i].description;
            infoMeta.innerHTML = obj[i].country + ' | ' + obj[i].date;
            return;
        }
    }
}



/* -------------------- TAB BAR --------------------*/

var mapWork = document.querySelector('#map__work');
var mapPresentations = document.querySelector('#map__presentations');
var map = document.querySelector('.map');

// Toggle button
function toggleButton(button, id) {
    var buttons = document.getElementById(id).getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('button--active');
    }
    button.classList.add('button--active');
}

function toggleWork(button, id) {
    var mapInfo = document.getElementById('map__info');
    var countryRankings = document.getElementById('country-rankings');
    countryRankings.style.display = 'none';
    mapInfo.style.display = 'block';
    toggleButton(button, id);
    resetMapColors();
    map.style.visibility = 'visible';
    mapWork.style.display = 'initial';
    mapPresentations.style.display = 'none';
}

function toggleVisited(button, id) {
    var mapInfo = document.getElementById('map__info');
    var countriesVisited = document.getElementById('countries-visited');
    countriesVisited.style.display = 'block';
    toggleButton(button, id);
    toggleMapColors();
    map.style.visibility = 'visible';
    mapPresentations.style.display = 'none';
    mapWork.style.display = 'none';
    mapInfo.style.display = 'none';
}

function toggleEngagement(button, id) {
    var mapInfo = document.getElementById('map__info');
    var countryRankings = document.getElementById('country-rankings');
    countryRankings.style.display = 'block';
    toggleButton(button, id);
    toggleMapColors();
    map.style.visibility = 'visible';
    mapPresentations.style.display = 'none';
    mapWork.style.display = 'none';
    mapInfo.style.display = 'none';
}

// Set map colors in Global Engagement mode
function toggleMapColors() {
    var mapIllustration = document.getElementById('map__illustration');
    var mapHighlight1 = Array.from(document.getElementsByClassName('map__highlight--1'));
    var mapHighlight2 = Array.from(document.getElementsByClassName('map__highlight--2'));
    var mapHighlight3 = Array.from(document.getElementsByClassName('map__highlight--3'));
    var mapHighlight4 = Array.from(document.getElementsByClassName('map__highlight--4'));
    var mapHighlight5 = Array.from(document.getElementsByClassName('map__highlight--5'));

    // Sets the color for the rest of the map when viewing in Global Engagement mode
    mapIllustration.style.fill = '#0F2B3E';

    mapHighlight1.forEach(function(item){
        // Sets the color for highlight--1 countries when viewing in Global Engagement mode
        item.style.fill = '#2594E8';
    });

    mapHighlight2.forEach(function(item){
        // Sets the color for highlight--2 countries when viewing in Global Engagement mode
        item.style.fill = '#1C9EE5';
    });
    
    mapHighlight3.forEach(function(item){
        // Sets the color for highlight--3 countries when viewing in Global Engagement mode
        item.style.fill = '#2782CF';
    });

    mapHighlight4.forEach(function(item){
        // Sets the color for highlight--4 countries when viewing in Global Engagement mode
        item.style.fill = '#2F85C4';
    });

    mapHighlight5.forEach(function(item){
        // Sets the color for highlight--5 countries when viewing in Global Engagement mode
        item.style.fill = '#36648E';
    });
}

function resetMapColors() {
    var mapIllustration = document.getElementById('map__illustration');
    var mapHighlight1 = Array.from(document.getElementsByClassName('map__highlight--1'));
    var mapHighlight2 = Array.from(document.getElementsByClassName('map__highlight--2'));
    var mapHighlight3 = Array.from(document.getElementsByClassName('map__highlight--3'));
    var mapHighlight4 = Array.from(document.getElementsByClassName('map__highlight--4'));
    var mapHighlight5 = Array.from(document.getElementsByClassName('map__highlight--5'));

    mapIllustration.style.fill = '#164F75';

    mapHighlight1.forEach(function(item){
        item.style.fill = null;
    });

    mapHighlight2.forEach(function(item){
        item.style.fill = null;
    });
    
    mapHighlight3.forEach(function(item){
        item.style.fill = null;
    });

    mapHighlight4.forEach(function(item){
        item.style.fill = null;
    });

    mapHighlight5.forEach(function(item){
        item.style.fill = null;
    });
}

function togglePresentations(button, id) {
    var mapInfo = document.getElementById('map__info');
    var countryRankings = document.getElementById('country-rankings');
    countryRankings.style.display = 'none';
    mapInfo.style.display = 'block';
    toggleButton(button, id);
    resetMapColors();
    map.style.visibility = 'visible';
    mapPresentations.style.display = 'initial';
    mapWork.style.display = 'none';
}

// Performs AJAX JSON request from server
function getJSON(path, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        if (callback) callback(data);
    }

    xhr.open('GET', path);
    xhr.send();
}

//---
// let countryList = Array.from(
//   document.querySelectorAll('.country-rankings__country')
// )
// let firstTen = countryList.splice(0, 10);
// console.log(firstTen);
// let list = document.querySelector('.list')
// function reorderCountries() {
//   let rand = Math.round(Math.random() * 10);
//   list.insertBefore(firstTen[rand], firstTen[0]);
//   countryList = Array.from(
//     document.querySelectorAll('.country-rankings__country')
//   )
//   firstTen = countryList.splice(0, 10);
//   console.log(firstTen);
// }

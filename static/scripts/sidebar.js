var sideBarOpen = false;

function showSideBar(){
    // Icon animation
    var iconBars = document.getElementsByClassName('nav-icon__bar');
    var sideBar = document.querySelector('.side-bar');
    var links = document.getElementsByClassName('side-bar__button');

    if (!sideBarOpen) {
        iconBars[0].style.transform = 'rotate(45deg) translateY(-8px)';
        iconBars[1].style.transform = 'rotate(-45deg) translateY(7px)';
        sideBar.style.transform = 'translateX(0)';
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(){
                iconBars[0].style.transform = 'rotate(0) translateY(0)';
                iconBars[1].style.transform = 'rotate(0) translateY(0)';
                sideBar.style.transform = 'translateX(-100%)';
                sideBarOpen = false;
                console.log(sideBarOpen);
            });
        }
    } else {
        iconBars[0].style.transform = 'rotate(0) translateY(0)';
        iconBars[1].style.transform = 'rotate(0) translateY(0)';
        sideBar.style.transform = 'translateX(-100%)';
    }
    sideBarOpen = !sideBarOpen;
}

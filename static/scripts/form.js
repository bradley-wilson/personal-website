(function(w, d, t, s, n) {
  w.FlodeskObject = n;
  var fn = function() {
    (w[n].q = w[n].q || []).push(arguments);
  };
  w[n] = w[n] || fn;
  var f = d.getElementsByTagName(t)[0];
  var e = d.createElement(t);
  var h = '?v=' + new Date().getTime();
  e.async = true;
  e.src = s + h;
  f.parentNode.insertBefore(e, f);
})(window, document, 'script', 'https://assets.flodesk.com/universal.js', 'fd');
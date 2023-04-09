
try {
  new Function("import('/hacsfiles/frontend/main-85e087f9.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-85e087f9.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
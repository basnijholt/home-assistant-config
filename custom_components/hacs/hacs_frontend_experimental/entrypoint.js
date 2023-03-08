
try {
  new Function("import('/hacsfiles/frontend/main-aeda8d41.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-aeda8d41.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
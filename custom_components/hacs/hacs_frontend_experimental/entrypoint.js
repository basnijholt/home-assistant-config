
try {
  new Function("import('/hacsfiles/frontend/main-c4dd4de7.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-c4dd4de7.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
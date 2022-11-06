
try {
  new Function("import('/hacsfiles/frontend/main-ec7846c8.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-ec7846c8.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
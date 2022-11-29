
try {
  new Function("import('/hacsfiles/frontend/main-c66a9a06.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-c66a9a06.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
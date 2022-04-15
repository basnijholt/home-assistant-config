
try {
  new Function("import('/hacsfiles/frontend/main-f3e781b1.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-f3e781b1.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
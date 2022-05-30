
try {
  new Function("import('/hacsfiles/frontend/main-c805434e.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-c805434e.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
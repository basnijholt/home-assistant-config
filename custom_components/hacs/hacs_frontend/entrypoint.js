
try {
  new Function("import('/hacsfiles/frontend/main-7bc9a818.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-7bc9a818.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
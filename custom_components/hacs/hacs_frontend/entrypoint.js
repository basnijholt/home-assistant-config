
try {
  new Function("import('/hacsfiles/frontend/main-ad130be7.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-ad130be7.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  

try {
  new Function("import('/hacsfiles/frontend/main-bfa41146.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-bfa41146.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
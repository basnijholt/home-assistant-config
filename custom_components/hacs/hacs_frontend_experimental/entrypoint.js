
try {
  new Function("import('/hacsfiles/frontend/main-73688df5.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-73688df5.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  
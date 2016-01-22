function test1() {
  var arg1 = 14;
  var arg2 = "oops!";
// key, value, context, NO domain, NO category
  var a = _n( "context1", "singular_key1", "plural_key1", arg1 )
  var b = _n( "singular_key2", "plural_key2", arg1 )
  var c = _( "context3", "singular_key3")
  var d = _( "singular_key4");
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
var Jed = require('jed');
global.sprintf = /*require("sprintf-js")*/Jed.sprintf
function loadI18n (lc) {
  var lcobj = {}
  try {
    lcobj = require("./"+lc+".json");
  } catch(e) {
    if (lc) {
      console.warn(lc + " not found, using default")
    } else {
      console.warn("using default")
    }
  }
  var i18n = new Jed(lcobj);
  global._ = function(arg1, arg2) {
    var arglen = arguments.length;
    if (arglen == 2) {
      return i18n.pgettext(arg1, arg2);
    }
    return i18n.gettext(arg1);
  }

  global._n = function(arg1, arg2, arg3) {
    var arglen = arguments.length;
    if (arglen == 2) {
      return i18n.npgettext(arg1, arg2, arg3);
    }
    return i18n.ngettext(arg1, arg2);
  }
};
var sub = require('./subdir/sub');

(function(){
  loadI18n();
  test1();
  sub.test2();
  loadI18n("sl");
  test1();
  sub.test2();
})();

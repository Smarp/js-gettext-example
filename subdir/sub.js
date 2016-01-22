
function test2() {
  var arg1 = "Sunshine";
  var arg2 = 0;
  var a = sprintf(_n( "Hi %s, you have %d message", "Hi %s, you have %d messages", arg1 ), arg1, arg2);

  var arg1 = "Dude";
  var arg2 = 1;
  var b = sprintf(_n( "Hi %s, you have %d message", "Hi %s, you have %d messages", arg1 ), arg1, arg2);

  var arg1 = "London";
  var arg2 = 12;
  var c = sprintf(_n( "Hi %s, you have %d message", "Hi %s, you have %d messages", arg1 ), arg1, arg2);

  var arg1 = "Multi";
  var arg2 = 23;
  var d = sprintf(_n( "Hi %s, you have %d message", "Hi %s, you have %d messages", arg1 ), arg1, arg2);

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

}
exports.test2 = test2;

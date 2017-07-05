function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}
function quiz1(n) {
  var e = espacios(n);
  for (var i = 0; i < n; i++) {
      var s = "";
      for (var j = i+1; j <= n; j++) {
        s += j;
      }
      console.log(e + s);
  }
}
quiz1(5);

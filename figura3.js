function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}

function quiz3(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    var e = espacios (n - (i+1));
    for (var j = i; j >= 1; j--) {
      s += j;
    }
    console.log(e + s);
  }
}
quiz3(5);

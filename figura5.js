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

function quiz4 (r) {
  //for (var x = 0; x < r; x++) {
  //}
  var x = 0;
  var circulo = [];
  var espacios = [];
  while (x <= r) {
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    }
    var e = "";
    for (var i = 0; i <= r - y; i++) {
       e += "  ";
    }
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
    espacios.push (e);
  }
  for (var i = espacios.length -1; i >=0 ; i--) {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
}

function quiz1(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    console.log(s);
  }
  var e = espacios(n);
  for (var i = 0; i < n; i++) {
      var s = "";
      for (var j = n - i; j >= 1; j--) {
        s += j;
      }
      console.log(e + s);
  }
}

//quiz3(5);
quiz4(5);
//quiz1(4);

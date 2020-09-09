let chekcA = "",
  checkB = "",
  checkC = "",
  checkD = "",
  checkE = "",
  checkF = "",
  checkG = "",
  checkH = "",
  checkI = "";

let turn;


var vOneLS = localStorage.getItem("vOneLocalStorage");

var dbRefTurn = firebase.database().ref("turn" + vOneLS).child("value");
dbRefTurn.on('value', snap => turn = snap.val());

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

firebase.database().ref("a" + vOneLS).set({
  value: ""
});

firebase.database().ref("b" + vOneLS).set({
  value: ""
});

firebase.database().ref("c" + vOneLS).set({
  value: ""
});

firebase.database().ref("d" + vOneLS).set({
  value: ""
});

firebase.database().ref("e" + vOneLS).set({
  value: ""
});

firebase.database().ref("f" + vOneLS).set({
  value: ""
});

firebase.database().ref("g" + vOneLS).set({
  value: ""
});

firebase.database().ref("h" + vOneLS).set({
  value: ""
});

firebase.database().ref("i" + vOneLS).set({
  value: ""
});

var a00 = document.getElementById("a");
var dbRef00 = firebase.database().ref().child("a" + vOneLS).child("value");
dbRef00.on('value', snap => a00.innerHTML = checkA = snap.val());

var a00 = document.getElementById("a");
var dbRef00 = firebase.database().ref().child("a" + vOneLS).child("value");
dbRef00.on('value', snap => win());

var b01 = document.getElementById("b");
var dbRef01 = firebase.database().ref().child("b" + vOneLS).child("value");
dbRef01.on('value', snap => b01.innerHTML = checkB = snap.val());

var b01 = document.getElementById("b");
var dbRef01 = firebase.database().ref().child("b" + vOneLS).child("value");
dbRef01.on('value', snap => win());

var c02 = document.getElementById("c");
var dbRef02 = firebase.database().ref().child("c" + vOneLS).child("value");
dbRef02.on('value', snap => c02.innerHTML = checkC = snap.val());

var c02 = document.getElementById("c");
var dbRef02 = firebase.database().ref().child("c" + vOneLS).child("value");
dbRef02.on('value', snap => win());

var d10 = document.getElementById("d");
var dbRef10 = firebase.database().ref().child("d" + vOneLS).child("value");
dbRef10.on('value', snap => d10.innerHTML = checkD = snap.val());

var d10 = document.getElementById("d");
var dbRef10 = firebase.database().ref().child("d" + vOneLS).child("value");
dbRef10.on('value', snap => win());

var e11 = document.getElementById("e");
var dbRef11 = firebase.database().ref().child("e" + vOneLS).child("value");
dbRef11.on('value', snap => e11.innerHTML = checkE = snap.val());

var e11 = document.getElementById("e");
var dbRef11 = firebase.database().ref().child("e" + vOneLS).child("value");
dbRef11.on('value', snap => win());

var f12 = document.getElementById("f");
var dbRef12 = firebase.database().ref().child("f" + vOneLS).child("value");
dbRef12.on('value', snap => f12.innerHTML = checkF = snap.val());

var f12 = document.getElementById("f");
var dbRef12 = firebase.database().ref().child("f" + vOneLS).child("value");
dbRef12.on('value', snap => win());

var g20 = document.getElementById("g");
var dbRef20 = firebase.database().ref().child("g" + vOneLS).child("value");
dbRef20.on('value', snap => g20.innerHTML = checkG = snap.val());

var g20 = document.getElementById("g");
var dbRef20 = firebase.database().ref().child("g" + vOneLS).child("value");
dbRef20.on('value', snap => win());

var h21 = document.getElementById("h");
var dbRef21 = firebase.database().ref().child("h" + vOneLS).child("value");
dbRef21.on('value', snap => h21.innerHTML = checkH = snap.val());

var h21 = document.getElementById("h");
var dbRef21 = firebase.database().ref().child("h" + vOneLS).child("value");
dbRef21.on('value', snap => win());

var i22 = document.getElementById("i");
var dbRef22 = firebase.database().ref().child("i" + vOneLS).child("value");
dbRef22.on('value', snap => i22.innerHTML = checkI = snap.val());

var i22 = document.getElementById("i");
var dbRef22 = firebase.database().ref().child("i" + vOneLS).child("value");
dbRef22.on('value', snap => win());




function win() {
  if (checkA == checkB && checkB == checkC && checkA != "") {
    document.getElementById("diagonalAC").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    if (turn) {
      var dbRefabc = firebase.database().ref("name1" + vOneLS).child("player1");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    } else {
      var dbRefabc = firebase.database().ref("name2" + vOneLS).child("player2");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    }
  } else if (checkD == checkE && checkE == checkF && checkD != "") {
    document.getElementById("diagonalDF").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    if (turn) {
      var dbRefabc = firebase.database().ref("name1" + vOneLS).child("player1");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    } else {
      var dbRefabc = firebase.database().ref("name2" + vOneLS).child("player2");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    }
  } else if (checkG == checkH && checkH == checkI && checkG != "") {
    document.getElementById("diagonalGI").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    if (turn) {
      var dbRefabc = firebase.database().ref("name1" + vOneLS).child("player1");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    } else {
      var dbRefabc = firebase.database().ref("name2" + vOneLS).child("player2");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    }
  } else if (checkA == checkD && checkD == checkG && checkA != "") {
    document.getElementById("diagonalAG").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    if (turn) {
      var dbRefabc = firebase.database().ref("name1" + vOneLS).child("player1");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    } else {
      var dbRefabc = firebase.database().ref("name2" + vOneLS).child("player2");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    }
  } else if (checkB == checkE && checkE == checkH && checkB != "") {
    document.getElementById("diagonalBH").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    if (turn) {
      var dbRefabc = firebase.database().ref("name1" + vOneLS).child("player1");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    } else {
      var dbRefabc = firebase.database().ref("name2" + vOneLS).child("player2");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    }
  } else if (checkC == checkF && checkF == checkI && checkC != "") {
    document.getElementById("diagonalCI").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    if (turn) {
      var dbRefabc = firebase.database().ref("name1" + vOneLS).child("player1");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    } else {
      var dbRefabc = firebase.database().ref("name2" + vOneLS).child("player2");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    }
  } else if (checkA == checkE && checkE == checkI && checkA != "") {
    document.getElementById("diagonalAI").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    if (turn) {
      var dbRefabc = firebase.database().ref("name1" + vOneLS).child("player1");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    } else {
      var dbRefabc = firebase.database().ref("name2" + vOneLS).child("player2");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    }
  } else if (checkC == checkE && checkE == checkG && checkC != "") {
    document.getElementById("diagonalCG").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    if (turn) {
      var dbRefabc = firebase.database().ref("name1" + vOneLS).child("player1");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    } else {
      var dbRefabc = firebase.database().ref("name2" + vOneLS).child("player2");
      dbRefabc.on('value', snap => document.getElementById("winner").innerHTML = "WINNER: " + snap.val());
    }
  } else if (checkA != "" && checkB != "" && checkC != "" && checkD != "" && checkE != "" && checkF != "" && checkG != "" && checkH != "" && checkI != "") {
    document.getElementById("diagonalCG").style.display = "block";
    document.getElementById("mainDiv").style.zIndex = "-1";
    modal.style.display = "block";
    document.getElementById("winner").innerHTML = "MATCH DRAW!";
  }
}


function a() {
  var a = document.getElementById("a");
  if (a.innerHTML == "") {
    if (turn) {
      firebase.database().ref("a" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("a" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function b() {
  var b = document.getElementById("b");
  if (b.innerHTML == "") {
    if (turn) {
      firebase.database().ref("b" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("b" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function c() {
  var c = document.getElementById("c");
  if (c.innerHTML == "") {
    if (turn) {
      firebase.database().ref("c" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("c" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function d() {
  var d = document.getElementById("d");
  if (d.innerHTML == "") {
    if (turn) {
      firebase.database().ref("d" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("d" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function e() {
  var e = document.getElementById("e");
  if (e.innerHTML == "") {
    if (turn) {
      firebase.database().ref("e" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("e" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function f() {
  var f = document.getElementById("f");
  if (f.innerHTML == "") {
    if (turn) {
      firebase.database().ref("f" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("f" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function g() {
  var g = document.getElementById("g");
  if (g.innerHTML == "") {
    if (turn) {
      firebase.database().ref("g" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("g" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function h() {
  var h = document.getElementById("h");
  if (h.innerHTML == "") {
    if (turn) {
      firebase.database().ref("h" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("h" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function i() {
  var i = document.getElementById("i");
  if (i.innerHTML == "") {
    if (turn) {
      firebase.database().ref("i" + vOneLS).set({
        value: "X"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: false
      });
    } else {
      firebase.database().ref("i" + vOneLS).set({
        value: "O"
      });
      firebase.database().ref("turn" + vOneLS).set({
        value: true
      });
    }
  }
}

function reset() {
  firebase.database().ref("a" + vOneLS).set({
    value: ""
  });

  firebase.database().ref("b" + vOneLS).set({
    value: ""
  });

  firebase.database().ref("c" + vOneLS).set({
    value: ""
  });

  firebase.database().ref("d" + vOneLS).set({
    value: ""
  });

  firebase.database().ref("e" + vOneLS).set({
    value: ""
  });

  firebase.database().ref("f" + vOneLS).set({
    value: ""
  });

  firebase.database().ref("g" + vOneLS).set({
    value: ""
  });

  firebase.database().ref("h" + vOneLS).set({
    value: ""
  });

  firebase.database().ref("i" + vOneLS).set({
    value: ""
  });
  document.getElementById("diagonalAC").style.display = "none";
  document.getElementById("diagonalDF").style.display = "none";
  document.getElementById("diagonalGI").style.display = "none";
  document.getElementById("diagonalAG").style.display = "none";
  document.getElementById("diagonalBH").style.display = "none";
  document.getElementById("diagonalCI").style.display = "none";
  document.getElementById("diagonalAI").style.display = "none";
  document.getElementById("diagonalCG").style.display = "none";
  document.getElementById("mainDiv").style.zIndex = "2";
  modal.style.display = "none";
  firebase.database().ref("turn" + vOneLS).set({
    value: true
  });
}

function exit() {
  firebase.database().ref("a" + vOneLS).remove();
  firebase.database().ref("b" + vOneLS).remove();
  firebase.database().ref("c" + vOneLS).remove();
  firebase.database().ref("d" + vOneLS).remove();
  firebase.database().ref("e" + vOneLS).remove();
  firebase.database().ref("f" + vOneLS).remove();
  firebase.database().ref("g" + vOneLS).remove();
  firebase.database().ref("h" + vOneLS).remove();
  firebase.database().ref("i" + vOneLS).remove();
  firebase.database().ref("name1" + vOneLS).remove();
  firebase.database().ref("name2" + vOneLS).remove();
  firebase.database().ref("turn" + vOneLS).remove();
  firebase.database().ref(vOneLS).remove();
  setTimeout(function() {
    window.location = "index.html";
  }, 1000);

}

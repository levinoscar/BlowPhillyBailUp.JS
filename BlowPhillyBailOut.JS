onEvent("judgeButton", "click", function( ) {
  setScreen("judgeScreen");
});
onEvent("chargeButton", "click", function( ) {
  setScreen("chargesScreen");
});
onEvent("ZipButton", "click", function( ) {
  setScreen("zipscreen");
});
onEvent("CombineButton", "click", function( ) {
  setScreen("resultsscreen");
});
//Other stuff goes here
var c;
var j;
var z;
onEvent("c1", "click", function( ) {
  c = 50513;
  setScreen("mainScreen");
});
onEvent("c2", "click", function( ) {
  c = 50419;
  setScreen("mainScreen");
});
onEvent("c3", "click", function( ) {
  c = 50365;
  setScreen("mainScreen");
});
onEvent("c4", "click", function( ) {
  c = 50348;
  setScreen("mainScreen");
});
onEvent("c5", "click", function( ) {
  c = 50347;
  setScreen("mainScreen");
});
onEvent("c6", "click", function( ) {
  c = 50317;
  setScreen("mainScreen");
});
//Judges
onEvent("j1", "click", function( ) {
  if (c == 50513) {
    j = 0.8;
  }
  if (c == 50419) {
    j = 0.95;
  }
  if (c == 50365) {
    j = 0.8;
  }
  if (c == 50348) {
    j = 0.99;
  }
  if (c == 50347) {
    j = 1;
  }
  if (c == 50317) {
    j = 1;
  }
  setScreen("mainScreen");
});
onEvent("j2", "click", function( ) {
  if (c == 50513) {
    j = 1.54;
  }
  if (c == 50419) {
    j = 1.44;
  }
  if (c == 50365) {
    j = 1.08;
  }
  if (c == 50348) {
    j = 0.99;
  }
  if (c == 50347) {
    j = 1.0;
  }
  if (c == 50317) {
    j = 0.96;
  }
  setScreen("mainScreen");
});
onEvent("j3", "click", function( ) {
  if (c == 50513) {
    j = 0.60;
  }
  if (c == 50419) {
    j = 1.42;
  }
  if (c == 50365) {
    j = 1.1;
  }
  if (c == 50348) {
    j = 1.0;
  }
  if (c == 50347) {
    j = 1.0;
  }
  if (c == 50317) {
    j = 0.99;
  }
  setScreen("mainScreen");
});
onEvent("j4", "click", function( ) {
  if (c == 50513) {
    j = 1.42;
  }
  if (c == 50419) {
    j = 0.99;
  }
  if (c == 50365) {
    j = 0.81;
  }
  if (c == 50348) {
    j = 1.0;
  }
  if (c == 50347) {
    j = 1.01;
  }
  if (c == 50317) {
    j = 0.96;
  }
  setScreen("mainScreen");
});
onEvent("j5", "click", function( ) {
  if (c == 50513) {
    j = 1.54;
  }
  if (c == 50419) {
    j = 1.44;
  }
  if (c == 50365) {
    j = 1.08;
  }
  if (c == 50348) {
    j = 0.99;
  }
  if (c == 50347) {
    j = 1.00;
  }
  if (c == 50317) {
    j = 0.96;
  }
  setScreen("mainScreen");
});
onEvent("j6", "click", function( ) {
  if (c == 50513) {
    j = 1.47;
  }
  if (c == 50419) {
    j = 0.9;
  }
  if (c == 50365) {
    j = 1.09;
  }
  if (c == 50348) {
    j = 0.99;
  }
  if (c == 50347) {
    j = 1.009;
  }
  if (c == 50317) {
    j = 1.11;
  }
  setScreen("mainScreen");
});
//Zip Codes
onEvent("z1", "click", function( ) {
  z = 1.55;
  setScreen("mainScreen");
});
onEvent("z2", "click", function( ) {
  z = 1;
  setScreen("mainScreen");
});
onEvent("z3", "click", function( ) {
  z = 6.73;
  setScreen("mainScreen");
});
onEvent("z4", "click", function( ) {
  z = 2.23;
  setScreen("mainScreen");
});
//combine
var main_value;
main_value = 0;
onEvent("CombineButton", "click", function( ) {
  var main_value = c * (z * j);
  setText("final", "$" + Math.round(main_value));
  var height;
  height = main_value;
  var height = height / 1000;
  setText("ml", Math.round(height + " ml"));
});
//Joe mama
onEvent("chargeButton", "click", function( ) {
  showElement("judgeButton");
});
onEvent("judgeButton", "click", function( ) {
  showElement("ZipButton");
});
onEvent("ZipButton", "click", function( ) {
  showElement("CombineButton");
});

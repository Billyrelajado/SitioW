
//  GLOBAL VARS
var d =  document.getElementById("drawing_area");
var lienzo = d.getContext("2d");
var line = 300;

// ===========
draw();


// ============ functions
function draw(params) {
  for (let index = 0; index < line; index++) {
    
    dibujarLinea("#AFF", 0,0,index,300);
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
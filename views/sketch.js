// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/4zr8j-jeU_M

function setup() {
  createCanvas(1200, 1200);
  drawData();
  console.log('running');
}

function drawData() {
  loadJSON('all', gotData);
}

function gotData(data) {
  background(51);
  console.log(data);
  // data.forEach( function (item){
  //   // console.log(item)
  //   // alert(x);
  // })
  // var keys = Object.keys(data);
  for (var i = 0; i < data.length; i++) {
    var word = data[i].name
    var x = random(width);
    var y = random(height);
    fill(200);
    textSize(5);
    text(word, x, y);
  }
}

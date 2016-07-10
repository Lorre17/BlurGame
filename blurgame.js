window.onload = init;

funtion init(){
  var image = document.getElementById("zero");
  image.onclick = showAnswer;
}

function showAnswer(){
  var image = document.getElementById("zero");
  image.src = "zero.jpg";
}

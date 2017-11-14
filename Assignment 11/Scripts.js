var vel = 2000;
var degs = 0;
var cat = document.querySelector("img");
function repeat(){
  if(vel == 1000){
    cat.classList.add("hover");
    console.log("hover")
  }else{
    cat.classList.remove("hover");
    console.log("nohover")
  }
  degs+=360;
  cat.style.transform = "rotate("+degs+"deg)";
  setTimeout(repeat, vel);
}
repeat();
document.querySelector("img").addEventListener("mouseenter",hovering);
function hovering(){
  vel = 1000;
}
document.querySelector("img").addEventListener("mouseleave",nohovering);
function nohovering(){
  vel = 2000;
}
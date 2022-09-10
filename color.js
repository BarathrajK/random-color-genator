// random color
var divEle= document.getElementById("text1")
var btnEle= document.getElementById("text")
function color(){
    var x = Math.floor(Math.random()*255)
var y = Math.floor(Math.random()*255)
var z = Math.floor(Math.random()*255)
var p = "rgb("+x+ ","+y+ "," +z+")";
console.log(p);
divEle.style.backgroundColor= p
divEle.style.color=p
}
btnEle.addEventListener("click",color);


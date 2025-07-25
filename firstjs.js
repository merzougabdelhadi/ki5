var btnn = document.querySelector(".btn");
var mydiv = document.querySelector(".mydiv");

var color =["red" , "blue" , "green"]
 
    var i=0;
    btnn.onclick = function(){

 mydiv.style.background = color[i];
 
i++;



if(mydiv.oneclick){

 if(i==3)
    i=0;

}





}



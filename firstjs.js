//get Element into  varaible
var input = document.getElementById("input");
var btn = document.getElementById("btn");
var msg = document.getElementById("msg");

//Events 
btn.onclick = function (){
    var inputValue = input.value;

    msg.innerHTML = inputValue;
    input.value= "";
    if(inputValue >5 )
        input.value =0;
}

var input =document.querySelector("#input");
var btn = document.querySelector("#brn");

btn.addEventListener('click' , toggle )
 function toggle(){
if(btn.getAttribute('data-text') == "show"){
    input.setAttribute('type' , 'text');
    btn.setAttribute('data-text' , 'hide');

    btn.innerHTML ="Hide";}
else{

    input.setAttribute('type' , 'password');
    btn.setAttribute('data-text' , 'show');

    btn.innerHTML ="Show";









}
}



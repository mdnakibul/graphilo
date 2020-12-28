var gttButton = document.getElementById("gtt");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        gttButton.style.display = "block";
    }else {
        gttButton.style.display = "none";
    }
}
function gttFunction(){
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0;
}
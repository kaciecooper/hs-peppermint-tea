// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  
var tea tin = document.querySelector(".tea-tin");
    var mint1 = document.querySelector(".mint-1");
    var mint2 = document.querySelector(".mint-2");
    var mint3 = document.querySelector(".mint-3");
    var intro = document.querySelector(".intro");
     
    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }
 
    window.addEventListener("DOMContentLoaded", scrollLoop, false);
 
    var xScrollPosition;
    var yScrollPosition;
 
    function scrollLoop() {
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;
 
        setTranslate(0, yScrollPosition * -0.5, tea tin);
        setTranslate(0, yScrollPosition * -0.9, mint1);
        setTranslate(0, yScrollPosition * -1.3, mint2);
        setTranslate(0, yScrollPosition * -1.7, mint3);
        setTranslate(0, yScrollPosition * -1.7, intro);
 
        requestAnimationFrame(scrollLoop);
    }

// End of Your Code . Don't delete that line below!!
});
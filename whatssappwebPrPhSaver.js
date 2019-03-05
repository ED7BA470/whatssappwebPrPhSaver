/*
 * 
 * -----------------------------------------------------------------
 * | Alert! This code isn't a complete code. The code is divided in |
 * | diferent parts dividid with "PENCIL"                           |
 * | Do not use this code if you don't know how to do it. :)        |
 * -----------------------------------------------------------------
 * 
 * 
*/
var image;
var loadedimageCount = 0;

var imgCont = document.createElement("div");
imgCont.setAttribute("id", "BroughtYouByED7BA470");
document.body.appendChild(imgCont);
/*
    PENCIL
*/
document.querySelector('#pane-side').scrollBy(0,72 * document.querySelectorAll('#pane-side > div > div > div > div').length);

/*
    PENCIL
*/

for(var i = 0; i < document.getElementsByClassName("Qgzj8").length; i++) {

    image = document.createElement("img");
    image.setAttribute("id", "tmpimage" + loadedimageCount);
    document.body.appendChild(image);


    document.getElementById("tmpimage" + loadedimageCount).setAttribute("src", document.getElementsByClassName("Qgzj8")[i/*0 */].src);
    loadedimageCount++;
    
}

/*
    PENCIL
*/

document.body.removeChild(document.getElementById("app"));
document.head.innerHTML = "";
alert("Loaded");

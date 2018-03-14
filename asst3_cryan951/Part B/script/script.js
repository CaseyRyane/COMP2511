/* This function makes the text larger and removes images from 
the main pageto make it easeier to read*/
function easyRead(){

	/*Removes images from the document by adding style */
    var imgs = document.querySelectorAll("img");
    for (i=0; i <imgs.length; i++)
    {
        imgs[i].classList.add("off");
    }
	
	/*Enlarges the text in the body */
    document.getElementById("content").style.fontSize = "2em";

	/*Removes the easy read button from view */
    var easyButton = document.getElementById("easy");
    easyButton.style.display = 'none';

	/*normal view button is made visable */
    var normalButton = document.getElementById("normal");
    normalButton.style.display = 'initial';
}

/*This function reveret the text to the original size and adds
all images back on to the page*/
function normalRead(){
	
	/*Adds images back into the document by removing style*/
    var imgs = document.querySelectorAll("img");
    for (i=0; i <imgs.length; i++)
    {
        imgs[i].classList.remove("off");
    }
	
	/*Returns font to the inital size*/
    document.getElementById("content").style.fontSize = "initial";
	
	/*The easy view button is hidden from view*/
    var easyButton = document.getElementById("easy");
    easyButton.style.display = 'initial';

	/*The normal view button reapears*/
    var normalButton = document.getElementById("normal");
    normalButton.style.display = 'none';

}

/* global variables to keep track of the position in the aray
and the color at each array position*/
var colorArray=["#f5f5f5","#AAF5F1","#AAF5BA","#EDAAF5", "#7DD0C3"]
var colorNumber = 0;

/*THis function changes the background color of the body when 
the logo is double clicked */
function easterEgg(){
    content = document.querySelector("#content");
    content.style.backgroundColor=colorArray[colorNumber];

    colorNumber = (colorNumber + 1) % colorArray.length;

}

/*This function toggles the style to create a diffrent look and 
feel for the web page, Background, text background, font
and font size are all modifed */
function styleChange(){

	/*Changes the color surronding all the content within the body*/
    var divs = document.querySelectorAll("li div");
    for (i=0; i <divs.length; i++)
    {
        divs[i].classList.toggle("shiftGrey");
    }
    
     /*Changes the fontsize and font family for items in the body*/   
    var para = document.querySelectorAll("p");
    for (i=0; i <para.length; i++)
    {
        para[i].classList.toggle("shiftP");
    }

	/*Changes the background for the site*/
	var body = document.querySelector("body");
	body.classList.toggle("BGChange");
	
 
}












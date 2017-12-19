/*                    */
/*  HANDLE WITH CARE  */
//
//  File is NOT working properly!
//  Load this file into developer tools
//  for debugging.
//

var foreignId = 'my_fo_svg';
var cacheId = 'go_here';
var myTarget = document.getElementById('my_svg_2');
var myTestImage = imageWithBaseUri(myTarget);
var width, height;

// set width, height to target width
width = myTarget.width.baseVal.value;
height = myTarget.height.baseVal.value;

myTestImage.width =  width;
myTestImage.height = height;

// create a <svg>-element with id='my_fo_svg'
// we need it's background later;
//
var myForeignSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
myForeignSVG.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
myForeignSVG.setAttribute('id', cacheId);
myForeignSVG.setAttribute('width', width );
myForeignSVG.setAttribute('height', height );
//
// show the new created svg
document.body.appendChild(myForeignSVG);
//
// set background-image to image-Uri
setBackgroundImage(cacheId, myTestImage.src);

// create again an img, this time with background-image
//
var myNewImage = imageWithBaseUri(document.getElementById(cacheId));

// draw img into canvas;
// and replace target svg with png img
// createPNGAndReplaceSVG( myNewImage, myTarget, 'name_it');
//
// keep target and only append to <body>
createPNGAndAppend( myNewImage, 'name_it');


function setBackgroundImage( elementid, baseUri ) {
  var element = document.getElementById(elementid);
  element.setAttribute('style', 'background-image: url(' + baseUri + ');');
}

function imageWithBaseUri( svg ) {
  var myImg;
  myImg = new Image();
  myImg.width = svg.width.baseVal.value;
  myImg.height = svg.height.baseVal.value;
  myImg.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg.outerHTML)));
  
  return myImg;
}

function showElement( element ){
  document.body.appendChild(element);
}

var myOriginSVG;
var myIMGWithBase_1, myIMGWithBase_2;
var myBackgroundSVG;
var myCanvas;
var myCtx;
var myPNG = new Image();

myOriginSVG  = document.getElementById("my_svg_2");

myIMGWithBase_1 = imageWithBaseUri(myOriginSVG);

/*
document.body.appendChild(myIMGWithBase);
*/

/*
setBackgroundImage( 'my_fo_svg', myIMGWithBase.src );
*/
/*
setTimeout(  setBackgroundImage, 2000, 'my_fo_svg', myIMGWithBase_1.src);
*/


myBackgroundSVG = document.getElementById('my_fo_svg');

myIMGWithBase_2 = imageWithBaseUri(myBackgroundSVG);

/* 
document.body.appendChild(myIMGWithBase_2);
*/

myCanvas = document.createElement('canvas');
myCanvas.width = myIMGWithBase_2.width;
myCanvas.height = myIMGWithBase_2.height;

/* 
document.body.appendChild(myCanvas);
*/

myCtx = myCanvas.getContext('2d');

/*
myCtx.drawImage(myIMGWithBase_2, 0, 0);
*/

function drawImage(){
  myCtx.drawImage(myIMGWithBase_2, 0, 0);
};

setTimeout(drawImage, 2000);

myPNG.src = myCanvas.toDataURL('image/png');
document.body.appendChild(myPNG);

setTimeout(
  function(){},
  2000
);

myBackgroundSVG.parentNode.replaceChild(myPNG, myBackgroundSVG);


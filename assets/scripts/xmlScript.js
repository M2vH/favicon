// m2vh
// makeBaseUri( svg )

// Use this function to get an <img> out of <svg>
//
// take a <svg>-element;
// return an <img>-element of type='svg+xml' with src='baseUri'
//
function imageWithBaseUri( svg ) {
  var myImg;
  myImg = new Image();
  myImg.width = svg.width.baseVal.value;
  myImg.height = svg.height.baseVal.value;
  myImg.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg.outerHTML)));
  
  return myImg;
}

// return a baseUri from svg-element
function makeBaseUri( svg ) {
  return 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg.outerHTML)));
}

// use this function to put svg-image into background
//
// get element with id='elementid';
// set background-image to src("baseUri");
//
function setBackgroundImage( elementid, baseUri ) {
  var element = document.getElementById(elementid);
  element.setAttribute('style', 'background-image: url(' + baseUri + ');');
}

// use this function to put <img> into DOM
//
// append an <img> in element#id
// 
function appendImage(id, img) {
  document.getElementById(id).appendChild(img);
} 

// use this function to convert the result
// of the 'Create PNG'-button
//
// draw <img#id> into canvas;
// set id of new img (optional);
// replace <svg> with <img type='image/png' [id='id']>
// 
function drawCanvas(img, svg, id) {
  var myCanvas, myCtx;
  
  myCanvas = document.createElement('canvas');
  myCanvas.width = img.width;
  myCanvas.height = img.height;
  myCtx = myCanvas.getContext('2d');
  myCtx.drawImage(img, 0, 0)
  
  var png = new Image();
  png.src = myCanvas.toDataURL('image/png');
  if (id) {
    png.id = "id";
  }
  svg.parentNode.replaceChild(png, svg)
}

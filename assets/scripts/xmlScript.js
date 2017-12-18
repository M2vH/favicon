// m2vh
// makeBaseUri( svg )

// return an <img>-element of type='svg+xml' with src='baseUri'
function imageWithBaseUri( svg ) {
  var myImg;
  myImg = new Image();
  myImg.width = svg.width.baseVal.width;
  myImg.height = svg.height.baseVal.height;
  myImg.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg.outerHTML)));
  
  return myImg;
}

// return a baseUri from svg-element
function makeBaseUri( svg ) {
  return 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg.outerHTML)));
}

// get element with id='elementid',
// set background-image to src("baseUri"),
// use this function to put svg-image into background
// before converting
function setBackgroundImage( elementid, baseUri ) {
  var element = document.getElementById(elementid);
  element.setAttribute('style', 'background-image: url(' + baseUri + ');');
}

// append an <img> to element#id
function appendImage(id, img) {
  document.getElementById(id).appendChild(img);
} 

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

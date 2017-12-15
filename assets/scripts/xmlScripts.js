// m2vh
// makeBaseUri( svg )

// return an <img>-element with src=baseUri
function imageWithBaseUri( svg ) {
  var myImg;
  myImg = new Image();
  myImg.width = svg.width.baseVal.width;
  myImg.height = svg.height.baseVal.height;
  myImg.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg.outerHTML)));
  
  return myImg;
}

// append an <img> to element#id
function appendImage(id, img) {
  document.getElementById(id).appendChild(img);
} 

// draw <img#id> into canvas
// and replace with png
function drawCanvas(img, id) {
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
  img.parentNode.replace(png, img)
}

// Takes an SVG element as target
function svg_to_png_data(target) {
  var ctx, mycanvas, svg_data, img, child;

  // Flatten CSS styles into the SVG
  for (i = 0; i < target.childNodes.length; i++) {
    child = target.childNodes[i];
    var cssStyle = window.getComputedStyle(child);
    if(cssStyle){
       child.style.cssText = cssStyle.cssText;
    }
  }

  // Construct an SVG image
  svg_data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + target.offsetWidth +
             '" height="' + target.offsetHeight + '">' + target.innerHTML + '</svg>';
  img = new Image();
  img.src = "data:image/svg+xml," + encodeURIComponent(svg_data);

  // Draw the SVG image to a canvas
  mycanvas = document.createElement('canvas');
  mycanvas.width = target.offsetWidth;
  mycanvas.height = target.offsetHeight;
  ctx = mycanvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // Return the canvas's data
  return mycanvas.toDataURL("image/png");
}

// Takes an SVG element as target
function svg_to_png_replace(target) {
  var data, img;
  data = svg_to_png_data(target);
  img = new Image();
  img.src = data;
  target.parentNode.replaceChild(img, target);
}

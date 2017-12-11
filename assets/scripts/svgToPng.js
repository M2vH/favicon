// This script is based on the work found here:
// https://stackoverflow.com/a/21318963
// and here
// https://spin.atomicobject.com/2014/01/21/convert-svg-to-png/

// Write the CSS style inline
// Found here: https://stackoverflow.com/questions/25097566/css-style-to-inline-style-via-javascript
function applyStyle(el) {
    s = getComputedStyle(el);
    for (var key in s) {
        var property = key.replace(/\-([a-z])/g, function(v) { return v[1].toUpperCase(); });
        el.style[property] = s[key];
    }
}


// Takes an SVG element as target
function svg_to_png_data(target) {
  var ctx, mycanvas, svg_data, img, child;

  // Flatten CSS styles into the SVG
  // applyStyle(element) on every child
  for (i = 0; i < target.children.length; i++) {
    child = target.children[i];
  //   var cssStyle = window.getComputedStyle(child);
  //   if(cssStyle){
  //      child.style.cssText = cssStyle.cssText;
    applyStyle(child);
    }
    // }    // End if
  

  // Construct an SVG image
  // we don't construct a SVG...
  // svg_data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + target.offsetWidth +
  //            '" height="' + target.offsetHeight + '">' + target.innerHTML + '</svg>';
  
  // we have a SVG already!
  // svg_data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + target.width.baseVal.value +
  //           '" height="' + target.height.baseVal.value + '">' + target.innerHTML + '</svg>';
  
  // We receive a svg object
  svg_data = target;
  
  img = new Image();
  img.src = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(svg_data)));

  // Draw the SVG image to a canvas
  mycanvas = document.createElement('canvas');
  // mycanvas.width = target.offsetWidth;
  mycanvas.width = target.width.baseVal.value;
  // mycanvas.height = target.offsetHeight;
  mycanvas.height = target.height.baseVal.value;
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

// This script is based on the work found here:
// https://stackoverflow.com/a/21318963
// and here
// https://spin.atomicobject.com/2014/01/21/convert-svg-to-png/
// Write the CSS style inline
// Found here: https://stackoverflow.com/questions/25097566/css-style-to-inline-style-via-javascript

// delete this before upload:
var clan = document.getElementById('my_svg_text_inline_1');
var robin = document.getElementById('my_svg_name_robin');
var batman = document.getElementById('my_svg_name_batman');
var myTarget = document.getElementsByTagName('svg')[0];
var mySVGText = '<svg><rect class=\"my_svg_rect\" id=\"rect_1\" x=\"5\" y=\"5\" width=\"250\" height=\"250\"></rect> <text class=\"pre-batman my_svg_text_inline\" id=\"my_svg_text_inline_1\" x=\"133\" y=\"70\" height=\"90\">LMG</text> <text class=\"batman heroes\" id=\"my_svg_name_batman\" x=\"131\" y=\"4em\">batman</text> <text class=\"robin heroes\" id=\"my_svg_name_robin\" x=\"131\" y=\"5em\">robin</text></svg>'
var xmlns = "http://www.w3.org/2000/svg";
// end delete this

// Create a SVG-Element
var mySVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
mySVGElement.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
mySVGElement.setAttribute('id', 'theSVGElement');
mySVGElement.setAttribute('style', 'border: 1px solid black');
mySVGElement.setAttribute('width', '600');
mySVGElement.setAttribute('height', '250');
mySVGElement.setAttribute('style', 'background-color: red');

// Add a rect to the SVG
var myRect = document.createElementNS(xmlns, "rect");
myRect.setAttributeNS(null, "x",5);
myRect.setAttributeNS(null, "y",5);
myRect.setAttributeNS(null, "width",590);
myRect.setAttributeNS(null, "height",240);
myRect.setAttributeNS(null, "fill","green");

mySVGElement.appendChild(myRect);

// We test an encoded image
var myIMG;
function makeImage(xml){
  myIMG = new Image();
  myIMG.width = 600;
  myIMG.height = 250;
  myIMG.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(xml.outerHTML)));
  document.getElementById('script').appendChild(myIMG);
}

// Put the computed CSS inline
function applyStyle(el) {
//   Origin code:
//   ----- -----
//   s = getComputedStyle(el);
//   for (var key in s) {
//     var property = key.replace(/\-([a-z])/g, function (v) {
//       return v[1].toUpperCase();
//     });
//     el.style[property] = s[key];
//   }
//   My code:
//   ----- -----
//   get style of element 
  var elementStyle = window.getComputedStyle(el,null)
  var len = elementStyle.length;
  var myString = "";
  
  for (var i=0;i<len;i++){ 
    var style = elementStyle[i]; 
    myString += style +" : "+ elementStyle.getPropertyValue(style) + " ; "; 
  }
//  element.style = myString
  el.style = "";
  el.style = myString;
}




// Takes an SVG element as target?

function svg_to_png_data(target) {
  var ctx,
  mycanvas,
  svg_data,
  img,
  child;
  // svg_data = target.innerHTML;
  svg_data = target.outerHTML;
  img = new Image();
  img.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg_data)));
  // Draw the SVG image to a canvas
  mycanvas = document.createElement('canvas');
  // mycanvas.width = target.offsetWidth;
  mycanvas.width = svg_data.width.baseVal.value;
  // mycanvas.height = target.offsetHeight;
  mycanvas.height = svg_data.height.baseVal.value;
  ctx = mycanvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  // Return the canvas's data
  return mycanvas.toDataURL('image/png');
}// Takes an SVG element as target

function svg_to_png_replace(target) {
  var data,
  img;
  data = svg_to_png_data(target);
  img = new Image();
  img.src = data;
  target.parentNode.replaceChild(img, target);
}

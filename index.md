---
permalink: index.html
---

# favicon

Creating a svg file to be converted into favicon

# Display a SVG

## Internal SVG

The SVG displayed below shows an inline svg with style inline the svg tags.

<svg id="my_svg"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  x="0px" y="0px"
	viewBox="0 0 260 260" 
  style="background-color: darkgoldenrod;" 
  xml:space="preserve">
<!--
<defs>
<style type="text/css"> @import url("https://rawgit.com/M2vH/favicon/master/m2vh_favicon.css")</style>
</defs>
-->
<style type="text/css">	
	@font-face {
		font-family: 'batman';
		src: url("assets/fonts/batmfafont.ttf") format("truetype");
	}
	#my_svg_text_inline {
		fill: orange;
		text-anchor: middle;
		font-size: 90px;
		alignment-baseline: central;
		}
<!--
#my_svg_text_inline {
		font-size: 90px;
	}
-->
	#my_svg_rect {
		fill: green;
		}
	.pre-batman {
		font-family: 'batman';
		transform: scale(1,1.3);
		transform-origin: center;
	}
<!--
.pre-batman {
		font-size: 7.5vw;
	}
-->
</style>

<rect id="my_svg_rect" x="5" y="5" width="250" height="250"/>  

<text class="pre-batman" id="my_svg_text_inline" x="134" y="175">M2vH</text>	

</svg>

---

The SVG displayed below shows an inline svg with reference to external CSS.

<svg id="my_svg"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  x="0px" y="0px"
	viewBox="0 0 260 260" 
  style="background-color: darkgoldenrod;" 
  xml:space="preserve">
<defs>
<style type="text/css"> @import url("https://rawgit.com/M2vH/favicon/master/m2vh_favicon.css")</style>
</defs>

<rect id="my_svg_rect" x="5" y="5" width="250" height="250"/>  

<text id="my_svg_text" x="130" y="175">M2vH</text>	

</svg>

---

## External SVG

There are several ways to include a SVG file:  
    - \<img>  
    - \<object>  
    - \<iframe>  
		
## Reference the SVG as an object

<!-- https://raw.githubusercontent.com/M2vH/favicon/master/m2vh_favicon.svg -->
<!-- https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg -->
<object id="my_obj" data="https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg" type="image/svg+xml">
</object>

## Reference the SVG as an image

<style>
	#my_img {
		width: 80%;
		padding-left: 10%;
		padding-right: 10%;
	}
</style>
<img id="my_img" src="https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg" >

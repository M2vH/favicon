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
	.my_svg_text_inline {
		fill: orange;
		text-anchor: middle;
		font-size: 70px;
		}
<!--
#my_svg_text_inline {
		font-size: 90px;
		alignment-baseline: central;
	}
-->
	.my_svg_rect {
		fill: green;
		}
	.pre-batman {
		font-family: 'batman';
		transform: scale(1,1.8);
		transform-origin: center;
	}
<!--
.pre-batman {
		font-size: 7.5vw;
	}
-->
.heroes {
	font-size: 48px;
	text-anchor: middle;
	fill: #133b1a;
	font-weight: bold;
}
</style>

<rect class="my_svg_rect" id="rect_1" x="5" y="5" width="250" height="250"/>  

<text class="pre-batman my_svg_text_inline" id="my_svg_text_inline_1" x="134" y="110">M2vH</text>	
<text class="batman heroes" id="my_svg_name_batman" x="134" y="4em">batman</text>
<text class="robin heroes" id="my_svg_name_robin" x="134" y="5em">robin</text>
</svg>
<br/>


---

<!-- Now we display an inline .svg with external .css that is linked with relative path -->
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
	<!--
<style type="text/css"> @import url("https://rawgit.com/M2vH/favicon/master/m2vh_favicon.css")</style>
-->
</defs>

<rect class="my_svg_rect" id="rect_2" x="5" y="5" width="250" height="250"/>  

<text class="pre-batman my_svg_text_inline" id="my_svg_text_inline_2" x="134" y="110">M2vH</text>	
<text class="batman heroes" id="my_svg_name_batman_2" x="134" y="4em">batman</text>
<text class="robin heroes" id="my_svg_name_robin_2" x="134" y="5em">robin</text>
</svg>
<br/>


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

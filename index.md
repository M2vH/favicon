---
permalink: index.html
---
# favicon

Creating a svg file to be converted into favicon

## Display a SVG

### Internal SVG

<svg id="my_svg"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  x="0px" y="0px"
	viewBox="0 0 260 260" 
  style="background-color: darkgoldenrod;" 
  xml:space="preserve">
<style type="text/css"> @import url("m2vh_favicon.css")</style>

<style>
	#my_svg_text {
		fill: orange;
	}
</style>

<!--
<rect id="my_rect" x="0" y="0" width="260" height="260" style="background-color:green;"/>  
-->

<text id="my_svg_text" x="10" y="130">M2vH</text>	
</svg>

### External SVG

There are several ways to include a SVG file:
    - \<img>  
    - \<object>  
    - \<iframe>  
		
#### Reference the SVG as an object

<!-- https://raw.githubusercontent.com/M2vH/favicon/master/m2vh_favicon.svg -->
<!-- https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg -->
<object id="my_obj" data="https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg" type="image/svg+xml">
</object>

#### Reference the SVG as an image

<style>
	#my_img {
		width: 80%;
		padding-left: 10%;
		padding-right: 10%;
	}
</style>
<img id="my_img" src="https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg" >
<!-- 
style="width:80% !important;padding-left:10%;padding-right:10%;"
-->	
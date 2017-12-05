---
layout: default
title: My title
description: A brief description.
permalink: mypages/desc.html
---
## How to display a SVG

We can display a SVG file as internal or external SVG

### Internal SVG

The inline svg with inline css style definitions.

```xml
<svg id="my_svg"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  x="0px" y="0px"
	viewBox="0 0 260 260" 
  style="background-color: darkgoldenrod;" 
  xml:space="preserve">
<defs>
<style type="text/css"> @import url("m2vh_favicon.css")</style>
</defs>
<style type="text/css">
	#my_svg_text {
		fill: orange;
		font-size: 90px;
		text-anchor: middle;
		alignment-baseline: central;
		}
	#my_svg_rect {
		fill: green;
		}
</style>

<rect id="my_svg_rect" x="5" y="5" width="250" height="250"/>  

<text id="my_svg_text" x="10" y="130">M2vH</text>	

</svg>

```
### External SVG

There are several ways to include a SVG file:

    <img>  
    <object>  
    <iframe>  
		
#### Reference the SVG as an object


```html
<!-- https://raw.githubusercontent.com/M2vH/favicon/master/m2vh_favicon.svg -->
<!-- https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg -->

<object id="my_obj" data="https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg" type="image/svg+xml">
</object>
```

#### Reference the SVG as an image

```html

<style>
	#my_img {
		width: 80%;
		padding-left: 10%;
		padding-right: 10%;
	}
</style>

<img id="my_img" src="https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg" >

```

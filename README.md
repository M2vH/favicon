# favicon
Creating a svg file to be converted into favicon

## Display a SVG

### Internal SVG

```html
<svg 
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  x="0px" 
  y="0px"
  viewBox="0 0 260 260" 
  style="enable-background:new 0 0 260 260;" 
  xml:space="preserve">

<!-- not working 
<style type="text/css"> @import url("https://raw.githubusercontent.com/M2vH/favicon/master/m2vh_favicon.css")</style>
-->

<style>
	#my_text {
		fill: orange;
	}
</style>

<text id="my_text" x="10" y="130">M2vH</text>	
</svg>
```
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

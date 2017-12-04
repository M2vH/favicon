---
permalink: index.html
---

# favicon

Creating a svg file to be converted into favicon

# How to include a SVG-graphic in HTML?

## Add it as an internal '\<svg>'-tag

The SVG displayed below shows an inline svg with style-tags inline the svg tags. We link the font of "M2vH" with a path which is relative to the root of this site. The other typo is the Open Font 'Roboto Condensed'.

	/* path/to/font */
	src: url("assets/fonts/batmfafont.ttf") format("truetype");
	
<!-- SAMPLE 1 -->
<svg id="my_svg_1"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  x="0px" y="0px"
	viewBox="0 0 260 260" 
  style="background-color: darkgoldenrod;" 
  xml:space="preserve">
<!--
<defs>
<style type="text/css"> @import url("m2vh_favicon.css")</style>
</defs>
-->
<style type="text/css">	
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@font-face {
	font-family: 'batman';
	src: url("assets/fonts/batmfafont.ttf") format("truetype");
}
.my_svg_text_inline {
	fill: orange;
	text-anchor: middle;
	font-size: 70px;
	font-family: 'batman';
	-webkit-transform: scale(1,1.8); 
	/* -webkit-transform-origin: center; */
}
.my_svg_rect {
	fill: green;
}
.heroes {
	font-size: 48px;
	font-family: 'Roboto Condensed', sans-serif;
	text-anchor: middle;
	fill: #133b1a;
	/* font-weight: bold; */
}
</style>
<rect class="my_svg_rect" id="rect_1" x="5" y="5" width="250" height="250"/>  
<text class="pre-batman my_svg_text_inline" id="my_svg_text_inline_1" x="133" y="50">M2vH</text>	
<text class="batman heroes" id="my_svg_name_batman" x="131" y="4em">batman</text>
<text class="robin heroes" id="my_svg_name_robin" x="131" y="5em">robin</text>
</svg>
<br/>
<!-- SAMPLE 1; The button -->
<p>
<div>
<style>
#my_button_div {
	text-align: center;
	font-family: "";
}
.my_input {
	text-align: center;
	}
.my_input input{
	/* height: 2em; */
	/* margin: 5px; */
	/* text-align: center; */
	padding: 5px 5px 5px 5px;
	background-color: inherit;
	color: inherit;
}
.my_input button{
	/* height: 2em; */
	/* margin: 5px; */
	text-align: center;
	padding: 5px 5px 5px 5px;
	background-color: inherit;
	color: inherit;
}
</style>
<div id="my_button_div_1" class='my_input'> 
  <form>
	<p>
		<input class="my_input" id="my_input_1" name="my_input_1" type="text" value='superman'/>
	  </p>
	  <p>
		<input class="my_input" id="my_input_2" name="my_input_2" type="text" value='supergirl'/>
		</p>
	<p>
	<button id="my_button_do_1" type="button" onclick='my_test()'>Change it!</button>
	<button id="my_button_reset_1" type="reset" onclick='return my_reset();'>Reset</button>
<!-- NOT WORKING until we link font to CORS-Server
<button id="my_button_dl" type="button" onclick='download("test.svg")'>Download</button>
-->
</p>
	</form>
  <script>
	function my_test(){
	    var my_newtext_1 = document.getElementById('my_input_1');
	    var my_newtext_2 = document.getElementById('my_input_2');
  	    var my_text_1 = document.getElementById('my_svg_name_batman');
  	    var my_text_2 = document.getElementById('my_svg_name_robin');
 	    my_text_1.innerHTML = my_newtext_1.value;
	    my_text_2.innerHTML = my_newtext_2.value;
	    my_newtext_1.value = '';
	    my_newtext_2.value = '';
	  }
	  function my_reset(){
	  	document.getElementById('my_svg_name_batman').innerHTML='batman';
		document.getElementById('my_svg_name_robin').innerHTML='robin';	  
	  }
	</script>
	<!-- Generate a .svg-Download -->
<script>
function download(filename) {
 	<!-- get the svg -->
	var svg = document.getElementById('my_svg_1');
	var pom = document.createElement('a');
 	pom.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.outerHTML));
 	pom.setAttribute('download', filename);
	if (document.createEvent) {
        	var event = document.createEvent('MouseEvents');
        	event.initEvent('click', true, true);
        	pom.dispatchEvent(event);
	}
    	else {
        	pom.click();
    	}
}
</script>
</div></p>
</div>
---

<!-- SAMPLE 2 -->

Sample 2

## Inline SVG with relative CSS inside the same repository
<!-- Now we display an inline .svg with external .css that is linked with relative path -->
The SVG displayed below shows an inline svg with reference to a CSS file. This CSS is located relative to the SVG, but still inside the same repo.

<svg id="my_svg_2"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  x="0px" y="0px"
	viewBox="0 0 260 260" 
  style="background-color: darkgoldenrod;" 
  xml:space="preserve">
<defs>

<style type="text/css"> 
	@import url("assets/css/m2vh_favicon_2.css")
</style>

</defs>

<rect class="my_svg_rect" id="rect_2" x="5" y="5" width="250" height="250"/>  

<text class="pre-batman my_svg_text_inline" id="my_svg_text_inline_2" x="134" y="110">M2vH</text>	
<text class="batman heroes" id="my_svg_name_batman_2" x="131" y="4em">batman</text>
<text class="robin heroes" id="my_svg_name_robin_2" x="131" y="5em">robin</text>
</svg>
<br/>


---


## External SVG

There are several ways to include a SVG file:  
    - \<img>  
    - \<object>  
    - \<iframe>  

---

Sample 3

## Reference the SVG as an object

We reference to our SVG using the raw.githubusercontent href. This is NOT working.

<!-- NOT Working -->
<!-- https://raw.githubusercontent.com/M2vH/favicon/master/m2vh_favicon.svg -->
<!--
<object id="my_obj" data="https://raw.githubusercontent.com/M2vH/favicon/gh-pages/m2vh_favicon.svg" type="image/svg+xml">
</object>
-->
<!-- WORKING -->
<!-- https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg -->

---

We reference to our SVG using the rawgit service. Inside the SVG the font is imported from an external source.

<!-- NOT Working -->
<!-- https://raw.githubusercontent.com/M2vH/favicon/master/m2vh_favicon.svg -->

<!-- WORKING -->
<!-- https://rawgit.com/M2vH/favicon/master/m2vh_favicon.svg -->
<object id="my_obj" data="https://rawgit.com/M2vH/favicon/gh-pages/m2vh_favicon.svg" type="image/svg+xml">
</object>

---


## Reference the SVG with the embed tag

We reference to our SVG using `<embed>`.

<!-- NOT Working -->
<!-- https://raw.githubusercontent.com/M2vH/favicon/gh-pages/m2vh_favicon.svg -->
<embed id="my_embed_raw" src="https://raw.githubusercontent.com/M2vH/favicon/gh-pages/m2vh_favicon.svg" alt="Not Working"/>

---

<!-- Using rawgit -->
<embed id="my_embed_rawgit" src="https://rawgit.com/M2vH/favicon/gh-pages/m2vh_favicon.svg" type="image/svg+xml"/>

---

## Reference the SVG as an image

<style>
	#my_img {
		width: 80%;
		padding-left: 10%;
		padding-right: 10%;
	}
</style>
<!-- make sure to grep from the correct branch -->
<img id="my_img" src="https://rawgit.com/M2vH/favicon/gh-pages/m2vh_favicon.svg" />

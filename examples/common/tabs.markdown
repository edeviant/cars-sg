 -  Used when there are more than 2 sections but less than 8.
 -  Use title case for tab labels.
 -  Section names must be relatively short (1 - 2 words preferred. 3 words max).
 -  Do NOT use as placeholders for empty content (tabs shouldn't appear when content is NOT available).
 -  Sub tabs can be used without the main tabs (DEFINE USAGE RULES?).
 
```html
<div class="module tab-module">
	<h1>Tab Module</h1>
	<div class="tabs"> 
		<a href="#" class="active">Active Tab</a> 
		<a href="#">Non Active Tab</a> 
		<a href="#">Non Active Tab</a> 
	</div>
</div>
<div class="sub-tabs"> 
	<a href="#" class="active">Active Sub Tab</a> 
	<a href="#">Sub Tab</a>  
	<a href="javascript:void(0);" class="disable">Sub Tab</a> 
</div>

<div class="tabs"> 
	<a href="#" class="active">Overview</a> 
	<a href="#">Photos &amp; Video</a> 
	<a href="#">Reviews</a> 
	<a href="#">Safety &amp; Reliability</a> 
	<a href="#">Features &amp; Specs</a> 
	<a href="#">Pricing</a> 
</div>
```
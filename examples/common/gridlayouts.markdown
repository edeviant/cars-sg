 - The grid is a universal system based on 61 micro columns that are 16px in width. 
 - Total page witdth is 976px.

###Page Layouts
```html
Three Col Even
<div class="row grid-layout">
	<div class="col19 bg">
		<h2>304</h2>
	</div>
	<div class="col21 bg">
		<h2>336</h2>
	</div>
	<div class="col19 bg">
		<h2>304</h2>
	</div>
</div>


SRP Page with Skyscraper Ad
<div class="row grid-layout">
	<div class="col11 bg">
		<h2>176</h2>
	</div>
	<div class="col38 bg">
		<h2>608</h2>
	</div>
	<div class="col10 bg">
		<h2>160</h2>
	</div>
</div>


Advice Story Page with Left Nav
<div class="row grid-layout">
	<div class="col11 bg">
		<h2>176</h2>
	</div>
	<div class="col29 bg">
		<h2>464</h2>
	</div>
	<div class="col19 bg">
		<h2>304</h2>
	</div>
</div>


Full Length Modules
<div class="row grid-layout">
	<div class="col61 bg">
		<h2>976</h2>
	</div>
</div>


Two Column Left
<div class="row grid-layout">
	<div class="col41 bg">
		<h2>656</h2>
	</div>
	<div class="col19 bg">
		<h2>304</h2>
	</div>
</div>


```
###Nested Grid
```html
<div class="row">
	<div class="col9 bg"> col9 </div>
	<div class="col9 bg"> col9 </div>
	<div class="col9 bg"> col9 </div>
	<div class="col9 bg"> col9 </div>
	<div class="row-end"></div>
</div>

<div class="row">
	<div class="col19 bg"> col19 </div>
	<div class="col19 bg"> col19 </div>
	<div class="row-end"></div>
</div>

<div class="row">
	<div class="col19 bg"> col19</div>
	<div class="col9 bg"> col9 </div>
	<div class="col9 bg"> col9 </div>
	<div class="row-end"></div>
</div>

<div class="row">
	<div class="col9 bg"> col9 </div>
	<div class="col9 bg"> col9 </div>
	<div class="col19 bg"> col19 </div>
	<div class="row-end"></div>
</div>

<div class="row">
	<div class="col12 bg"> col12 </div>
	<div class="col13 bg"> col13 </div>
	<div class="col12 bg"> col12 </div>
	<div class="row-end"></div>
</div>
```
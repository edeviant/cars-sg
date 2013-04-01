```html
<div class="gallery">
		<div class="stage"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i0.jpg"/></div>
		<div class="scroll row">
			<div class="col3"><a class="prev browse left"></a></div>
			<div class="scrollable col31" id="scrollable">
				<div class="items">
					<div>
						<div class="col7"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i1.jpg"/></div>
						<div class="col7 selected"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i2.jpg"/></div>
						<div class="col7"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i3.jpg"/></div>
						<div class="col7"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i4.jpg"/></div>
					</div>
					<div>
						<div class="col7"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i1.jpg"/></div>
						<div class="col7"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i2.jpg"/></div>
						<div class="col7"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i3.jpg"/></div>
						<div class="col7"><img src="http://dpl.cars.com/dpl/html/rebrand/images/i4.jpg"/></div>
					</div>
				</div>
			</div>
			<div class="col3"><a class="next browse right"></a></div>
			<div class="row-end"></div>
		</div>
	</div>
```


```javascript
require(['jquery','jquerytools'], function($) {
    $(".scrollable").scrollable({circular: false}); 
});
```

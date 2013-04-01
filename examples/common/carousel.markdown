```html
<div class="promo">
	<div>
		<a class="prev browse left"></a> <a class="next browse right"></a>
		<div class="scroll">
			<div class="items">
				<div class="item" style="background-image:url(http://dpl.cars.com/dpl/html/rebrand/images/promo2.jpg);">
					<div class="details" >
					<a href="http://www.cars.com/" class="maparea">&nbsp;</a>     
					<h3><a href="#987">Heading 1</a></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget aliquam odio. Phasellus viverra elit sit amet magna vestibulum tincidunt...<a href="#987" >Read more</a></p>
					</div>
				</div>
				<div class="item" style="background-image:url(http://dpl.cars.com/dpl/html/rebrand/images/promo3.jpg);">
					<div class="details"> 
					<a href="http://www.cars.com/" class="maparea">&nbsp;</a>
					<h3><a href="#987">Heading 2</a></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget aliquam odio. Phasellus viverra elit sit amet magna vestibulum...<a href="#987" >Read more</a></p>
					</div>
				</div>
				<div class="item" style="background-image:url(http://dpl.cars.com/dpl/html/rebrand/images/promo01.jpg);">
					<div class="details"> 
					<a href="http://www.cars.com/" class="maparea">&nbsp;</a>
					<h3><a href="#987">Heading 3</a></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget aliquam odio. Phasellus viverra elit sit amet magna vestibulum tincidunt...<a href="#987" >Read more</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```


```javascript
require(['jquery','jquerytools'], function($) {
    $(".scroll").scrollable({circular: true}).autoscroll({ autoplay: true });
});
```

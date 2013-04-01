 -  Apply __rel="#overlay"__ to an element that invokes the modal. The modal window content needs __class="overlay"__ for styling and __id="overlay"__ for targeting.
 -  Use when some specific action or input from the user is needed before allowing them to continue.
 -  Use to present content that users should give their full attention (example: photos or video).
 -  Use to get confirmation for a selected critical action (example: deleting your account).
 -  Modal height should fit inside the browser viewport and content should be kept as short an concise as possible.

```html
<img src="http://images.cars.com/stock/90x60/269482.jpg" rel="#overlay"/>

<a href="javascript:void(0);" class="modal" rel="#overlay">Open Modal With Link</a>

<input type="button" class="button modal" rel="#overlay" Value="Open Modal WIth Button" />


<div class="overlay" id="overlay">
	<div class="details">
		<h3>Modal</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate libero eget est venenatis semper. </p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate libero eget est venenatis semper. </p>
	</div>
</div>
```

```javascript
require(['jquery','jquerytools'], function($) {
   $("img[rel]").overlay();
   $(".modal[rel]").overlay();
});
```

### Basic Usage

This is the default implementation. If using the default implementation on a <http://www.cars.com/> page the deferredLoading.js is loaded in main.js *(site-wide)*.

You only need to load the module explicitly if you are generating images after the loading module has finished executing, and in that instance, *it is 99% likely that there is no benefit to serving the images in this manner*.

```html
<img src="http://graphics.cars.com/images/spacer.gif" data-def-src="http://graphics.cars.com/images/core/logo.png"/>
```

```javascript
require(['modules/common/deferredLoading'], function(dl) {
  new dl().init();
});
```

### Advanced Usage

You can override the the selector and the y-scroll lookahead by passing options on the initial init().

```html
<img src="http://graphics.cars.com/images/spacer.gif" data-other="http://graphics.cars.com/images/core/logo.png"/>

<img src="http://graphics.cars.com/images/spacer.gif" data-another="http://graphics.cars.com/images/core/logo.png"/>
```

```javascript
require(['modules/common/deferredLoading'], function(dl) {
  new dl().init(['img[data-other]','img[data-another]'], 200);
});
</script>
```
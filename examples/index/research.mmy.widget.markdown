Here's the example for the homepage widget.

```html
<div class="row grid-layout">
  <h2>Research a Specific Car</h2>
  <p>Select make, model and year:</p>
  <div class="research-mmy-widget">
    <form name="crpWidget" method="get">
      <div class="col9">
      <div class="select"><select name="make"></select></div>
    </div>
    <div class="col9">
      <div class="select"><select name="model"></select></div>
    </div>
    <div class="col9">
      <div class="select short"><select name="year"></select></div>
    </div>
    <div class="col9">
      <input type="submit" name="submit" value="Go" />
    </div>
    <div class="row-end"></div>
    <input type="hidden" name="logtype" value="6" />
    <input type="hidden" name="section" value="summary" />
    <input type="hidden" name="aff" value="" />
    <input type="hidden" name="call" value="" />
    </form>
  </div>
  <div class="row-end"></div>
</div>
```

```javascript
require(['jquery','modules/common/researchMMYWidget'], function($, rw) {
  $.each($('.research-mmy-widget'), function(i,el) {
    new rw(el);
  });
});
```
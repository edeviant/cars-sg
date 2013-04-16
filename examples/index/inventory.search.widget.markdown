Here's the example for the homepage widget.

```html
<div class="row grid-layout">
  <div class="module search-widget main">
    <div class="gradient col27">
      <div class="wrap col25">
        <div class="tagline">
          It's easy.<span>Let's go.</span>
          <hr />
        </div>
        <h2 class="ism-header">Find New &amp; Used Cars</h2>
        <ul class="car-search-type">
          <li name="new" class="active wrapSelSearchNEW"><a class="selSearchNEW stockLink" href="#">New</a></li>
          <li name="used" class="wrapSelSearchUSED"><a class="selSearchUSED stockLink" href="#">Used</a></li>
          <li name="certified" class="wrapSelSearchCERTIFIED"><a class="selSearchCERTIFIED stockLink" href="#">Certified Pre-Owned</a></li>
          <li><span><a href="#" class="qmark-link"><img src="http://graphics.cars.com/images/core/question-mark-icon.png" class="show-tooltip-top" alt="Question Mark" width="15" height="15"></a></span></li>
        </ul>
        <div class="clearfix"></div>
        <form>
          <div class="row">
            <div class="select col11">
              <select name="make"></select>
            </div>
            <div class="select col11" id="div-model">
              <select name="model"></select>
            </div>
          </div>
          <div class="row">
            <div class="select col11">
              <select name="prMx"></select>
            </div>
            <div id="rdnew" class="select col6">
              <select name="rd" id="select-rd-new"></select>
            </div>
            <div class="col1" id="of-div">of</div>
            <div class="col3" id="zc-div">
              <input type="tel" maxlength="5" name="zc" data-default="ZIP" />
            </div>
            <div class="row-end"></div>
          </div>
          <div class="row">
            <div id="search-button">
              <input class="inline" type="submit" id="submitSearchButton" name="submit" value="Search" />
            </div>
          </div>
          <input type="hidden" name="stocktype" value="new" />
          <input type="hidden" name="searchSource" value="QUICK_FORM" />
          <input type="hidden" id="enableSeo" name="enableSeo" value="1" />
        </form>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  <div class="row-end"></div>
</div>
```

```javascript
require(['jquery','modules/common/inventorySearchWidget'], function($,sw) {
  $.each($('.search-widget'), function(i,el) {
    new sw(el);
  });
});
```
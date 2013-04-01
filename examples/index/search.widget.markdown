Here's the example for the homepage widget.

```html
<div id="inventory-search" class="module search-widget main">
  <div class="gradient col26">
    <div class="wrap col24">
      <div class="tagline">
        It's easy.<span>Let's go.</span>
          <hr>
      </div>
      <h2 class="ism-header">Find New & Used Cars</h2>
        <ul class="car-search-type">
          <li name="new" class="" id="wrapSelSearchNEW"><a id="selSearchNew" class="stockLink" href="#" onclick="return false;">New</a></li>
          <li name="used" class="" id="wrapSelSearchUSED"><a id="selSearchUsed" class="stockLink" href="#" onclick="return false;">Used</a></li>
          <li name="certified" class="" id="wrapSelSearchCERTIFIED"><a id="selSearchCPO" class="stockLink" href="#" onclick="return false;">Certified Pre-Owned</a></li>
          <li><span><a href="#" class="qmark-link"><img src="http://graphics.cars.com/images/spacer.gif" data-lazy-src="http://www.cars.com/images/core/question-mark-icon.png" title="<div id='ism-wt' class='wrapper top'><div id='ism-tc' class='tooltip-content'>A certified pre-owned car is a type of used car that has been inspected by the manufacturer or dealer and typically includes an extended warranty.</div></div>" class="show-tooltip-top" alt="Question Mark" width="15" height="15"></a></span></li>
        </ul>
        <div class="clearfix"></div>
        <form name="mergedForm" id="mergedForm">
          <div class="row">
            <div class="select col10">
              <select name="make"></select>
            </div>
            <div class="select col11" id="div-model">
              <select name="model"></select>
            </div>
          </div>
          <div class="row">
            <div class="select col10">
              <select name="prMx"></select>
            </div>
            <div id="rdnew" class="select col6">
              <select name="rd" id="select-rd-new">
                <option value="100000" selected>All Miles</option><option value="10">10 miles</option><option value="20">20 miles</option><option value="30">30 miles</option><option value="40">40 miles</option><option value="50">50 miles</option><option value="75">75 miles</option><option value="100">100 miles</option><option value="150">150 miles</option><option value="250">250 miles</option><option value="500">500 miles</option>
              </select>
            </div>
                          <div class="col1" id="of-div">of</div>
                          <div class="col3" id="zc-div">
                            <input type="number" maxlength="5" name="zc" value="" id="zc2" />
                          </div>
          </div>
          <div class="row">
            <div id="search-button">
                      <input class="inline" type="submit" id="submitSearchButton" name="submit" value="Search">
            </div>
          </div>
          <input type="hidden" name="stocktype" value="new"/>
          <input type="hidden" id="enableSeo" name="enableSeo" value="1" />
        </form>
        <div id="homepage-search-options-div">
          <a id="zc-overlay-anchor" href rel="#zipcapture"></a>
          <a id="adv-search-link" class="readmore-white" href="/for-sale/advancedsearch.action">Advanced Search</a>
        </div>
        <div class="clearfix"></div>
    </div>
    <span class="suggestedSearchTracking"></span>
  </div>
</div>
```

```javascript
require(['modules/searchwidget','domReady'], function(sw) {
  sw.register();
});
```
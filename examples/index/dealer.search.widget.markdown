Here's the example for the homepage widget.

```html
<div class="row grid-layout">
  <div class="col19">
    <div class="module find-a-dealer dealer-search-widget">
      <h3>Find Dealers Near You</h3>
      <p>Get maps, car listings and price quotes:</p>
      <form name="findDealerForm" method="get" action="/dealers/search-results.action">
        <label for="sc.makes">Make</label>
        <div class="select">
          <select class="mm" id="sc.makes" name="sc.makes"></select>
        </div>
        <label for="sc.zipCode">ZIP Code</label>
        <input type="tel" id="sc.zipCode" data-default="ZIP" rel="ZIP Code" maxlength="5" name="sc.zipCode" class="zc-short" />
        <input class="inline secondary" type="submit" name="submit" value="Find a Dealer" name="&lid=Find a Dealer" />
        <input type="hidden" name="stocktype" value="new">
        <input type="hidden" name="sc.newSearch" value="true"/>
        <input type="hidden" name="sc.radius" value="50"/>
        <input type="hidden" name="sc.match" value="ANY"/>
        <input type="hidden" name="sc.sort" value="false"/>
        <input type="hidden" name="sc.sortColumn" value="DISTANCE"/>
        <input type="hidden" name="sc.sortDirection" value="ASC"/>
        <input type="hidden" name="sc.resultSetStart" value="0"/>
        <input type="hidden" name="sc.resultSetSize" value="50"/>
      </form>
      <hr/>
      <h4 class="question">Been to a car dealer lately?</h4>
      <a href="/dealers/reviews/">Share your experience</a>
    </div>
  </div>
  <div class="row-end"></div>
</div>
```

```javascript
require(['jquery','modules/common/dealerSearchWidget'], function($,dw) {
  $.each($('.dealer-search-widget'), function(i,el) {
    new dw(el);
  });
});
```
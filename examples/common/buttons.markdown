 - Primary buttons provide extra visual weight and identify the primary action of page or a set of buttons.
 - Primary buttons should be used sparingly (no more than 1 or 2 on a page).
 - Use title case for tab labels.
 - Keep button labels short (3 words max).

###Link Based Buttons
```html
<a class="button" href="#">Primary</a>

<a class="button secondary" href="#">Secondary</a>

<a class="button light" href="#">Primary Light</a>

<a class="button secondary light" href="#">Secondary Light</a>

<a class="button small" href="#">Primary Small</a>

<a class="button secondary small" href="#">Secondary Small</a>

<a href="#" class="button secondary icon-left"><span></span>With Left Icon</a>

<a href="#987" class="button secondary icon-right">With Right Icon<span></span></a>

<a href="#987" class="button secondary small light icon-left"><span></span>With Left Icon</a>

<a href="#987" class="button secondary small light icon-right">With Right Icon<span></span></a>
```

###Input Based Buttons:
```html
<input type="submit" value="Primary" />

<input type="button" value="Secondary" class="secondary"/>
```

###Cancel CTA
 - Use a cancel link as a secondary call to action on forms when needed.

```html
<input type="submit" value="Primary" /> <a href="#">Cancel</a>
```
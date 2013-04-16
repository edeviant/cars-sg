The styleguide left navigation is controlled via an independent JSON file: _data/styleguide.nav.json_.

Updating the file will add sections/pages. We should ensure that we keep the navigation hierarchy to a minimum.

### Sample Structure
```
{
  "nav": [{
    "name": "Sitewide Styles",
    "files": [{
      "name": "Common Styles",
      "file": "common.elements"
    }, {
      "name": "Common Modules",
      "file": "common.modules"
    }, {
```

The nav top-level element contains an array of objects. Each object is a section in the nav, and contains an array of objects under files that comprise the navigation structure and link location. _(name being the link text, file being the page definition location)_
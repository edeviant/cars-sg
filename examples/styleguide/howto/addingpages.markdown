Pages, once defined in the navigation, can be updated independently via their page specification _(ex: data/pages/common.modules.json)_. This allows documentation definition to quickly be added/removed from the styleguide output.

### Sample Format
```
{
  "pagename": "Common Modules",
  "elements": [{
    "title": "Modules",
    "description": "Common Modules for Cars.com.",
    "requires": {
      "css": [],
      "js": []
    },
    "usage": {
      "file": "examples/common/modules.markdown"
    }
  },{
    "title": "Inventory Row",
```

This definition will define the order of the page output. The page name is defined and is used as the header of the page. The array of elements defines the documentation examples to appear on a give page. This allows for quick addition, removal, re-organization, and re-use of examples across pages.

The title and first line description of each example is defined in the json data to maintain consistency across versioning of examples. The example content is referred to in the usage:file definition. Addtionally, if custom css is required to be loaded, the path can be added to the requires:css array and it will be injected on load.

The requires:js array is not used, but there for potential consistency (require.js should be handling all dependencies for javascript). The usage element is defined as an object for possible future extension (file type, etc.).
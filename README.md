# Cars.com Core Styleguide

The Cars.com styleguide is a single page app, running CanJS. Being an FE-only single page application ensure that no application logic is required for style and module documentation.

The app framework leverages JSON and Markdown files for documentation. The code samples themselves are used to generate the actual output, and all references in the main.js file powering the app should tie directly to libraries and modules in the current branch. Doing so ensures that the current (documented) codebase is functional in parallel with any other code changes that will be propogated.

## The styleguide layout is as follows:

```dir
|-- core
    |-- styleguide
        |-- css
            |-- theme.css              (styleguide-specific styles)
        |-- data
            |-- styleguide.nav.json    (stylguide navigation data -- left rail)
            |-- pages
                |-- {pagename.json}    (page definition -- documentation hooks)
        |-- examples                   (styleguide example documentation)
            |-- {folder}               (documentation categorization)
            |-- {name.markdown}        (styleguide topic documentation)
        |-- js                         (styleguide-specific javascript)
            |-- main.js
            |-- app.js
            |-- libs                   (styleguide-specific libraries)
        |-- templates                  (styleguide-specific templates -- ejs)
        |-- index.html                 (single page application -- includes core.css)
        |-- readme.md                  (application doc)
```

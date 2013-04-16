Overview of the directory structure

```dir
/core
  |-- /css
      |-- /cars
          |-- core.css
          |-- {section}.css
      |-- /trucks
          |-- core.css
      |-- /{whitelabel}

  |-- /data
      |-- /{section}
          |-- {static data files}
          |-- /xml
              |-- {static data files}
          |-- /json

  |-- /js
      |-- main.js
      |-- /libs
          |-- /require
              |-- require.js
              |-- {require plugins}
          |-- /jquery
              |-- {jquery plugins}
          |-- /canjs
              |-- can.js
          |-- /cars
              |-- cars.js
      |-- /modules
          |-- {AMD modules}
          |-- /common
              |-- {AMD modules}
      |-- /templates
          |-- {ejs templates}
          |-- /cobrands
              |-- chitrib.json
          |-- cobrandbar.ejs

  |-- /jsp
      |-- /includes
          |-- header.jsp
      |-- /vehicle-research
          |-- controller.jsp
      |-- /{site section}
```
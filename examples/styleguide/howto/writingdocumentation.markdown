Each set of documentation is held in an example markdown file. The markdown formatting should support most major definitions, but can differ slightly from the various standards.

The markdown file can contain headings, paragraphs, lists, code samples, etc. The sections are categorized by headings, and sans headings, all documentation will be hoisted to the top of the example module.

Code blocks should be surrounded by three backticks (```) and, as needed, followed by the type of content (```javascript). The typical content types should be html, javascript, css, dir. Using an undefined content type currently busts the app engine.

The HTML and Javascript example code is rendered in documentation blocks but also used to generate the example output, rending the HTML in place, and executing the javascript code snippet. If it is modular and works on the styleguide, it should work on the website _(using core.css and any additional style requirements)_. The documentation can be built in parallel with development, but the functionality of the code must not be considered complete until it renders in the styleguide correctly (including JS functionality).

### Sample Code Blocks

```html
<p>sample <strong>html</strong> output</p>
```

```javascript
console.log('hello, I\'m in your console');
```

```css
.sample-style {
  background: #fff;
  color: #333;
  font-size: 10px;
}
```

```dir
|-- sample/
    |-- directory-path/
        |-- explanation/
```
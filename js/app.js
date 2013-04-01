/**
 * Application Logic
 * needs: full docs
 */
define(['jquery', 'can', 'showdown', 'highlight'], function($, can, showdown, highlight) {
  var app = {
    router: can.Control({
      init: function() {
        var _app = this;
        this.converter = new showdown.converter();
        // initialize data
        this.d = new can.Observe({
          navigation: {},
          pageTitle: 'Cars.com Core Styleguide',
          guideData: {},
          jumpLinks: {
            id: '',
            sections: [{
              section: '',
              title: ''
            }]
          }
        });
        // wire up live bind templates
        $('body').html(can.view("templates/main", _app.d));
        // configure routes
        can.route('', {
          type: 'guides',
          id: 'styleguide.index'
        });
        can.route(':type', {
          type: 'guides'
        });
        can.route(':type/:id', {
          type: 'guides'
        });
        can.route(':type/:id/:sub', {
          type: 'guides'
        });
        // load data
        this.loadNav();
      },
      "{can.route} type": function(data, ev, i) {
        // console.log('type page', i);
      },
      "{can.route} id": function(data, ev, i) {
        this.d.attr('pageTitle', "Loading");
        this.d.attr('guideData', {});
        this.d.attr('jumpLinks', {
          id: '',
          sections: []
        });
        $("html, body").animate({
          scrollTop: 0
        }, 500);
        if(i) {
          this.loadGuideData(i);
        }
      },
      "{can.route} sub": function(data, ev, i) {
        // console.log(i);
        if(i !== undefined) {
          $("html, body").animate({
            scrollTop: $("#" + i).offset().top-45
          }, 500);
        } else {
           $("html, body").animate({
            scrollTop: 0
          }, 500);
        }
      },
      "{window} scroll": function() {
        $('.carssg-style-menu-container').css({
          'top': $(window).scrollTop() + "px"
        });
        $('.carssg-jumplinks').css({
          'top': $(window).scrollTop() + "px"
        });
      },
      loadNav: function() {
        var _app = this;
        this.navModel.findAll({}, function(data) {
          _app.d.attr('navigation', data);
        });
      },
      loadGuideData: function(id) {
        var _app = this;
        this.dataModel.findOne({
          id: id
        }, function(data) {
          var jl = [];
          $.each(data.elements, function(e, i) {
            data.elements[e].containerId = data.genId(data.elements[e].title);
            jl.push({
              section: data.elements[e].containerId,
              title: data.elements[e].title
            });
          });
          _app.d.attr('jumpLinks', { id: id, sections: jl });
          _app.d.attr('guideData', data);
          _app.d.attr('pageTitle', data.pagename);
          _app.includeFiles(data.elements);
        }, function(e) {
          _app.d.attr('pageTitle', "Page Not Found");
          _app.d.attr('guideData', {});
        });
      },
      navModel: can.Model({
        findAll: "GET data/styleguide.nav.json"
      }, {}),
      dataModel: can.Model({
        findOne: "GET data/pages/{id}.json"
      }, {
        genId: function(x) {
          return x.replace(/[^\w\d]+/gi, '-').toLowerCase() || can.now();
        }
      }),
      includeFiles: function(data) {
        var _app = this;
        for(var i = 0, j = data.length; i < j; i++) {
          // include css
          css = data[i].requires.css || [];
          for(var c = 0, d = css.length; c < d; c++) {
            _app.sideLoad(css[c]);
          }
          if(data[i].usage.file) {
            // define block to pass into require
            define('loc', [], function() {
              return '#' + data[i].containerId;
            });
            require(['text!'+ sgSubDir + '/' + data[i].usage.file, 'loc'], function(t, loc) {
              docs = _app.parseUsage(t);
              $.each(docs, function(c, e) {
                _app.renderDocs(docs[c], loc);
              });
            });
          }
        }
      },
      sideLoad: function(url) {
        // console.log(require.toUrl('/'+url));
        if(url.match(/css$/i)) {
          $('head').append('<link rel="stylesheet" href="/' + url + '">');
        }
      },
      parseUsage: function(text) {
        var finalData = [];
        var d = text.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);
        var exampleCount = -1;
        var validTypes = ['html', 'javascript', 'css', 'json', 'java', 'http', 'dir'];
        var suppress = ['<script>', '</script>'];

        function initDocBranch() {
          var a = [];
          a['overview'] = [];
          for(var i = 0, j = validTypes, k = j.length; i < k; i++) {
            a[j[i]] = [];
            a[j[i]]['source'] = [];
            a[j[i]]['sample'] = [];
          }
          a['detail'] = [];
          return a;
        }
        for(var i = 0, j = d.length; i < j; i++) {
          if(d[i][0] == '#') { // we hit a heading
            exampleCount++;
            finalData[exampleCount] = initDocBranch();
            finalData[exampleCount]['overview'].push(d[i]);
            continue;
          }
          if(d[i].match(/^```[^\w]?(\w+)/)) { // we started a code block
            var x = d[i].match(/^```[^\w]?(\w+)/);
            if(exampleCount < 0) { // just docs, no headings
              exampleCount = 0;
              finalData[exampleCount] = initDocBranch();
            }
            finalData[exampleCount][x[1]]['sample'].push('<pre><code class="' + x[1] + '">');
            finalData[exampleCount][x[1]]['sample'].push('');
            i++;
            for(; !d[i].match(/```/);) { // looking to finish a code block
              if(!d[i].match(/<\/?script>/i)) { // strip any script tags
                finalData[exampleCount][x[1]]['sample'].push(this.htmlEncode(d[i]) + "\n");
                if(/^\s*$/.test(d[i]) && x[1] == 'html') { // insert breaks in html if line is completely blank
                  d[i] = '<br /><br />';
                }
                finalData[exampleCount][x[1]]['source'].push(d[i]);
              }
              i++;
            }
            finalData[exampleCount][x[1]]['sample'].push('</code></pre>');
            continue;
          }
          if(exampleCount < 0) { // just docs, no headings
            exampleCount = 0;
            finalData[exampleCount] = initDocBranch();
          }
          // assume other content is overview
          finalData[exampleCount]['overview'].push(d[i]);
        }
        // clean response
        for(var k = 0, l = finalData.length; k < l; k++) {
          // bundle detail info
          if(finalData[k]['overview']) {
            finalData[k]['overview'] = [this.converter.makeHtml(finalData[k]['overview'].join("\n"))];
          }
        }
        return finalData;
      },
      renderDocs: function(doc, loc) {
        $(loc).append(can.view('templates/codesamples', doc));
        $('head').append('<script>' + doc.javascript.source.join(' ') + '</script>');
        // syntax coloring
        $(loc + ' pre code').each(function(i, e) {
          hljs.highlightBlock(e);
        });
      },
      htmlEncode: function(val) {
        return $('<div/>').text(val).html();
      },
      htmlDecode: function(val) {
        return $('<div/>').html(val).text();
      },
      removeTags: function() {
        // ...script to remove css files if needed when changing sections
        // needs to keep the theme.css and core.css
      }
    })
  };
  return app;
});
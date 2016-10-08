// google-analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53683442-1', 'auto');
ga('send', 'pageview');

// fb sdk
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// pages
(function() {
  var pages = [
    '/index',
    '/project',
    '/experiment',
    '/technologies',
    '/about',
    '/policies',
  ];

  page('*', handler);
  page({ hashbang: true });

  function getFile(f, cb) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cb(this.responseText)
      }
    };

    xhttp.open('GET', f, true);
    xhttp.send();
  }

  function setContent(p) {
    var p = 'pages' + p + '.html';
    getFile(p, function(t) {
      document.getElementById('content').innerHTML = t;
    });
  }

  function setNav(c) {
    var n = document.querySelectorAll("div#nav a");

    for (var i = 0; i < n.length; i++) {
      if (n[i].getAttribute('href') == '.' + c) {
        n[i].className = 'active';

        continue;
      }

      n[i].className = '';
    }
  }

  function handler(ctx) {
    // default
    var c = '/404';
    var index = '/index';
    var path = ctx.path;

    if (path == '/') {
      c = index;
      setNav(c)
    } else if (pages.indexOf(path) !== -1) {
      c = path;
      setNav(path)
    }

    setContent(c);
  }
})();

var parseUrl = /^(?:([a-z]+):)?(\/{0,3})([-\w.]+)(?::(\d+))?(?:\/([-\w.]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var names = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];

var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parseUrl.exec(url);

for (var i = 0, len = names.length; i < len; i++) {
  console.log(names[i] + ": " + result[i]);
}

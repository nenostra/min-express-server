const express = require('express');
const path = require('path');
const compression = require('compression')
const app = express();

app.use(compression());

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/build'));

app.get('/*', function (req, res) {
  res.render(path.join(__dirname + '/build/index.pug'), function(err, html) {
    const newHtml = html.replace('<title>7Now</title>', `<title>${req.path}</title>`)
    res.send(newHtml);
  });
});

app.listen(3030, function () {
  console.log('Example app listening on port 3000!');
});
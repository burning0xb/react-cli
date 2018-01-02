var path = require('path');
var express = require('express');
var proxy = require('express-http-proxy');
var url = require('url');
var webpack = require('webpack');
var config = require('./webpack.config');
var webConfig = require('./src/web/config');

var app = express();
var compiler = webpack(config);

var host="0.0.0.0";
var port = webConfig.port;
var remoteHost = webConfig.host + ':' + webConfig.serverPort;
var remoteContextRoot = webConfig.servicePath;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(__dirname + '/'));

app.post('/data/*', function (req, res) {
  res.sendFile(path.join(__dirname, req.url));
});

app.use(remoteContextRoot, proxy(remoteHost, {
  forwardPath: function(req, res) {
    console.log("remote:" + remoteHost + remoteContextRoot + url.parse(req.url).path);
    return remoteContextRoot + url.parse(req.url).path;
  }
}));

app.get('*', function (req, res) {
  console.log(req.url);
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, host, function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Listening at http://'+host+':'+port);
});

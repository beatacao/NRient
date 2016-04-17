// main page
var React = require('react');
var ReacDOMServer = require('react-dom/server');
// var MyComponent =  React.createFactory(require('index'));

exports.index = function (req, res, next) {
  res.render('index');
};

/*!
 * yimei - route.js
 */

/**
 * Module dependencies.
 */

var express          = require('express');
var siteController = require('./controllers/site');
var staticController = require('./controllers/static');

var router           = express.Router();

router.get('/', siteController.index);
router.get('/about', staticController.about);

module.exports = router;

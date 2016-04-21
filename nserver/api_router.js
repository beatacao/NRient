var express = require('express');
var siteController = require('./api/site');

var router = express.Router();

router.get('/message', siteController.message);
router.get('/test_cache', siteController.test_cache);
router.get('/merge',siteController.merge);

module.exports = router;
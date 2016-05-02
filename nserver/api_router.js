var express = require('express');
var siteController = require('./api/site');

var router = express.Router();

router.get('/message', siteController.message);
router.get('/test_cache', siteController.test_cache);
router.get('/merge',siteController.merge);
router.get('/co_merge',siteController.coMerge);

module.exports = router;
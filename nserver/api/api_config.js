//api 
var host = 'http://api.apps.tunnel.mobi/';
var host2 = 'http://www.yimei180.com/';

var api_config = {
	test_cache: host,
	message: host + 'apps',
	province: host2 + 'mall/getProvinces',
	signin: host + 'signin',
	signout: host + 'signout'
}

module.exports = api_config;
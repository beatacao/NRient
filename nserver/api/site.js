var eventproxy = require('eventproxy');
var async = require('async');
var request = require('request');
var api_config = require('./api_config');
var cache = require('../common/cache');

exports.message = function (req, res, next) {
	//api代理，去请求java接口
	request({url:api_config.message}, function(error,data){
		return res.send(data.body);
	})
};

exports.test_cache = function(req, res, next){
	cache.get(api_config.test_cache, function(err, data){
		if(!err && data){
			return res.send(data.body);
		}else{
			request({url:api_config.test_cache}, function(err, data){
				cache.set(api_config.test_cache, data.body, 60);
				return res.send(data.body);
			})
		}
	})
}

var indexMerge = {
	message: function(callback){
		request({url:api_config.message}, function(error,data){
			callback(null, data);
		})
	},

	test: function(callback){
		request({url:api_config.test_cache}, function(err, data){
			callback(null, data);
		})
	},

	province: function(callback){
		request({url:api_config.province}, function(err, data){
			callback(null, data);
		})
	}
}

exports.merge = function(req, res, next){
	var res = res;
	async.parallel(indexMerge, function(err, result){
		return res.send({'message': JSON.parse(result.message.body)[0].user_id, 'test_cache':JSON.parse(result.test.body), 'provinces':result.province.body.length});
	})
}
// main page
exports.home = function (req, res, next) {
	var home = ['<ul>',
					'<li><a>signin: post</a></li>',
					'<li><a>signout: post</a></li>',
					'<li><a href="/api/apps">apps</a></li>',
					'<li><a href="/api/test-cache">test_cache</a></li>',
					'<li><a href="/api/async-merge">async merge</a></li>',
					'<li><a href="/api/cogen-merge">co+genrator merge</a></li>',
				'</ul>'].join('');
	res.send(home);
};

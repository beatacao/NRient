// main page
exports.home = function (req, res, next) {
	var home = ['<ul>',
					'<li><a>signin: post</a></li>',
					'<li><a>signout: post</a></li>',
					'<li><a href="/api/message">message</a></li>',
					'<li><a href="/api/test_cache">test_cache</a></li>',
					'<li><a href="/api/merge">merge</a></li>',
					'<li><a href="/api/co_merge">co+genrator merge</a></li>',
				'</ul>'].join('');
	res.send(home);
};

/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: true,
  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader
  name: 'Yimei', // 社区名字
  description: '煤炭 互联网 易煤', // 社区的描述
  keywords: '煤炭 互联网 易煤',
  site_logo: '', 
  site_icon: '', 
  // 程序运行的端口
  port: 3000,
  // 域名
  host: '',
  session_secret: 'secret',
  redis:{
  	host: '',
  	port: '',
  	db: 0
  }
};

module.exports = config;

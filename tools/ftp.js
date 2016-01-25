var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
var config = require('../secrets.js');

ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err)
	else console.log('finished');
});

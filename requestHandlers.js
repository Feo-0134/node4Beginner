var exec = require('child_process').exec;

function sleep(milliSecondes) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSecondes);
}

function start(response) {
	console.log("Request handler 'hello' was called.")


	exec("ls -lah", function (error, stdout, stderr) {
		// sleep(100000)
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.")
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('Hello Upload');
	response.end();
}

exports.start = start
exports.upload = upload
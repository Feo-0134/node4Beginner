function sleep(milliSecondes) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSecondes);
}

function start() {
	console.log("Request handler 'hello' was called.")
	sleep(10000)
	return "Hello Start"
}

function upload() {
	console.log("Request handler 'upload' was called.")
	return "Hello Upload"
}

exports.start = start
exports.upload = upload
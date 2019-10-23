var http = require("http");
var url = require("url");

function start(router, handle) {
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("request for" + pathname + " received.")

		var content = router(handle, pathname)
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(content);
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server start at 8888")
}

exports.start = start
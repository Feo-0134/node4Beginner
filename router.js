function router(handle, pathname, response) {
	console.log("About to route a request from" + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {'Content-Type': 'text/plain'})
		response.write('404 not found')
		response.end()
	}
}
exports.router = router
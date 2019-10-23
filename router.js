function router(handle, pathname) {
	console.log("About to route a request from" + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		console.log("No request handler found for " + pathname);
		return "404 Not Found"
	}
}
exports.router = router
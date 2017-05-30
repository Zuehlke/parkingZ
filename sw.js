// importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('parkinglots').then(function(cache) {
			return cache.addAll([
			'/',
			'/index.html',
			'/bundle.js',
			'/node_modules/bootstrap/dist/css/bootstrap.min.css',
			'/node_modules/react/dist/react.js',
			'/node_modules/react-dom/dist/react-dom.js'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});
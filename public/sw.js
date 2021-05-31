console.warn("sw from public folder");

let cacheData = 'appv1';

this.addEventListener('install', ((event) => {

    event.waitUntil(
        caches.open(cacheData).then((cache) => {

            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/main.chunk.js',
                '/static/js/vendors~main.chunk.js',
                '/index.html',
                '/',
                '/favicon.ico',
                '/manifest.json'
            ])
        })
    )
}))

this.addEventListener('fetch', ((event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(() => {
                return fetch(e.request)
                    .catch(() => caches.match('index.html'))
            })
        )
    }
}))

this.addEventListener('activate', (e) => {
    const cachelist = [];
    cachelist.push(cacheData);

    e.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cache) => {
                if (!cachelist.includes(cache)) {
                    return caches.delete(cache);
                }
            })
        ))

    )
})
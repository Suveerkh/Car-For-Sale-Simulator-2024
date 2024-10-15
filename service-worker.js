self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('game-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/images/icon-192x192.png',
                '/images/icon-512x512.png'
            ]);
        })
    );
});

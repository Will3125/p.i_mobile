var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './entrar.html',
        './proximo.html',

        './Imagens/camera.png',
        './Imagens/dolly.jpg',
        './Imagens/frevo.png',
        './Imagens/it.jpg',
        '/Imagens/simba/jpg',

        './icones/196.png',
        './icones/216.png',
        './icones/256.png',
        './icones/512.png'

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});
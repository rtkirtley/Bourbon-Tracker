// sw.js - Service Worker for Bourbon Vault Pro
// This script keeps the app alive in iOS memory to prevent image deletion.

const CACHE_NAME = 'bourbon-vault-v1';
const URLS_TO_CACHE = [
  './',
  'index.html',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

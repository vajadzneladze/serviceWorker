importScripts('assets/js/cache-polyfill.js');

let CACHE_VERSION =  'v1';
let CACHE_FILES = [
    './',
    'index.html',
    'assets/css/style.css',
    'assets/js/cache-polyfill.js',
    'assets/img/icon.png'
]

selft.addEventListener('install', e => {

    selft.skipWaiting();
    
    e.waitUntil(
        caches.open(CACHE_VERSION)
        .then( cache => {
            console.log(' Cache Opened');
            return cache.addAll(CACHE_FILES);
        })
    )
})


self.addEventListener('fetch', e => {
    let online = navigator.online;
    if(!online) {
        e.respondWith(
            caches.match(e.request).then( res => {

                if(res){
                    return res;
                }
            })
        )
    }
})


self.addEventListener('activate', e => {

    e.waitUntil(
        caches.keys().then( (keys, i) => {
            if(keys !== CACHE_VERSION){
                return caches.delete(keys[i])
            }
        })
    )
})
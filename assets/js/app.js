console.log('App js is ready to use ...')


if('serviceWorker' in navigator){

    navigator.serviceWorker.register('https://vajadzneladze.github.io/serviceWorker/')
    .then(() => console.log('Service Worker Registered'))
}
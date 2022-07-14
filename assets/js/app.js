console.log('App js is ready to use ...')


if('serviceWorker' in navigator){

    navigator.serviceWorker
    .register('https://vajadzneladze.github.io/serviceWorker/sw.js')
    .then(() => console.log('Service Worker Registered'))
}


let defferedPromt; 

const addBtn = document.querySelector('.install');

addBtn.getElementsByClassName.display = 'none';


window.addEventListener('beforeinstallprompt', e => {

    e.preventDefault();
    defferedPromt = e;
    addBtn.style.display = 'block';



});
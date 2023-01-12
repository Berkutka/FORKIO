
let hm = document.querySelector('.header__menu');
let hm1 = document.querySelector('.header__menu1');
let mpopup = document.querySelector('.popup__menu');

if (hm) {
    hm.addEventListener('click', function () {
        mpopup.classList.add('active__menu');
        hm.classList.add('mclose');
        hm1.classList.add('mopen');
        console.log('222')
    });
}

if (hm1){
    hm1.addEventListener('click', function () {
        mpopup.classList.remove('active__menu');
        hm.classList.remove('mclose');
        hm1.classList.remove('mopen');
        console.log('333')
    });
}


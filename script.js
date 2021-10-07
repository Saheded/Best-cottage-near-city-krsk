(function () {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('up-button-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('up-button-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.up-button');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();
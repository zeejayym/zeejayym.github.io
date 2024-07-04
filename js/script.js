document.addEventListener('DOMContentLoaded', () => {
    const gameCount = document.querySelector('#enum');
    const visitCount = document.querySelector('#enum2');
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            const onScreen = isElementOnScreen(backToTop);
            backToTop.style.opacity = onScreen ? '1' : '0';
            backToTop.style.transition = 'opacity 0.5s ease-in-out';
        });
    }

    if (gameCount) {
        animateCount(gameCount, 17, 45);
    }

    if (visitCount) {
        animateCount(visitCount, 40, 19);
    }

    function isElementOnScreen(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateCount(element, maxValue, interval) {
        let number = 0;
        const intervalId = setInterval(() => {
            element.textContent = number;
            if (number === maxValue) {
                element.parentElement.style.color = 'lime';
                element.parentElement.style.transition = 'color 0.5s ease-in-out';
            }
            number++;
            if (number > maxValue) {
                clearInterval(intervalId);
            }
        }, interval);
    }
});

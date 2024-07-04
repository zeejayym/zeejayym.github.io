const gameCount = document.querySelector('#enum');
const visitCount = document.querySelector('#enum2');

if (gameCount) {
    let number = 0; 
    const maxValue = 17;
    const intervalId = setInterval(() => {
        gameCount.textContent = number;
        number++;
        if (number > maxValue) {
            clearInterval(intervalId);
        }
    }, 45); 
}

const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        const onScreen = isElementOnScreen(backToTop);
        if (onScreen) {
            backToTop.style.opacity = '1';
            backToTop.style.transition = 'opacity 0.5s ease-in-out'; // Add transition property
        } else {
            backToTop.style.opacity = '0';
        }
    });
}

if (visitCount) {
    let number = 0; 
    const maxValue = 40; 
    const intervalId2 = setInterval(() => {
        visitCount.textContent = number;
        number++;
        if (number > maxValue) {
            clearInterval(intervalId2);
        }
    }, 25); 
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

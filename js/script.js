// Find id enum, enum2. If found, when page loads increase the number from 0 to a variable number.

window.addEventListener('load', () => {
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
});

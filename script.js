let counter = 0;

const buttons = document.querySelectorAll('.counter__buttons');
const display = document.querySelector('.counter__display');

buttons.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        if(index === 0) {
            counter++;
        } else if (index === 1) {
            counter--;
        }

        display.innerText = counter;
        setDisabled(counter);
    })
})

function setDisabled(counter) {
    if (counter === 0) {
        buttons[1].disabled = true;
    } else {
        buttons[1].disabled = false;
    }
}

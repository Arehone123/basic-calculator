const buttons = document.querySelectorAll('.btn');

const display = document.getElementById('result');

buttons.forEach(button => {

    button.addEventListener('click', () => {
        if (button.id === 'clear')
        {

            display.value = '';
        }
        else if (button.id === 'backspace')
        {
            display.value = display.value.slice(0, -1);
        }
        else if (button.id === 'equals') {
            display.value = eval(display.value);
        }
        else
        {
            display.value += button.textContent;
        }
    });
});

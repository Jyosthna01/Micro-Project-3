const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

function appendCharacter(char) {
    if (display.textContent === '0' && char !== '.') {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace('x', '*'));
    } catch (error) {
        display.textContent = 'Error';
    }
}

const btn = document.querySelector('#toggle')
const btn2 = document.querySelector('#toggle2')
const btn3 = document.querySelector('#toggle3')
const ele = document.querySelector('body')

const storedMode = localStorage.getItem('mode')

if(storedMode){
    ele.classList.add(storedMode)
}

btn.addEventListener('click', () => {
    const storedMode = localStorage.getItem('mode')
    if (storedMode) {
        ele.classList.remove(storedMode)
    }
    ele.classList.add('dark')

    localStorage.setItem('mode', ele.classList.contains('dark') ? 'dark' : '')
})

btn2.addEventListener('click', () => {
    const storedMode = localStorage.getItem('mode')

    if (storedMode) {
        ele.classList.add(storedMode)
    }
    if (storedMode) {
        ele.classList.remove(storedMode)
    }
    ele.classList.add('light')

    localStorage.setItem('mode', ele.classList.contains('light') ? 'light' : '')
})

btn3.addEventListener('click', () => {
    const storedMode = localStorage.getItem('mode')

    if (storedMode) {
        ele.classList.add(storedMode)
    }
    if (storedMode) {
        ele.classList.remove(storedMode)
    }
    ele.classList.add('orange')

    localStorage.setItem('mode', ele.classList.contains('orange') ? 'orange' : '')
})


// TERNAARY OPERATOR
// if(classList.contains('dark')){
//     localStorage.setItem('mode', 'dark')
// } else{
//     localStorage.setItem('mode', 'light')
// }

// classList.contains('dark') ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light')


// Function to append clicked value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
//Functions
function addOne(event) {
    if (number.value < 999) {
        ++number.value
    }
}
function subOne(event) {
    if (number.value > 0) {
        --number.value
    }
}
function addToList(event) {
    numRecord.push(number.value)
    textarea.innerHTML = numRecord
}

//Basic document style
document.body.style = "display: flex; justify-content: center; align-items: center; background-color: #F5F5F5;"

//Variable settings
let plus = "+";
let minus = "-";

//Elements creation
let minusButton = document.createElement('button')
let plusButton = document.createElement('button')
let counterInput = '<input id="number" class="counter__input" value="0"/>';
let submitBtn = '<input id="submit" class="submit" type="submit" name="submit" value="Add to list"/>';
let textArea = '<textarea id="textarea" class="textarea" rows="4">Your numbers will be added here...</textarea>'

//DOM insertion
counter.append(minusButton, plusButton)
minusButton.insertAdjacentHTML('afterend', counterInput)
counter.insertAdjacentHTML('afterend', submitBtn);
submit.insertAdjacentHTML('afterend', textArea);

//Editing elements content
minusButton.setAttribute('class', 'button button__minus')
minusButton.textContent = minus;

plusButton.setAttribute('class', 'button button__plus')
plusButton.textContent = plus;

//Event adding
minusButton.onclick = subOne
plusButton.onclick = addOne

let numRecord = []
submit.onclick = addToList


//Adding keyboard functionalities
document.addEventListener('keypress', (event) => {
    if (event.key == plus) {
        addOne()
    } else if (event.key == minus) {
        subOne()
    } else if (event.key == "Enter") {
        addToList()
    }
}, false);

document.addEventListener('keydown', (event) => {
    if (event.code == "ArrowUp" || event.code == "ArrowRight") {
        addOne()
    } else if (event.code === "ArrowDown" || event.code == "ArrowLeft") {
        subOne()
    }
}, false);
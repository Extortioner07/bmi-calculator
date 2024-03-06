// Theme mode
document.addEventListener('DOMContentLoaded', function () {
    const theme = document.getElementById('icon');
    const body = document.body;
    theme.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
    });
});

const rotateElement = document.getElementById('icon');

rotateElement.addEventListener('click', function () {
    this.classList.remove('rotation');
    void this.offsetWidth;
    this.classList.add('rotation')
});


// - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
// - BMI < 18.5, you are underweight.
// - BMI >= 18.5 and BMI <=24.9, you are normal.
// - BMI >=25 and BMI <= 29.9, you are overweight.
// - Otherwise, you are obese.

// BMI calculation
function clickToCalculate() {
    const feet = inputValue('feet-value');
    feet.inputValue = '';
    const inch = inputValue('inch-value');
    inch.inputValue = '';
    const kg = inputValue('kg-value');
    kg.inputValue = '';
    const cm = ((feet*12)+inch)*2.54;
    const cmToM= cm / 100;
    const m = cmToM * cmToM;
    const total = kg / m;
    console.log(total);
    const subTotal = innerValue('total-bmi', total);
  if (total < 18.5) {
    const main = document.getElementById('card-1');
    main.classList.add('hidden');
    const main2 = document.getElementById('card-3');
    main2.classList.add('hidden');
    const main3 = document.getElementById('card-4');
    main3.classList.add('hidden');
    const main4 = document.getElementById('card-5');
    main4.classList.add('hidden');
    const card = document.getElementById('card-2');
    card.classList.remove('hidden');
  }
  else if (total >=18.5 && total <=24.9) {
    const main = document.getElementById('card-1');
    main.classList.add('hidden');
    const main2 = document.getElementById('card-2');
    main2.classList.add('hidden');
    const main3 = document.getElementById('card-4');
    main3.classList.add('hidden');
    const main4 = document.getElementById('card-5');
    main4.classList.add('hidden');
    const card = document.getElementById('card-3');
    card.classList.remove('hidden')
  }
  else if (total >=25 && total <= 29.9) {
    const main = document.getElementById('card-1');
    main.classList.add('hidden');
    const main2 = document.getElementById('card-3');
    main2.classList.add('hidden');
    const main3 = document.getElementById('card-2');
    main3.classList.add('hidden');
    const main4 = document.getElementById('card-5');
    main4.classList.add('hidden');
    const card = document.getElementById('card-4');
    card.classList.remove('hidden');
  }
  else{
    const main = document.getElementById('card-1');
    main.classList.add('hidden');
    const main2 = document.getElementById('card-3');
    main2.classList.add('hidden');
    const main3 = document.getElementById('card-4');
    main3.classList.add('hidden');
    const main4 = document.getElementById('card-2');
    main4.classList.add('hidden');
    const card = document.getElementById('card-5');
    card.classList.remove('hidden');
  }
    return subTotal;
}



function inputValue(input) {
    const inputNum = document.getElementById(input);
    const inputValue = inputNum.value;
    const value = parseFloat(inputValue);
    return value;
}
function innerValue(innerText, total) {
    const element = document.getElementById(innerText);
    element.value = total;
}
// const inputField = document.getElementById(input);
//     const inputValue = inputField.value;
//     const value = parseFloat(inputValue);
//     return value;
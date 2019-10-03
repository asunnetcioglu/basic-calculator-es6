// constants

const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const btnSum = document.getElementById('btn-sum');
const btnExt = document.getElementById('btn-ext');
const btnImp = document.getElementById('btn-imp');
const btnDivi = document.getElementById('btn-divi');
const results = document.getElementById('result')

// functions

btnSum.addEventListener('click', () => {
   //const x = firstNumber.value || 0;
   //const y = secondNumber.value || 0;

   const x = parseFloat(firstNumber.value) || 0;
   const y = parseFloat(secondNumber.value) || 0;
   result.innerHTML = (x + y);
 });

 btnExt.addEventListener('click', () => {
    const x = parseFloat(firstNumber.value) || 0;
    const y = parseFloat(secondNumber.value) || 0;
    result.innerHTML = (x - y);
  });

  btnImp.addEventListener('click', () => {
     const x = parseFloat(firstNumber.value) || 0;
     const y = parseFloat(secondNumber.value) || 0;
     result.innerHTML = (x * y);
   });

   btnDivi.addEventListener('click', () => {
      const x = parseFloat(firstNumber.value) || 0;
      const y = parseFloat(secondNumber.value) || 0;
      result.innerHTML = (x / y);
    })

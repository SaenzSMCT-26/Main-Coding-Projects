"use strict";
/* displays the final result which will be the total dollar amount that will be required at all times for a specific currency pair */
const display = document.querySelector('#displayScreen');

/* this is where you are going to enter your current lot size you want to use for a trade position */
const lotSizeInput = document.querySelector('#lot_size');

/* This is the percentage of margin that is required at the most for a specified currency pair */
const marginPercentageInput = document.querySelector('#margin_percent');

const leverageDisplay = document.querySelector('.leverage_display');

const calcButton = document.querySelector('.calculateBtn');



calcButton.addEventListener('click', () => {
      leverageDisplay.textContent = '';
      display.textContent = '';
      const lot = lotSizeInput.value;
      const margin = marginPercentageInput.value;
      
      const firstCalc = lot * 100000;
      const secondCalc = 100 / margin;
      
      const marginRequired = firstCalc / secondCalc;
      
      leverageDisplay.textContent = `${Math.trunc(secondCalc)}:1`;
      display.textContent = `$${marginRequired}`;
});

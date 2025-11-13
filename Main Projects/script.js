// 'use strict';

// const input_object = {
//       long_input: document.querySelector('#longs'),
//       short_input: document.querySelector('#shorts'),
//       change_in_long_input: document.querySelector('#longChange'),
//       change_in_short_input: document.querySelector('#shortChange'),
// }

// const commitment_of_traders_data_calculator = function(long, short) {
//       const add_data_together = long + 
// }

/* calculation functions for data */
function subtract_shorts_from_longs(value1, value2) {
      value1 = document.querySelector('#long_value').textContent;
      value2 = document.querySelector('#short_value').textContent;
      return value1 - value2;
}
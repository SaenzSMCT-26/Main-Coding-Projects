'use strict';

const [l1, l2, l3] = [(document.querySelector('.long_value_one')), (document.querySelector('.long_value_two')), (document.querySelector('.long_value_three'))];
const [s1, s2, s3] = [(document.querySelector('.short_value_one')), (document.querySelector('.short_value_two')), (document.querySelector('.short_value_three'))];
const [lC1, lC2, lC3] = [(document.querySelector('.long_value_change_one')), (document.querySelector('.long_value_change_two')), (document.querySelector('.long_value_change_three'))];
const [sC1, sC2, sC3] = [(document.querySelector('.short_value_change_one')), (document.querySelector('.short_value_change_two')), (document.querySelector())];

// const array = [0.70, 0.25, -0.05];
/* -------------- calculation function object -------------- */
const calculation_block = {
      subtraction: function(long_value, short_value) {
            const sub = long_value - short_value;
            return sub;
      },
      weighted_score_calc: function(nc, c, nr) {
            const calc_percentage = (nc) + (c) + (nr);
            return calc_percentage;
      }
}

/* console.log(calc); */

const resultFn = () => {
      let result;
      let score;

      const net_position = calculation_block.subtraction(Number(long.value), Number(short.value));
      const change_in_net = calculation_block.subtraction(Number(longChange.value), Number(shortChange.value));
      const previous = calculation_block.subtraction(Number(net_position), Number(change_in_net));

      if (previous < net_position && net_position > 0) {
            result = 'bull';
            score = 1;
                        
      } else if (previous > net_position && net_position < 0) {
            result = 'bear';
            score = -1;
      } else if (net_position === 0) {
            result = 'N';
            score = 0;
      }


}


document.querySelector('#calculate').addEventListener('click', () => {
      // const calc = calculation_block.weighted_score_calc(array[0], array[1], array[2]);

      // const display = document.querySelector('#Screen').textContent = previous;
      // return display;
})
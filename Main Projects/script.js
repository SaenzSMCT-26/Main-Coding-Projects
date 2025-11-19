'use strict';


// const array = [0.70, 0.25, -0.05];
/* -------------- calculation function object -------------- */
const calculation_block = {
      subtraction: function(long_value, short_value) {
            const sub = long_value - short_value;
            return sub;
      },
}

/* console.log(calc); */

const resultFn = () => {
      let result;
      let score;

      /* nP is short for net position */

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
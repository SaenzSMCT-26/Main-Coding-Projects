'use strict';

const long = document.querySelector('.long_value');
const short = document.querySelector('.short_value');
const changeInLong = document.querySelector('.long_value_change');
const changeInShort = document.querySelector('.short_value_change');

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
      const net_position = calculation_block.subtraction(Number(long.value), Number(short.value));

      /* this is the amount of contracts added or offloaded to and from the current net position */
      const change_in_net = calculation_block.subtraction(Number(changeInLong.value), Number(changeInShort.value));

      /*This will be the net position minus the change in net*/
      const previous = calculation_block.subtraction(Number(net_position), Number(change_in_net));



      // if (previous < net_position && net_position > 0) {
      //       result = 'bull';
      //       score = 1;
                        
      // } else if (previous > net_position && net_position < 0) {
      //       result = 'bear';
      //       score = -1;
      // } else if (net_position === 0) {
      //       result = 'N';
      //       score = 0;
      // }


}


document.querySelector('#calculate').addEventListener('click', () => {
      // const calc = calculation_block.weighted_score_calc(array[0], array[1], array[2]);

      // const display = document.querySelector('#Screen').textContent = previous;
      // return display;
})
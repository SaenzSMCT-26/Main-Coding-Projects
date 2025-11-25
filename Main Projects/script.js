'use strict';

// const long = document.querySelector('.long_value');
// const short = document.querySelector('.short_value');
// const changeInLong = document.querySelector('.long_value_change');
// const changeInShort = document.querySelector('.short_value_change');

// Test input data for long and short positions
const long = 176400;
const short = 85900;

// Test input data for how much of a change in positioning there was from the last report
const changeInLong = 19888;
const changeInShort = -3000;

/* we can create constant variables to hold the percentage values for compared_result */
const [lp1, lp2, lp3] = [(long * 0.3), (long * 0.58), (long * 0.86)];
const [sp1, sp2, sp3] = [(short * 0.3), (short * 0.58), (short * 0.86)];

function long_short_positioning(long, short) {

      let bias;

      if (short === long) {
            bias = "neatral";
      } else if (short <= lp1) {
            bias  = "extremely bullish";
      } else if (short <= lp2 && short > lp1) {
            bias  = "very bullish";
      } else if (short <= lp3 && short > lp2) {
            bias  = "bullish";
      } else if (long <= sp1) {
            bias = "extremely bearish";
      } else if (long <= sp2 && long > lp1) {
            bias = "very bearish";
      } else if (long <= sp3 && long > lp2) {
            bias = "bearish";
      } else bias = "too close for consideration"

      return bias;
}

console.log(long_short_positioning(long, short));
// const array = [0.70, 0.25, -0.05];
/* -------------- calculation function object -------------- */
/* const calculation_block = {
      subtraction: function(long_value, short_value) {
            const sub = long_value - short_value;
            return sub;
      },
} */

/* console.log(calc); */

// const bullish_sentiment = 100;
/* function commitments_of_traders_data() {


      //this is the current net position or the current amount of contracts the non-commercial are holding on to
      const current_net_position = calculation_block.subtraction(Number(long), Number(short));

      //this is the amount of contracts added or offloaded to and from the current net position
      const change_in_net = calculation_block.subtraction(Number(changeInLong), Number(changeInShort));

      //This will be the net position minus the change in net
      const previous = calculation_block.subtraction(Number(current_net_position), Number(change_in_net));

      
      return current_net_position ;//TEST



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


} */

// const result = commitments_of_traders_data();

// console.log(result);

// document.querySelector('#calculate').addEventListener('click', () => {
//       // const calc = calculation_block.weighted_score_calc(array[0], array[1], array[2]);

//       // const display = document.querySelector('#Screen').textContent = previous;
//       // return display;
// })
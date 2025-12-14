"strict mode";

/* these are the input values we will use later when we start to build out the web app */


const weekly_COT_Non_Commercials = {
      longs: [169890,172349,170180,178745],
      shorts: [-138733,-123873,-118915,-110630],
      /* 
      Remember to turn the short values into negatives for the
      data to be taken in properly. :)
      */
}




let arrLongs = [];
let arrShorts = [];
(function retrieveLongs() {
      let count = 0;
      const long_reports = weekly_COT_Non_Commercials.longs;
      const short_reports = weekly_COT_Non_Commercials.shorts; 
      const len = 4;

      for(let j = 0; j < len; j++) {
            for(let i = j; i < len - j - 1; i++) {
                  (function pushData() {
                        arrLongs.push(long_reports[count]);
                        arrShorts.push(short_reports[count]);
                  })();
                  count+=1;
            }
      }
      return arrLongs;
})();

//test ouput for arrays(arrays of COT long and short positions data)
console.log(arrLongs);
console.log(arrShorts);






const [currentWeekLongChange, weekTwoLongChange, weekThreeLongChange, weekFourLongChange] = [arrLongs[0], arrLongs[1], arrLongs[2], arrLongs[3]];
const [currentWeekShortChange, weekTwoShortChange, weekThreeShortChange, weekFourShortChange] = [arrShorts[0], arrShorts[1], arrShorts[2], arrShorts[3]];

function comparator(current, wk2, wk3, wk4) {
      const [subOne, subTwo, subThree] = [(current - wk2), (wk2 - wk3), (wk3 - wk4)];
      // const subTwo = wk2 - wk3;
      // const subThree = wk3 - wk4;
      const array = [subOne, subTwo, subThree];
      return array;
}
const longPositions = comparator(currentWeekLongChange, weekTwoLongChange, weekThreeLongChange, weekFourLongChange);
const shortPositions = comparator(currentWeekShortChange, weekTwoShortChange, weekThreeShortChange, weekFourShortChange);

const longs = [...longPositions];
const shorts = [...shortPositions];



// come back to this. It will be used for 
console.log(`\n`);
console.log(`longs: [${longs}]`);
console.log(`shorts: [${shorts}]`);
console.log(`\n`);





function deltaSentiment(delta) {
      let result;
      const [b1, b2] = ['Bullish', 'Bearish'];

      if(delta === 0) result = 'neutral';
      else if (delta > 0) result = b1;
      
      return result ?? b2;
}
const longSentiment = [deltaSentiment(longs[0]), deltaSentiment(longs[1]), deltaSentiment(longs[2])];
const shortSentiment = [deltaSentiment(shorts[0]), deltaSentiment(shorts[1]), deltaSentiment(shorts[2])];


console.log(longSentiment);
console.log(shortSentiment);

// function comparator() {
//       const len = 
//       for(let i = 0; i < len)
// }



// let storage;

// (function pre_and_current_values() {
//       storage = [];

//       let value1;
//       let value2;
//       let value3;

//       value1 = ;
//       value2 = ;
//       value2 = ;
      
//       storage.push(value1, value2);
// })();
// console.log(storage);


/* 
We need to figure out how calculate 
when the institutions are reducing bias or adding on to bias (supporting bias).
this will help determine when they are making a turn around 
*/
// (function biasScale(val1) {
//       if(val1 > 0) console.log(`${val1} Greater than 0`);
//       else console.log(`${val1} not greater than 0`);
// })(storage[1]);


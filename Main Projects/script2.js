"strict mode";


const prevLongs = 150565;
const prevShorts = 142300;

const longs = 175600;
const shorts = 134000;


let storage = [];

function pre_and_current_values() {
      let value1;
      let value2;

      value1 = longs - prevLongs;
      value2 = shorts - prevShorts;
      
      storage.push(value1, value2);
}
pre_and_current_values();


/* 
We need to figure out how calculate 
when the institutions are reducing bias or adding on to bias (supporting bias).
this will help determine when they are making a turn around 
*/
function biasScale(val1) {
      if(val1 > 0) console.log(`${val1} Greater than 0`);
      else console.log(`${val1} not greater than 0`);
}
biasScale(storage[0]);


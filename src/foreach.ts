const { performance } = require('perf_hooks');

export function testForeach() {
  const size = 99990000;

  let myArray: number[] = new Array(size);

  for (let i = 0; i < size; i++) {
    myArray[i] = i * 2;
  }

  let timer1 = performance.now();

  let result: number = 0;
  myArray.forEach((num: number, index: number, arr: number[]) => {
    result += num;
  });

  let timer2 = performance.now();

  console.log(result);
  console.log("forEach took: " + (timer2 - timer1) + " milliseconds");

  let timer3 = performance.now();
  result = 0;

  for (let val of myArray) {
    result += val;
  }

  let timer4 = performance.now();

  console.log(result);

  console.log("for of took: " + (timer4 - timer3) + " milliseconds");
}

# performance

The purpose of this project was to time the performance of the `forEach` and `for of` loops.

The test loops through an array with `99990000` items.

The first test uses an `array.forEach` and takes `3328.5636999979615 milliseconds`.

The second test uses a `for of` and takes `2102.7758999988437 milliseconds`.

So we can conclude that the `for of` has better performance.
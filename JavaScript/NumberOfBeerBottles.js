// Applies the use of loop
function beer() {
  var count = 99;
  var remainingBeer = count;
  while (count >= 0) {
    if (count > 2) {
      remainingBeer--;
      console.log(
        count +
          " bottles of beer on the wall, " +
          count +
          " bottles of beer. Take 1 down, pass it around, " +
          remainingBeer +
          " bottles of beer on the wall."
      );
    } else if (count === 2) {
      remainingBeer--;
      console.log(
        count +
          " bottles of beer on the wall, " +
          count +
          " bottles of beer. Take 1 down, pass it around, " +
          remainingBeer +
          " bottle of beer on the wall."
      );
    } else if (count === 1) {
      remainingBeer--;
      console.log(
        count +
          " bottle of beer on the wall, " +
          count +
          " bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall."
      );
    } else {
      console.log(
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
      );
    }
    count--;
  }
}

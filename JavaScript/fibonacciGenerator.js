function fibonacciGenerator(n) {
  var fibonacci = [];
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    for (var i = 0; i < n; i++) {
      if (fibonacci.length < 2) {
        fibonacci.push(i);
      } else {
        var sumOfFibo =
          fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(sumOfFibo);
      }
    }
    return fibonacci;
  }
}

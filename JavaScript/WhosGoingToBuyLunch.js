// This program will is all about accessing the array item using random function
function whosPaying(names) {
  var randomNumber = Math.floor(Math.random() * names.length);
  return names[randomNumber] + " is going to buy lunch today!";
}

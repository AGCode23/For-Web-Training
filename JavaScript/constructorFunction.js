// Creating constructor function

function HouseKeeper(yearsOfExp, name, cleaningRepertoire) {
  this.yearsOfExp = yearsOfExp;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in progress...");
  };
}

// How to use the constructor function to create objects

var houseKeeper1 = new HouseKeeper(12, "Jane", [
  "Bathroom",
  "Lobby",
  "Bedroom",
]);

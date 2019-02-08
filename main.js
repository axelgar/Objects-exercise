'use strcict'

function main () {
  console.log('ei')
  // your code goes here.

  //Exercise 1

  let penguin1 = {
    name: 'Whiteblack',
    origin: 'Whiteblack the Penguin Sees the World',
    author: 'H. A. Rey',
  };

  console.log("Hello, I'm a penguin and my name is " + penguin1.name);

  penguin1.canFly = false;

  penguin1.chirp = function () {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
  };
  
  penguin1.sayHello = function () {
    console.log("Hello, I'm a penguin and my name is " + this.name);
  }

  penguin1.sayHello();

  penguin1.name = 'Penguin McPenguinFace';
  penguin1.sayHello();

  penguin1.fly = function () {
    if (this.canFly === true) {
      console.log("I can fly!");
    } else if (this.canFly === false) {
      console.log("No flying for me!");
    }
  }

  penguin1.fly();

  penguin1.canFly = true;

  penguin1.fly();

  for (const key in penguin1) {
    console.log(key);
  }

  for (const value in penguin1) {
    console.log(penguin1[value]);
  }

  //Exercise 2

  penguin1.favoriteFood = ['fish', 'more fish', 'a lot of fish'];

  console.log(penguin1.favoriteFood[1]);

  penguin1.firstFavoriteFood = penguin1.favoriteFood[0];

  penguin1.favoriteFood.push('a big fish');

  console.log(penguin1.favoriteFood.length);

  penguin1.favoriteFood[3] = 'pineapples';

  penguin1.lastFavFood = function () {
    console.log(penguin1.favoriteFood[(penguin1.favoriteFood.length - 1)]);
  }

  for (let i = 0; i < penguin1.favoriteFood.length; i++) {
    console.log(penguin1.favoriteFood[i]);
  }

  //Exercise 3

  let suit = {
    hat: 'baseball cap',
    shirt: 'Hawaiian shirt',
    pants: 'cargo shorts',
    shoes: 'flip-flops',
  };

  penguin1.outfit = suit;

  penguin1.penguinHatType = suit.hat;
  console.log(penguin1.penguinHatType);


  //pregunta 3
  penguin1.outfit.accesory = 'pocket watch';

  //pregunta 4
  penguin1.outfit.hat = 'top hat';
  
  //pregunta 5
  delete penguin1.outfit.pants;
  
  //pregunta 6
  for (const value in suit) {
    console.log(suit[value]);
  }

  
  //Exercise 4

  var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

  //1
  let penguins = [gunter, ramon, fred];
  
  //2
  console.log(penguins[0]);

  //3
  let = secondPenguin = penguins[1];

  //4
  console.log(penguins[penguins.length - 1].name);
  
  //5
  

  //6
  console.log(penguins.length);

  //7
  penguins[penguins.length - 1].canFly = true;
  
  //8
  penguins[0].sayHello();

  //9
  for (let i = 0; i < penguins.length; i++) {
    console.log(penguins[i].name);
  }

  //10
  for (let i = 0; i < penguins.length; i++) {
    penguins[i].sayHello();
  }

  //11
  for (let i = 0; i < penguins.length; i++) {
    penguins[i].numberOfFeet = 2;
  }

  //12
  for (let i = 0; i < penguins.length; i++) {
    if (penguins[i].canFly === true) {
      console.log(`${penguins[i].name} can fly!`);
    }
  }


};

window.addEventListener('load', main);
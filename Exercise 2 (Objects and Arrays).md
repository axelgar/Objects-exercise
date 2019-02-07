## Solutions Exercise 2

#### 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.

Solution
```
myPenguin.favoriteFoods = ["fish", "ice cream", "hot chocolate"];
```
---
#### 2. Access your penguin's second favorite food and print it to the console using console.log()

Solution
```
console.log(myPenguin.favoriteFoods[1]);
```
---
#### 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

Solution
```
var firstFavFood = myPenguin.favoriteFoods[0];
```
---
#### 4. Add another food to the end of the list.

Solution
```
myPenguin.favoriteFoods.push("sushi");
```
---
#### 5. Print the length of your penguin's favoriteFoods array to the console with console.log()

Solution
```
console.log(myPenguin.favoriteFoods.length);
```
---
#### 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

Solution
```
myPenguin.favoriteFoods[3] = "pineapples";
```
---
#### 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. 

Solution
```
var lastFavFood = myPenguin.favoriteFoods[ myPenguin.favoriteFoods.length - 1 ];
```
---
#### 8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. 

Solution 
```
for (var index = 0; index < myPenguin.favoriteFoods.length; index++) {
  console.log(myPenguin.favoriteFoods[index]);
}
```


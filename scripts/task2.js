/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const name = "James Thomas";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = name;

// Step 3: declare and instantiate a variable to hold the current year
const year = 2022;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
const photo = "images/family.webp";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', photo)



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const food = [' Smoothies', ' Cheesy Gordita Crunch', " Chester's Hot Fries"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = food;

// Step 3: declare and instantiate a variable to hold another favorite food
const moreFood = ' Teriyaki Chicken';

// Step 4: add the variable holding another favorite food to the favorite food array
food.push(moreFood)

// Step 5: repeat Step 2
document.querySelector('#food').textContent = food;

// Step 6: remove the first element in the favorite foods array
food.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = food;


// Step 8: remove the last element in the favorite foods array
food.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = food;




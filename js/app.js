'use strict';

alert('Welcome to my website. :)')

var yes = 'y';
var no = 'n';

var y = 'yes';
var n = 'no';
var grade = 0;

// First Question is about my favorite color
var answerColor = prompt('Do you think that my favorite color is blue?');

while (answerColor === null || answerColor === undefined || answerColor === '') {
   alert('Please answer!');
   answerColor = prompt('Do you think that my favorite color is blue?');
}

while (answerColor.toLowerCase() !== yes && answerColor.toLowerCase() !== y && answerColor.toLowerCase() !== no && answerColor.toLowerCase() !== n) {
   alert('Please insert a valid answer');
   answerColor = prompt('Do you think that my favorite color is blue?');
}



if (answerColor.toLowerCase() === yes || answerColor.toLowerCase() === y) {
   // console.log(answerColor);
   alert('Yup :) ! That is right.');
   grade = grade + 1;
}
else {
   alert('No :( ! That is wrong.');
}


// Second Question about my favorite food
var answerFood = prompt('Do you think that my favorite food is Molokhiah?');

while (answerFood === null || answerFood === undefined || answerFood === '') {
   alert('Please answer!');
   answerColor = prompt('Do you think that my favorite food is Molokhiah?');
}

while (answerFood.toLowerCase() !== yes && answerFood.toLowerCase() !== y && answerFood.toLowerCase() !== no && answerFood.toLowerCase() !== n) {
   alert('Please insert a valid answer');
   answerFood = prompt('Do you think that my favorite food is Molokhiah?');
}



if (answerFood.toLowerCase() === no || answerFood.toLowerCase() === n) {
   // console.log(answerFood);
   alert('Yup :) ! That is right.');
   grade = grade + 1;
}
else {
   alert('No :( ! That is wrong. My favorite food is pizza.');
}


// Third Question about my favorite drink

var answerDrink = prompt('Do you think that my favorite drink is Hot Chocolate?');

while (answerDrink === null || answerDrink === undefined || answerDrink === '') {
   alert('Please answer!');
   answerDrink = prompt('Do you think that my favorite food is Molokhiah?');
}

while (answerDrink.toLowerCase() !== yes && answerDrink.toLowerCase() !== y && answerDrink.toLowerCase() !== no && answerDrink.toLowerCase() !== n) {
   alert('Please insert a valid answer');
   answerDrink = prompt('Do you think that my favorite food is Molokhiah?');
}



if (answerDrink.toLowerCase() === yes || answerDrink.toLowerCase() === y) {
   //console.log(answerDrink);
   alert('Yup :) ! That is right.');
   grade = grade + 1;
}
else {
   alert('No :( ! That is wrong. My favorite drink is hot chocolate.');
}

// Fourth Question about my favorite fruit
var answerFruit = prompt('Do you think that my favorite fruit is Strawberry?');

while (answerFruit === null || answerFruit === undefined || answerFruit === '') {
   alert('Please answer!');
   answerFruit = prompt('Do you think that my favorite fruit is Strawberry?');
}

while (answerFruit.toLowerCase() !== yes && answerFruit.toLowerCase() !== y && answerFruit.toLowerCase() !== no && answerFruit.toLowerCase() !== n) {
   alert('Please insert a valid answer');
   answerFruit = prompt('Do you think that my favorite fruit is Strawberry?');
}



if (answerFruit.toLowerCase() === yes || answerFruit.toLowerCase() === y) {
   // console.log(answerFruit);
   alert('Yup :) ! That is right.');
   grade = grade + 1;
}
else {
   alert('No :( ! That is wrong. My favorite fruit is Strawberry.');
}


// Fifth Question about my favorite hoppy
var answerHoppy = prompt('Do you think that my favorite hoppy is Drawing?');

while (answerHoppy === null || answerHoppy === undefined || answerHoppy === '') {
   alert('Please answer!');
   answerHoppy = prompt('Do you think that my favorite hoppy is Drawing?');
}

while (answerHoppy.toLowerCase() !== yes && answerHoppy.toLowerCase() !== y && answerHoppy.toLowerCase() !== no && answerHoppy.toLowerCase() !== n) {
   alert('Please insert a valid answer');
   answerHoppy = prompt('Do you think that my favorite hoppy is Drawing?');
}



if (answerHoppy.toLowerCase() === yes || answerHoppy.toLowerCase() === y) {
   // console.log(answerHoppy);
   alert('Yup :) ! That is right.');
   grade = grade + 1;
}
else {
   alert('No :( ! That is wrong. My favorite hoppy is Drawing.');
}

// Sixth Question about my lucky number
var answerNumber = prompt('Inserts the number that you guess it is my lucky one!');
if (parseInt(answerNumber) == 7) {
   alert('That is correct! My lucky number is 7 :) .');
   grade = grade + 1;
} else {

   for (var i = 0; i < 3; i++) {
      while (answerNumber === null || answerNumber === undefined || answerNumber === '') {
         alert('Please answer!');
         answerNumber = prompt('Inserts the number that you guess it is my lucky one!');
      }

      if (parseInt(answerNumber) < 7) {
         //console.log(answerNumber);
         alert('Too Low');
         answerNumber = prompt('Inserts the number that you guess it is my lucky one!');
      }
      else if (parseInt(answerNumber) > 7) {
         alert('Too High');
         answerNumber = prompt('Inserts the number that you guess it is my lucky one!');
      }
      else if (parseInt(answerNumber) == 7) {
         alert('That is correct! :) ');
         break;
      }
   }
}
   alert('My lucky number is 7!');

   // Seventh Question about my name's letter
   var myArray = ['A', 'S', 'E', 'E', 'L'];

   var guess = prompt('Inserts one of my name"s letters');

   for (var c = 0; c < 5; c++) {
      while (guess === null || guess === undefined || guess === '') {
         alert('Please answer!');
         guess = prompt('Inserts the number that you guess it is my lucky one!');
      }
      if (guess.toLowerCase() === 'a' || guess.toLowerCase() === 's' || guess.toLowerCase() === 'e' || guess.toLowerCase() === 'l') {
         alert('That is correct! :)');
         grade = grade + 1;
         break;
      } else {
         alert('That is wrong! :(');
         guess = prompt('Inserts one of my name"s letters');
      }
   }

alert('My name consist of these letters: ' + myArray);
alert('Your grade is ' + grade + ' out of 7');


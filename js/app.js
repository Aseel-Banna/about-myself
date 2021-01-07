'use strict';

alert('Welcome to my website. :)')

var yes = 'y';
var no = 'n';

var y = 'yes';
var n = 'no';
var grade = 0;

var myArray = ['A', 'S', 'E', 'E', 'L'];
var index = myArray.length;
var correct = false;

var answerColor = answer('Do you think that my favorite color is blue?');
var answerDrink= answer('Do you think that my favorite drink is Hot Chocolate?');
var answerFood= answer('Do you think that my favorite food is Pizza?');
var answerFruit= answer('Do you think that my favorite fruit is Strawberry?');
var answerHoppy= answer('Do you think that my favorite hoppy is Drawing?');
var answerNumber= guessNumber();
var answerLetter= guessLetter();
alert('My name consist of these letters: ' + myArray);
alert('Your grade is ' + grade + ' out of 7');


// Declartion Functions

function answer(userAnswer){
   var userAnswer=prompt(userAnswer);
   while (userAnswer === null || userAnswer === undefined || userAnswer === '') {
      userAnswer=prompt('Please answer!');
   }
   while (userAnswer.toLowerCase() !== yes && userAnswer.toLowerCase() !== y && userAnswer.toLowerCase() !== no && userAnswer.toLowerCase() !== n) {
      alert('Please insert a valid answer');
      userAnswer=prompt('Try Again :)');
   }
   if (userAnswer.toLowerCase() === yes || userAnswer.toLowerCase() === y) {
      alert('Yup :) ! That is right.');
      grade = grade + 1;
   }
   else {
      alert('No :( ! That is wrong.');
   }
}

function guessNumber(number) {
   var number = prompt('Inserts the number that you guess it is my lucky one!');

   if (parseInt(number) == 7) {
      alert('That is correct!');
      grade = grade + 1;
   } else {
   
      for (var i = 0; i < 3; i++) {
         while (number === null || number === undefined || number === '') {
            alert('Please answer!');
            number = prompt('Inserts the number that you guess it is my lucky one!');
         }
   
         if (parseInt(number) < 7) {
            alert('Too Low');
            number = prompt('Inserts the number that you guess it is my lucky one!');
         }
         else if (parseInt(number) > 7) {
            alert('Too High');
            number = prompt('Inserts the number that you guess it is my lucky one!');
         }
         else if (parseInt(number) == 7) {
            alert('That is correct! :) ');
            break;
         }

      }
      alert('My Lucky number is 7 :) !');
   }
}

function guessLetter(letter){
var letter = prompt('Inserts one of my name\'s letters');

   for (var c = 0; c < 5; c++) {
      while (letter === null || letter === undefined || letter === '') {
         alert('Please answer!');
         letter = prompt('Inserts one of my name\'s letters');
      }
      
      for (var j=0 ; j < index ; j++){
         if (letter.toLowerCase() === myArray[j].toLowerCase()) {
            alert('That is correct! :)');
            grade = grade + 1;
            correct= true;
            break;
         }
      }
      if (correct){
         break;
   } alert('That is wrong! :(');
     letter = prompt('Inserts one of my name\'s letters');
   }
}




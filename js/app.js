'use strict';

alert('Welcome to my website. :)')

var yes= 'y';
var no= 'n';

var y= 'yes';
var n= 'no';


var answerColor= prompt('Do you think that my favorite color is blue?');

while ( answerColor === null || answerColor === undefined || answerColor === '')
 {
    alert('Please answer!');
    answerColor= prompt('Do you think that my favorite color is blue?');
 }

while (answerColor.toLowerCase() !== yes && answerColor.toLowerCase() !== y && answerColor.toLowerCase() !== no && answerColor.toLowerCase() !== n)
{
    alert('Please insert a valid answer');
    answerColor= prompt('Do you think that my favorite color is blue?');
}



if( answerColor.toLowerCase() === yes || answerColor.toLowerCase() === y )
 {
    // console.log(answerColor);
    alert('Yup :) ! That is right.');
 } 
 else
  { 
    alert('No :( ! That is wrong.');
  }



  var answerFood= prompt('Do you think that my favorite food is Molokhiah?');

  while ( answerFood === null || answerFood === undefined || answerFood === '')
   {
      alert('Please answer!');
      answerColor= prompt('Do you think that my favorite food is Molokhiah?');
   }
  
  while (answerFood.toLowerCase() !== yes && answerFood.toLowerCase() !== y && answerFood.toLowerCase() !== no && answerFood.toLowerCase() !== n)
  {
      alert('Please insert a valid answer');
      answerFood= prompt('Do you think that my favorite food is Molokhiah?');
  }
  
  
  
  if( answerFood.toLowerCase() === no || answerFood.toLowerCase() === n )
   {
      // console.log(answerFood);
      alert('Yup :) ! That is right.');
   } 
   else
    { 
      alert('No :( ! That is wrong. My favorite food is pizza.');
    }


var answerDrink= prompt('Do you think that my favorite drink is Hot Chocolate?');

  while ( answerDrink === null || answerDrink === undefined || answerDrink === '')
   {
      alert('Please answer!');
      answerDrink= prompt('Do you think that my favorite food is Molokhiah?');
   }
  
  while (answerDrink.toLowerCase() !== yes && answerDrink.toLowerCase() !== y && answerDrink.toLowerCase() !== no && answerDrink.toLowerCase() !== n)
  {
      alert('Please insert a valid answer');
      answerDrink= prompt('Do you think that my favorite food is Molokhiah?');
  }
  
  
  
  if( answerDrink.toLowerCase() === yes || answerDrink.toLowerCase() === y )
   {
      // console.log(answerDrink);
      alert('Yup :) ! That is right.');
   } 
   else
    { 
      alert('No :( ! That is wrong. My favorite drink is hot chocolate.');
    }


    var answerFruit= prompt('Do you think that my favorite fruit is Strawberry?');

    while ( answerFruit === null || answerFruit === undefined || answerFruit === '')
   {
      alert('Please answer!');
      answerFruit= prompt('Do you think that my favorite fruit is Strawberry?');
   }
  
  while (answerFruit.toLowerCase() !== yes && answerFruit.toLowerCase() !== y && answerFruit.toLowerCase() !== no && answerFruit.toLowerCase() !== n)
  {
      alert('Please insert a valid answer');
      answerFruit= prompt('Do you think that my favorite fruit is Strawberry?');
  }
  
  
  
  if( answerFruit.toLowerCase() === yes || answerFruit.toLowerCase() === y )
   {
      // console.log(answerFruit);
      alert('Yup :) ! That is right.');
   } 
   else
    { 
      alert('No :( ! That is wrong. My favorite fruit is Strawberry.');
    }


    var answerHoppy= prompt('Do you think that my favorite hoppy is Drawing?');

    while ( answerHoppy === null || answerHoppy === undefined || answerHoppy === '')
   {
      alert('Please answer!');
      answerHoppy= prompt('Do you think that my favorite hoppy is Drawing?');
   }
  
  while (answerHoppy.toLowerCase() !== yes && answerHoppy.toLowerCase() !== y && answerHoppy.toLowerCase() !== no && answerHoppy.toLowerCase() !== n)
  {
      alert('Please insert a valid answer');
      answerHoppy= prompt('Do you think that my favorite hoppy is Drawing?');
  }
  
  
  
  if( answerHoppy.toLowerCase() === yes || answerHoppy.toLowerCase() === y )
   {
     // console.log(answerHoppy);
      alert('Yup :) ! That is right.');
   } 
   else
    { 
      alert('No :( ! That is wrong. My favorite hoppy is Drawing.');
    }


$(document).ready(function(){
 
 //find a way for the program to choose a random number between 1 and 100, save this as a variable
 var guessNum=0
 
 var mynum=function randomIntFromInterval(min,max)//this will pick my number
{
   return Math.floor(Math.random()*(max-min+1)+min);//this sets the limit of my numbers
}
var compNum= mynum(1,100);//limits
console.log(compNum)
//when the player clicks on the 'guess' button
  $('button').on('click', function(){
   var usersGuess=parseInt($('input').val());//lets player place number guess
   guessNum= guessNum + 1;
    //save their guess as a variable
   
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (usersGuess===compNum)//conditional statments
    {
     alert("you win")
    }
    else if(usersGuess<compNum)
    {
     alert("too low")
    }
    else
    {
     alert("too high")
    }
      //what happens if the guess is correct?
      
    //if the user guessed too high...
    
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});

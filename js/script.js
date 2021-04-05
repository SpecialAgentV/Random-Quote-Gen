/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// Random Quote Gen//

const main = document.querySelector('main');
const quotes = [
    {quote: "It Doesn't Matter If You're A Loser, Or A Nerd, Or A Freak! All That Matters Is That You Become Badass!", 
    By: 'Johnny Lawrence',
    Where:'Cobra Kai'},
    { quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    By: 'Albert Eistein'},
    {quote: 'Give me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.',
    By: 'Reinhold Niebuhr'},
    {quote: "If you're always trying to be normal, you will never know how amazing you can be." ,
    By: 'Maya Angelou'},
    {quote: "You are GOOD enough, SMART enough, BEAUTIFUL enough and STRONG enough. Believe it and never let insecurity run your life",
    By: 'Unknown'},
    {quote: 'Just Try',
    By: 'Victoria Dennis'},
    
];


for (let i = 0; i<quotes.length; i++){
  let mess = quotes[i];
  console.log(Math.floor(Math.random(*6)));
 main.innerHTML +=`<h2> ${mess.quote}</h2> <p>By ${mess.By} - ${mess.Where}</p>`;
}


//function to pick at Random
//random number generator 1-6 may subtract 1 to get to 0 for array or mathfloor 
  const main = 
    math.random(*6) = q
// set into an array
    function (q){
       let q = random number 
        quotes[q]
    }
// print to screen
main.adjacentHTML = ` <h1>${Quote}</h1> - ${quote.value[random number]} `

document.getElementById('load-quote').addEventListener("click", printQuote, false);
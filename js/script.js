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
const quotes = [ //array of quotes - not all had citings and years
    {quote: "It Doesn't Matter If You're A Loser, Or A Nerd, Or A Freak! All That Matters Is That You Become Badass!", 
    source: 'Johnny Lawrence',
    year: 2020,
    citation:'Cobra Kai'},
    { quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    source: 'Albert Eistein',
    },
    {quote: 'Give me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.',
    source: 'Reinhold Niebuhr'},
    {quote: "If you're always trying to be normal, you will never know how amazing you can be." ,
    source: 'Maya Angelou'},
    {quote: "You are GOOD enough, SMART enough, BEAUTIFUL enough and STRONG enough. Believe it and never let insecurity run your life",
    source: 'Unknown'},
    {quote: 'Just Try',
    source: 'Victoria Dennis'},
    { quote: "If you had everything, you'd have nothing",
    source: 'Smart Cookies',
    citation: 'Minecraft',
    year: 2020,
    }
];
//Generating the quote using random number gen. rounding to 0 since index starts at 0
function getRandomQuote() {
  const x = Math.floor(Math.random()*quotes.length); //quote amounts can be changed
  console.log (x);   
 let mess = quotes[x]; //simplify how to call things from the array
 return mess;
};

  function printQuote() {
    
    var mess = getRandomQuote();
    
    //to insure no undefined pops up from lack of info
    if (!mess.year && !mess.citation){ 
      let print = `<p class="quote"> ${mess.quote}</p> <p class="source">By ${mess.source}`;
      document.getElementById('quote-box').innerHTML = print;

        
      }else if (!mess.year){
        let print = `<p class="quote"> ${mess.quote}</p> <p class="source">By ${mess.source}<span class="citation"> ${mess.citation}</span>`;
        document.getElementById('quote-box').innerHTML = print;

      } else if (!mess.citation){
      let print = `<p class="quote"> ${mess.quote}</p> <p class="source">By ${mess.source} <span class="year">${mess.year}</span></p>`;

      }else{
      let print = `<p class="quote"> ${mess.quote}</p> <p class="source">By ${mess.source}  <span class="citation"> ${mess.citation}</span><span class="year">${mess.year}</span></p>`;
      document.getElementById('quote-box').innerHTML = print;
    };
   

 
}
 
  
document.getElementById('load-quote').addEventListener("click", printQuote, false);
/*
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
main.adjacentHTML = ` <h1>${Quote}</h1> - ${quote.value[random number]} `*/


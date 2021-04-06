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
    Year: 2020,
    Where:'Cobra Kai'},
    { quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    By: 'Albert Eistein',
    },
    {quote: 'Give me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.',
    By: 'Reinhold Niebuhr'},
    {quote: "If you're always trying to be normal, you will never know how amazing you can be." ,
    By: 'Maya Angelou'},
    {quote: "You are GOOD enough, SMART enough, BEAUTIFUL enough and STRONG enough. Believe it and never let insecurity run your life",
    By: 'Unknown'},
    {quote: 'Just Try',
    By: 'Victoria Dennis'},
    { quote: "If you had everything, you'd have nothing",
    By: 'Smart Cookies',
    Where: 'Minecraft',
    Year: 2020,
    }
];


function randomNum(){
 return Math.floor(Math.random()*quotes.length);
};


  function printQuote() {
    const x = randomNum();
    let mess = quotes[x];
    if (!quotes[x].Year && !quotes[x].Where){
      let print = `<p class="quote"> ${mess.quote}</p> <p class="source">By ${mess.By}`;
      document.getElementById('quote-box').innerHTML = print;

        
      }else if (!quotes[x].Year){
        let print = `<p class="quote"> ${mess.quote}</p> <p class="source">By ${mess.By}<span class="citation"> ${mess.Where}</span>`;
        document.getElementById('quote-box').innerHTML = print;

      } else if (!quotes[x].Where){
      let print = `<p class="quote"> ${mess.quote}</p> <p class="source">By ${mess.By} <span class="year">${mess.Year}</span></p>`;

      }else{
      let print = `<p class="quote"> ${mess.quote}</p> <p class="source">By ${mess.By}  <span class="citation"> ${mess.Where}</span><span class="year">${mess.Year}</span></p>`;
      document.getElementById('quote-box').innerHTML = print;
    };
   

 
}
 
  
document.getElementById('load-quote').addEventListener("click", printQuote, false);


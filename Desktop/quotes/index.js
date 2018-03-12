$(document).ready(function(){
var randomQuote;
var randomNum;

  function getQuote(){
    var quotes = ["Don't cry because it's over, smile because it happened. -Dr. Suess", "Be yourself, everyone else is already taken. - Oscar Wilde", "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe. -Albert Einstein", "You cannot shake hands with a clenched fist. -Indira Gandhi", "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life, and the procedure, the process is its own reward. -Amelia Earhart"];

    randomNum = (Math.floor(Math.random()*quotes.length)); //just a random number//
    randomQuote = quotes[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(author);
  }

$("#tweet").on("click",function(){
  window.open("https://twitter.com/intent/tweet?text="+randomQuote);
});
    $("#newQuote").on("click", function(){
    getQuote();
  });
});

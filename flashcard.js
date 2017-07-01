var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", 
    "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", 
    "George Washington", 
    "... was the first president of the United States", 
    "George Washington was the first president of the United States.");


/////////////////////////////////////////

var cloze = firstPresidentCloze.cloze;
var partial = firstPresidentCloze.partial;
var fullText = firstPresidentCloze.fullText;

// var a = fullText.search(cloze);
// console.log(a);

// var b = fullText.slice(a, cloze.length);
// console.log(b);

// var c = fullText.slice(cloze.length);
// console.log(c);

// var d = fullText.replace(cloze, "...");
// console.log(d);

/////////////////////////////////////////

// "George Washington"
console.log(cloze); 

// " ... was the first president of the United States.
console.log(partial); 

// "George Washington was the first president of the United States.
console.log(fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
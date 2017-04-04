// Solve your homework here.
const greeting = "Hello World! ";

console.log(greeting);

let tony = "Say hi to the bad guy! "

console.log(greeting + tony);

let mcduck = 500000000000
let stunt = "I'm worth big money! "

console.log(mcduck);

console.log(greeting + tony + stunt + mcduck);

const top5 = ["Wu-Tang", "Outkast", "Public Enemy", "UGK", "Eightball & MJG"]

console.log(top5[1]);

var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";

var res = sentence.split(" ");

// console.log(res);

var sixgod = [];

res.forEach(function(word){
  if (  word.length >= 6) {
    sixgod.push(word);
  }
})

console.log(sixgod);

let movies = [];
movies.push({
  title: "Forest Gump",
  budget: 55,
  stars: ["Tom Hanks"]
});
movies.push({
  title: "Star Wars",
  budget: 11,
  stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
  title: "Batman Begins",
  budget: 150,
  stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
  title: "Titanic",
  budget: 200,
  stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
  title: "Inception",
  budget: 160,
  stars: ["Leonardo DiCaprio", "JGL"]
});

movies.forEach(function(budget))

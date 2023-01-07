ReadLinesync = require('readline-sync');
var score = 0;
var UserName = ReadLinesync.question('May I Know Your Name? ');
console.log('Welcome', UserName, 'Are You a Football Fan?');
console.log('Well I Have Few Questions, Answer Them To Show How Big Football Fan You Are')

FIFA = ['1926', '1945', '1930', '1929', '1931'];
Index = ReadLinesync.keyInSelect(FIFA, 'In Which Year FIFA WC Was Inaugrated? ', { cancel: false });


if (Index === 2) {
  console.log('You Are Right');
  score = score + 1
} else {
  console.log('You Are Wrong');
  score = score - 1
}
console.log('Current Score Is', score);
console.log('----------------------');

FIFA = ['16', '19', '21', '23', '25'];
Index = ReadLinesync.keyInSelect(FIFA, 'How Many Times FIFA WC Final Had Been Held? ', { cancel: false })


if (Index === 2) {
  console.log('You Are Right');
  score = score + 1
} else {
  console.log('You Are Wrong');
  score = score - 1
}
console.log('Current Score Is', score);
console.log('----------------------');

FIFA = ['24', '36', '16', '32', '48',]
Index = ReadLinesync.keyInSelect(FIFA, 'How Many Teams play The FIFA WC? ', { cancel: false })


if (Index === 3) {
  console.log('You Are Right');
  score = score + 1
} else {
  console.log('You Are Wrong');
  score = score - 1
}
console.log('Current Score Is', score);
console.log('----------------------');

FIFA = ['78', '79', '80', '81', '82',];
Index = ReadLinesync.keyInSelect(FIFA, 'A Total Of How Many Teams Have Competed In FIFA WC Till Now? ', { cancel: false })


if (Index === 1) {
  console.log('You Are Right');
  score = score + 1
} else {
  console.log('You Are Wrong');
  score = score - 1
}
console.log('Current Score Is', score);
console.log('----------------------');

FIFA = ['6', '7', '8', '9', '10',];
Index = ReadLinesync.keyInSelect(FIFA, 'How Many National Team Has Won The FIFA WC Till Now? ', { cancel: false })


if (Index === 2) {
  console.log('You Are Right');
  score = score + 1
} else {
  console.log('You Are Wrong');
  score = score - 1
}
console.log('Current Score Is', score);
console.log('----------------------');

FIFA = ['Croatia', 'Germany', 'Argentina', 'France', 'Spain',];
Index = ReadLinesync.keyInSelect(FIFA, 'Whch Team Have Won The Last FIFA WC? ', { cancel: false })


if (Index === 3) {
  console.log('You Are Right');
  score = score + 1
} else {
  console.log('You Are Wrong');
  score = score - 1
}
console.log('Current Score Is', score);
console.log('----------------------');

FIFA = ['Brazil', 'Argentina', 'Germany', 'Italy', 'France',];
Index = ReadLinesync.keyInSelect(FIFA, 'Whic Team Have Won The Most FIFA WC? ', { cancel: false })


if (Index === 0) {
  console.log('You Are Right');
  score = score + 1
} else {
  console.log('You Are Wrong');
  score = score - 1
}
console.log('Current Score Is', score);
console.log('----------------------');


var highscores = [
  {
    name: 'faizan',
    score: '5',
  },
  {
    name: 'muskan',
    score: '4',
  },
]
console.log('YAY! You Scored', score);
console.log('Check Out The High Score, If You Think Your Name Should Be There Then Ping Me');
highscores.map(score => console.log(score.name, ':', score.score));
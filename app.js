var word, words, stars, guessesRemaining, wordsGuessed, wordsPlayed;
words = ['hollow', 'crimson', 'yellow', 'keyboard', 'silicon', 'anagrams', 'palindrome'];

function start() {
  resetGame();
  playGame();
}

function resetGame() {
  console.log('resetting game');
  guessesRemaining = 7;
  wordsPlayed = 0;
  wordsGuessed = 0;
  word = generateWord(wordsGuessed);
  stars = generateStars(word);
  document.getElementById('word').textContent = stars;
}

function generateWord(wordsGuessed) {
  return words[wordsGuessed];
}

function generateStars(word) {
  stars = '';
  for (var i=0; i<word.length; i++) {
    stars += '*';
  }
  return stars;
}

function playGame() {
  document.querySelector('.a').addEventListener('click', function() {
    guess = 'a';
    checkGuess(guess);
  });
  document.querySelector('.b').addEventListener('click', function() {
    guess = 'b';
    checkGuess(guess);
  });
  document.querySelector('.c').addEventListener('click', function() {
    guess = 'c';
    checkGuess(guess);
  });
  document.querySelector('.d').addEventListener('click', function() {
    guess = 'd';
    checkGuess(guess);
  });
  document.querySelector('.e').addEventListener('click', function() {
    guess = 'e';
    checkGuess(guess);
  });
  document.querySelector('.f').addEventListener('click', function() {
    guess = 'f';
    checkGuess(guess);
  });
  document.querySelector('.g').addEventListener('click', function() {
    guess = 'g';
    checkGuess(guess);
  });
  document.querySelector('.h').addEventListener('click', function() {
    guess = 'h';
    checkGuess(guess);
  });
  document.querySelector('.i').addEventListener('click', function() {
    guess = 'i';
    checkGuess(guess);
  });
  document.querySelector('.j').addEventListener('click', function() {
    guess = 'j';
    checkGuess(guess);
  });
  document.querySelector('.k').addEventListener('click', function() {
    guess = 'k';
    checkGuess(guess);
  });
  document.querySelector('.l').addEventListener('click', function() {
    guess = 'l';
    checkGuess(guess);
  });
  document.querySelector('.m').addEventListener('click', function() {
    guess = 'm';
    checkGuess(guess);
  });
  document.querySelector('.n').addEventListener('click', function() {
    guess = 'n';
    checkGuess(guess);
  });
  document.querySelector('.o').addEventListener('click', function() {
    guess = 'o';
    checkGuess(guess);
  });
  document.querySelector('.p').addEventListener('click', function() {
    guess = 'p';
    checkGuess(guess);
  });
  document.querySelector('.q').addEventListener('click', function() {
    guess = 'q';
    checkGuess(guess);
  });
  document.querySelector('.r').addEventListener('click', function() {
    guess = 'r';
    checkGuess(guess);
  });
  document.querySelector('.s').addEventListener('click', function() {
    guess = 's';
    checkGuess(guess);
  });
  document.querySelector('.t').addEventListener('click', function() {
    guess = 't';
    checkGuess(guess);
  });
  document.querySelector('.u').addEventListener('click', function() {
    guess = 'u';
    checkGuess(guess);
  });
  document.querySelector('.v').addEventListener('click', function() {
    guess = 'v';
    checkGuess(guess);
  });
  document.querySelector('.w').addEventListener('click', function() {
    guess = 'w';
    checkGuess(guess);
  });
  document.querySelector('.x').addEventListener('click', function() {
    guess = 'x';
    checkGuess(guess);
  });
  document.querySelector('.y').addEventListener('click', function() {
    guess = 'y';
    checkGuess(guess);
  });
  document.querySelector('.z').addEventListener('click', function() {
    guess = 'z';
    checkGuess(guess);
  });
}

function checkGuess(guess) {
  if (word.includes(guess)) {
    console.log('match');
    showLetters(guess);
  }
  else {
    console.log('no match');
    guessesRemaining -= 1;
  }
}

function showLetters(guess) {
  var stars = document.getElementById('word').textContent;
  var updatedStars = '';
  console.log(updatedStars);
  for(var i=0; i<word.length; i++) {
    if(word[i] === guess) {
      updatedStars += guess.toUpperCase();
    }
    else {
      updatedStars += stars[i];
    }
  }
  document.getElementById('word').textContent = updatedStars;
  document.getElementById(guess).style.display = 'none';
}

start();

var word, words, guessesRemaining, wordsGuessed, wordsPlayed;
words = ['hollow', 'crimson', 'yellow', 'keyboard', 'silicon', 'anagrams', 'palindrome'];

function start() {
  resetGame();
  playGame();
}

function resetGame() {
  guessesRemaining = 0;
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
  var stars = '';
  for (var i=0; i<word.length; i++) {
    stars += ' * ';
  }
  return stars;
}

function playGame() {

}

start();

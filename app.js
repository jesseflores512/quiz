function populate() {
  if (quiz.isEnded()) {
    showScores();

  }
  else {
    //show new question
    var element = document.querySelector('#question');
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i < choices.length; i++) {
      var element = document.querySelector('#choice' + i);
      element.innerHTML = choices[i];

      guess('btn' + i, choices[i]);
    }
  }
};

function guess (id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
}

function showScores(){
  var gameOverHtml = '<h1>Result</h1>';
  gameOverHtml += "<h2 id='score'>Your Score: " + quiz.score + '</h2>';
  var element = document.querySelector('#quiz')
  element.innerHTML = gameOverHtml;
}

var questions = [
  new Question('What is the largest animal to ever roam the earth?', ['elephant', 'brontosaurus', 'blue whale', 'T-Rex'], 'blue whale'),
  new Question('What movie has the record for highest grossing film?', ['Avatar', 'Avengers Infinity War', 'Jurassic Park', 'Lord of the Rings: The Two Towers'], 'Avatar')
];

var quiz = new Quiz(questions);

populate();

function populate() {
  if (quiz.isEnded()) {
    //showscore
  }
  else {
    //show new question
    var element = document.querySelector('#question');
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i < choices.length; i++) {
      var element = document.querySelector('#choice' + i);
      element.innerHTML = choices[i];
    }

  }
}
var questions = [
  new Question('What is the largest animal to ever roam the earth?', ['elephant', 'brontosaurus', 'blue whale', 'T-Rex'], 'brontosaurus'),
  new Question('What movie has the record for highest grossing film?', ['Avatar', 'Avengers Infinity War', 'Jurassic Park', 'Lord of the Rings: The Two Towers'], 'Avatar')
];

var quiz = new Quiz(questions);

populate();

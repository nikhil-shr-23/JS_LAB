var questions = [
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
  { question: "Which planet is the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
  { question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2 },
  { question: "What is 7 × 8?", options: ["54", "56", "58", "64"], correct: 1 },
  { question: "Largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 }
];

var index = 0;
var score = 0;
var answered = false;

var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var resultScreen = document.getElementById("result-screen");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var nextBtn = document.getElementById("next-btn");
var scoreEl = document.getElementById("score");
var finalScoreEl = document.getElementById("final-score");

function show(el) {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  el.classList.remove("hidden");
}

function render() {
  var q = questions[index];
  questionEl.textContent = (index + 1) + ". " + q.question;
  optionsEl.innerHTML = "";
  nextBtn.classList.add("hidden");

  for (var i = 0; i < q.options.length; i++) {
    var li = document.createElement("li");
    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = i;
    radio.onchange = function () { nextBtn.classList.remove("hidden"); };
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + q.options[i]));
    li.appendChild(label);
    optionsEl.appendChild(li);
  }
}

function submitAnswer() {
  var chosen = document.querySelector('input[name="answer"]:checked');
  if (!chosen) return;

  var q = questions[index];
  var val = parseInt(chosen.value, 10);
  var labels = optionsEl.querySelectorAll("label");

  if (val === q.correct) score++;
  labels[q.correct].classList.add("correct");
  if (val !== q.correct) labels[val].classList.add("wrong");

  answered = true;
  scoreEl.textContent = "Score: " + score + " / " + (index + 1);
  nextBtn.classList.remove("hidden");
  nextBtn.textContent = index === questions.length - 1 ? "See results" : "Next";
  optionsEl.querySelectorAll("input").forEach(function (inp) { inp.disabled = true; });
}

function goNext() {
  if (!answered) {
    submitAnswer();
    return;
  }
  index++;
  if (index >= questions.length) {
    show(resultScreen);
    finalScoreEl.textContent = "You got " + score + " out of " + questions.length + " correct.";
    return;
  }
  answered = false;
  render();
}

function start() {
  index = 0;
  score = 0;
  answered = false;
  scoreEl.textContent = "Score: 0 / 0";
  show(quizScreen);
  render();
}

document.getElementById("start-btn").onclick = start;
document.getElementById("next-btn").onclick = goNext;
document.getElementById("restart-btn").onclick = start;

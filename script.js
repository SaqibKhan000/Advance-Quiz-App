const htmlQuiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    question: "Which tag is used to create a line break in HTML?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    correctAnswer: "<br>",
  },
  {
    question: "What is the correct HTML element for inserting an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    correctAnswer: "<img>",
  },
  {
    question: "How can you make text bold in HTML?",
    options: ["<b>", "<strong>", "Both <b> and <strong>", "<bold>"],
    correctAnswer: "Both <b> and <strong>",
  },
  {
    question: "Which tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: "<ul>",
  },
  {
    question: "What is the correct way to start an HTML document?",
    options: ["<!DOCTYPE html>", "<html>", "<head>", "<document>"],
    correctAnswer: "<!DOCTYPE html>",
  },
  {
    question: "Which tag is used to define a table row?",
    options: ["<tr>", "<td>", "<table>", "<row>"],
    correctAnswer: "<tr>",
  },
  {
    question:
      "Which attribute is used to provide a unique identifier to an HTML element?",
    options: ["id", "class", "name", "style"],
    correctAnswer: "id",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    options: [
      "To display images",
      "To define metadata about the HTML document",
      "To create links to other pages",
      "To style the content",
    ],
    correctAnswer: "To define metadata about the HTML document",
  },
   {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<h1>", "<head>", "<heading>"],
    correctAnswer: "<h1>",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    correctAnswer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "font", "styles"],
    correctAnswer: "style",
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: ["<input type='checkbox'>", "<checkbox>", "<check>", "<input checkbox>"],
    correctAnswer: "<input type='checkbox'>",
  },
  {
    question: "Which HTML element is used to define a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section>", "<end>"],
    correctAnswer: "<footer>",
  },
  {
    question: "Which input type defines a slider control?",
    options: ["range", "slider", "scroll", "bar"],
    correctAnswer: "range",
  },
  {
    question: "How do you specify that an input field is required?",
    options: ["required", "mandatory", "validate", "mustfill"],
    correctAnswer: "required",
  },
  {
    question: "Which tag is used to embed a video in HTML5?",
    options: ["<media>", "<video>", "<movie>", "<embed>"],
    correctAnswer: "<video>",
  },
  {
    question: "Which tag is used to embed audio in HTML5?",
    options: ["<sound>", "<audio>", "<music>", "<mp3>"],
    correctAnswer: "<audio>",
  },
  {
    question: "Which tag is used to create a dropdown list?",
    options: ["<input type='dropdown'>", "<list>", "<select>", "<dropdown>"],
    correctAnswer: "<select>",
  },
  {
    question: "Which tag is used to create a definition list?",
    options: ["<dl>", "<dd>", "<dt>", "<def>"],
    correctAnswer: "<dl>",
  },
  {
    question: "What does the <iframe> tag do?",
    options: [
      "Adds a frame border to text",
      "Embeds another HTML page within the current page",
      "Adds a floating image",
      "None of the above"
    ],
    correctAnswer: "Embeds another HTML page within the current page",
  },
  {
    question: "What does the 'alt' attribute in the <img> tag do?",
    options: [
      "Links the image to another page",
      "Applies alternate styles",
      "Provides alternative text for the image",
      "Changes the image size"
    ],
    correctAnswer: "Provides alternative text for the image",
  },
  {
    question: "Which tag is used to group inline-elements in a document?",
    options: ["<div>", "<section>", "<group>", "<span>"],
    correctAnswer: "<span>",
  },
  {
    question: "What does the <label> tag do?",
    options: [
      "Displays an image",
      "Styles the page",
      "Defines a label for input elements",
      "Sends form data"
    ],
    correctAnswer: "Defines a label for input elements",
  },
  {
    question: "Which tag is used to insert a horizontal line?",
    options: ["<hr>", "<line>", "<br>", "<border>"],
    correctAnswer: "<hr>",
  },
  {
    question: "What is the default alignment of text in a paragraph?",
    options: ["Center", "Right", "Left", "Justify"],
    correctAnswer: "Left",
  },
  {
    question: "Which HTML tag is used to make italic text?",
    options: ["<i>", "<italic>", "<emphasis>", "<em>"],
    correctAnswer: "<i>",
  },
  {
    question: "What does the <title> tag define?",
    options: [
      "The main heading of the page",
      "The title of the document shown in the browser tab",
      "A tooltip for links",
      "The name of the image"
    ],
    correctAnswer: "The title of the document shown in the browser tab",
  },
  {
    question: "Which tag defines a navigation section in HTML5?",
    options: ["<nav>", "<navigate>", "<menu>", "<navbar>"],
    correctAnswer: "<nav>",
  },
  {
  question: "Which HTML attribute is used to open a link in a new tab?",
  options: ["href", "target", "newtab", "rel"],
  correctAnswer: "target",
}
];

let timerCount = 30;
let questionCount = 0;
let questionNoCount = 1;
let score = 0;
let container = document.querySelector(".container");
let questionNo = document.querySelector(".question-no");
let nextQuestionBtn = document.querySelector(".next-question-btn");
let startQuizBtn = document.querySelector(".start-quiz");
let inputBox = document.querySelectorAll("input");
let result = document.querySelector(".result");
let resultH1 = document.querySelector(".result h1");
let timerText = document.querySelector(".timer");
let speaker = document.querySelector("#speaker");
let timerInterval;
container.classList.add("hide");
result.classList.add("hide");

function timerFuntion() {
  clearInterval(timerInterval);
  timerText.textContent =
    (timerCount <= 9 ? "0" + timerCount : timerCount) + " ⏰";

  timerInterval = setInterval(() => {
    timerCount--;
    timerText.textContent =
      (timerCount <= 9 ? "0" + timerCount : timerCount) + " ⏰";
    if (timerCount <= 0) {
      clearInterval(timerInterval);
      nextQuestion();
    }
  }, 1000);
}

function disabledProcess() {
  inputBox.forEach((radioInput) => {
    radioInput.addEventListener("change", () => {
      nextQuestionBtn.disabled = false;
      nextQuestionBtn.classList.remove("disabled");
      nextQuestionBtn.classList.add("next-question-btn");
    });
  });
  nextQuestionBtn.classList.add("disabled");
  nextQuestionBtn.classList.remove("next-question-btn");
  nextQuestionBtn.disabled = true;
}

function checking() {
  inputBox.forEach((radioInput) => {
    if (radioInput.checked) {
      if (radioInput.value === htmlQuiz[questionCount].correctAnswer) {
        score++;
      }
    }
    radioInput.checked = false;
  });
}

let questionPara = document.querySelector("#question-para");
let labels = document.querySelectorAll("label");

resultH1.textContent = "calculating result.....";
resultH1.style.color = "rgba(0, 0, 0, 0.8)";
let loaderImg = document.createElement("img");
loaderImg.src = "gif loader.gif";
loaderImg.alt = "Loading...";
loaderImg.style.width = "60px";
loaderImg.style.margin = "20px auto";
loaderImg.style.display = "block";
resultH1.appendChild(loaderImg);
function resultFunction() {
  container.classList.add("hide");
  result.classList.remove("hide");
  setTimeout(() => {
    let percentage = Math.round((score / htmlQuiz.length) * 100);

    if (score >= 25 && score <= 30) {
      resultH1.textContent = `Excellent! 🎉 You scored ${score}/${htmlQuiz.length} (${percentage}%)`;
    } else if (score >= 15 && score <= 24) {
      resultH1.textContent = `Good job, keep practicing 😊. You scored ${score}/${htmlQuiz.length} (${percentage}%)`;
    } else {
      resultH1.textContent = `Needs improvement 😔, try again. You scored ${score}/${htmlQuiz.length} (${percentage}%)`;
    }
  }, 3000);
}

function loadQuestion() {
  if (questionCount >= htmlQuiz.length) {
    resultFunction();
    timerCount = 0;
    return;
  }

  questionPara.textContent =
    questionNoCount + ". " + htmlQuiz[questionCount].question;

  labels.forEach((content, i) => {
    content.textContent = htmlQuiz[questionCount].options[i];
    inputBox[i].value = content.textContent;
    inputBox[i].checked = false;
  });

  questionNo.textContent = "Q" + questionNoCount + ":";
  disabledProcess();
}

function nextQuestion() {
  timerCount = 30;
  timerText.textContent =
    timerCount <= 9 ? "0" + timerCount + " ⏰" : timerCount + " ⏰";
  checking();
  questionCount++;
  questionNoCount++;
  loadQuestion();
  timerFuntion();
}

window.onload = function () {
  loadQuestion();
  disabledProcess();
};

function restartGame() {
  let restartConfirmation = confirm("Do you want to restart the game?");
  if (restartConfirmation) {
    restart();
  }
  return;
}

function restart() {
  questionCount = 0;
  questionNoCount = 1;
  score = 0;
  questionNo.textContent = "Q" + questionNoCount + ":";
  questionPara.textContent =
    questionNoCount + ". " + htmlQuiz[questionCount].question;
  labels.forEach((content, i) => {
    content.textContent = htmlQuiz[questionCount].options[i];
    inputBox[i].value = content.textContent;
    inputBox[i].checked = false;
  });

  timerCount = 30;
  timerText.textContent =
    timerCount <= 9 ? "0" + timerCount + " ⏰" : timerCount + " ⏰";
  timerFuntion();
  disabledProcess();
}

let audio = new Audio("quiz-background-music.mp3");
function startQuiz() {
  if (audio.paused) {
    audio.loop = true;
    audio.play();
    speaker.className = "ri-volume-up-fill";
  } else {
    audio.pause();
    speaker.className = "ri-volume-mute-fill";
  }
  container.classList.remove("hide");
  startQuizBtn.classList.add("hide");
  timerFuntion();
}

function sing() {
  if (audio.paused) {
    audio.loop = true;
    audio.play();
    speaker.className = "ri-volume-up-fill";
  } else {
    audio.pause();
    speaker.className = "ri-volume-mute-fill";
  }
}

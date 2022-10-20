const speakBtn = document.getElementById("speakBtn");
speakBtn.addEventListener("click", speakNow);

const styleSheet = document.getElementById("styleSheet");

// SpeechRecognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Started..");
};

recognition.onresult = function (e) {
  const resultIndex = e.resultIndex;

  const { transcript } = e.results[resultIndex][0];
  console.log(transcript);
  speakOutLoud(transcript);
};

function speakNow() {
  recognition.start();
}

function speakOutLoud(message) {
  let whatToSpeak = message;

  if (whatToSpeak.includes("dark mode")) {
    styleSheet.setAttribute("href", "dark-mode.css");
  } else if (whatToSpeak.includes("light mode")) {
    styleSheet.setAttribute("href", "light-mode.css");
  } else if (whatToSpeak.includes("open YouTube")) {
    window.open("https://youtube.com", "_blank");
  } else if (whatToSpeak.includes("What's your name?")) {
    whatToSpeak = "my name is chitti robo version 2pointo";
  } else if (whatToSpeak.includes("how old is Mamallapuram Temple")) {
    whatToSpeak = "it is a structural temple, build with blocks of granite, dating from 8th century AD";
  } else if (whatToSpeak.includes("how old is Mahabalipuram Temple")) {
    whatToSpeak = "it is a structural temple, build with blocks of granite, dating from 8th century AD";
  } else if (whatToSpeak.includes("Who named Mahabalipuram?")) {
    whatToSpeak = "narasimhavarman hindu pallava king also known as mamalla";
  } else if (whatToSpeak.includes("What is special in Mahabalipuram?")) {
    whatToSpeak = "mamallapuram is a place that is famous for its temples and monuments especially the very famous shore temple";
  } else if (whatToSpeak.includes("How did Mahabalipuram get its name?")) {
    whatToSpeak = "mamallapuram was one of the major port cities in the pallava kingdom. the town was named after pallava king narasimhavarman 1 who was also known as mamalla";
  } else if (whatToSpeak.includes("who named Mahabalipuram")) {
    whatToSpeak = "narasimhavarman hindu pallava king also known as mamalla";
  } else if (whatToSpeak.includes("what is special in Mahabalipuram")) {
    whatToSpeak = "mamallapuram is a place that is famous for its temples and monuments especially the very famous shore temple";  
  } else if (whatToSpeak.includes("How did Mamallapuram get its name?")) {
    whatToSpeak = "mamallapuram was one of the major port cities in the pallava kingdom. the town was named after pallava king narasimhavarman 1 who was also known as mamalla";  
  } else if (whatToSpeak.includes("Who done this project")) {
    whatToSpeak = "three brilliant people in CSBS department they are karty sakthi vijay";
  } 
  // The action of saying or expressing something aloud..
  const SpeechSynthesisUtterance =
    window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

  const utterance = new SpeechSynthesisUtterance();

  utterance.volume = 1; // 100%
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.text = whatToSpeak;

  // Artificial production of human speech
  const speechSynthesis =
    window.speechSynthesis || window.webkitspeechSynthesis;

  speechSynthesis.speak(utterance);
}
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
  } else if (whatToSpeak.includes("what is your name")) {
    whatToSpeak = "my name is chitti robo version 2pointo";
  } else if (whatToSpeak.includes("what is your name")) {
    whatToSpeak = "my name is chitti robo version 2pointo";
  } else if (whatToSpeak.includes("what is the best time to visit")) {
    whatToSpeak = "summer in the region starts in the month march and lasts till june";
  } else if (whatToSpeak.includes("what is special about")) {
    whatToSpeak = "yercaud is also known for kurinji flowers and they bloom here lot. these flowers are very rare because it blooms once in twelve years";
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
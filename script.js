const message = `Happy failed mensive.\nI know we’re not together anymore, i know maybe you don’t love me like before. But one thing you should know, I still love and care about you. My feelings are real, they’re honest, and I’m still here, waiting.\n\n I know we both tried. We both cared. But the universe just never gave us enough space to become “us.”\n\nIf i can ask you right know, was there a moment you wished we never let go?. Lio, I just want you to know if I’m still here. I haven’t gone anywhere. I hope that one day, you’ll understand and feel the love I’ve been carrying for you all this time.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}



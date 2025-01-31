$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var audio = new Audio("music2.mp3"); // Now using "music2.mp3"

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
    audio.play(); // Play the music when the "Open" button is clicked
  });

  btn_reset.click(function () {
    close();
    audio.pause(); // Pause the music when the "Close" button is clicked
    audio.currentTime = 0; // Reset the music to the beginning
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

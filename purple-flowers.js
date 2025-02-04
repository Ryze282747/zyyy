onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 3700); // Changed delay to 4000 milliseconds (4 seconds)

  // Audio setup
  const audio = new Audio("music4.mp3"); 
  audio.play(); // Play the music immediately

  // Start the music after the flowers finish blooming
  setTimeout(() => { 
    // You can add a pause or other actions here if needed
  }, 5000); // Adjust this delay as needed for your animation
};

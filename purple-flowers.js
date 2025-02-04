const startButton = document.getElementById('start-button');
const music = document.querySelector('.sound');
startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  music.play();
  setTimeout(() => {
    document.querySelector('.not-loaded').classList.remove('not-loaded');
  }, 5000);
});

const lttr = document.querySelectorAll('.lttr');
const line = document.querySelectorAll('.line');
const moContainer = document.querySelector('.mo-container');
const blup = document.querySelector('.blup');
const blop = document.querySelector('.blop');

// Function to create a Mo.js animation
const createAnimation = (target, delay, duration, easing, scale, translateY, translateX, rotate) => {
  const tl = new mo.Timeline({
    duration: duration, // Duration of the animation
    easing: easing, // Easing function for the animation
    delay: delay, // Delay before the animation starts
  });
  tl.add(
    new mo.Tween({
      duration: duration, // Duration of the animation
      easing: easing, // Easing function for the animation
      delay: delay, // Delay before the animation starts
    })
      .set({
        scale: scale, // Scale of the animation
        translateY: translateY, // Vertical translation of the animation
        translateX: translateX, // Horizontal translation of the animation
        rotate: rotate, // Rotation of the animation
      })
      .start()
  );
  tl.play();
  target.classList.add('animated');
};

// Add click event listener to each letter
lttr.forEach((letter, index) => {
  letter.addEventListener('click', () => {
    // Play the "blup" sound effect
    blup.play();
    // Create a Mo.js animation for the letter
    createAnimation(
      letter,
      index * 0.1,
      0.8,
      mo.easing.easeInOut.out,
      1.2,
      -20,
      0,
      360
    );
    // Create a Mo.js animation for the line
    createAnimation(line[index], index * 0.1, 0.8, mo.easing.easeInOut.out, 1.2, -20, 0, 360);
  });
});

// Add click event listener to the container
moContainer.addEventListener('click', () => {
  // Play the "blop" sound effect
  blop.play();
  // Create a Mo.js animation for the container
  createAnimation(moContainer, 0, 0.8, mo.easing.easeInOut.out, 1.2, -20, 0, 360);
});
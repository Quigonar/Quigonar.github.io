// Manage the Confetti Spawning
document.addEventListener("DOMContentLoaded", function() {
  const confettiContainer = document.querySelector('.confetti-container');

  // Number of confetti to add
  const confettiCount = 200;

  for (let i = 1; i <= confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti', `confetti-${i}`);

    // Randomize confetti color
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    confetti.style.backgroundColor = randomColor;

    // Randomize confetti fall animation duration (between 2s and 10s)
    const randomDuration = (Math.random() * 8 + 2).toFixed(2);

    // Randomize confetti fall animation style
    const randomAnimation = `fall-${Math.floor(Math.random() * 3) + 1}`;

    confetti.style.animation = (`${randomAnimation} ${randomDuration}s ease-in-out infinite`)

    // Randomize confetti position
    const randomPosition = Math.random() * 98 + 1; // Between 1% and 99%
    confetti.style.left = `${randomPosition}%`;

    // Append confetti to container
    confettiContainer.appendChild(confetti);
  }
});

// Manage the Balloon Spawning
document.addEventListener("DOMContentLoaded", function() {
  // Function to generate a random number within a range
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to generate a random RGBA color
  function getRandomColor() {
    return `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}, 0.7)`;
  }

  // Function to generate a random animation duration
  function getRandomDuration() {
    return `${getRandom(2, 10)}s`;
  }

  // Function to generate a random left percentage value
  function getRandomLeft() {
    return `${getRandom(0, 100)}%`;
  }

  // Function to generate a random width value between 85 and 250px
  function getRandomWidth() {
    return `${getRandom(85, 250)}px`;
  }

  // Get all balloon containers
  const balloonContainers = [
    document.querySelectorAll('.balloon-container-1'),
    document.querySelectorAll('.balloon-container-2'),
    document.querySelectorAll('.balloon-container-3')
  ];

  // Iterate through each balloon container
  balloonContainers.forEach(function(balloons) {
    // Generate a random number of balloons (between 10 and 20)
    const numBalloons = getRandom(10, 20);

    // Create and append random balloons to the container
    for (let i = 0; i < numBalloons; i++) {
      const balloon = document.createElement('div');
      const color = getRandomColor();
      balloon.classList.add('balloon', `balloon-${i}`);

      // Set random properties
      balloon.style.backgroundColor = color;
      balloon.style.width = getRandomWidth();
      balloon.style.height = `${parseInt(balloon.style.width) + 10}px`;
      balloon.style.animation = `float ${getRandomDuration()} ease-in-out` ;
      balloon.style.left = getRandomLeft();


      // Append balloon to container
      console.log(balloon)
      balloons.forEach(function(container) {
        container.appendChild(balloon);
      });
    }
  });
});
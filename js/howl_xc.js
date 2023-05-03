// The HTML is configured intentionally with h2.animalTitle containing audio file names like "Cow".
// Put all of your code inside the DOMContentLoaded event listener provided.

document.addEventListener('DOMContentLoaded', () => {
  // Use .getElementsByClassName() to get an HTMLCollection of all .animalTitle elements.
  const animalTitles = document.getElementsByClassName('animalTitle');

  // Create a new Object with properties and values like 'animal01: "Cow" '.
  // These values can be found in the HTMLCollection.
  const animalMap = {};
  for (let i = 0; i < animalTitles.length; i++) {
    animalMap[`animal0${i + 1}`] = animalTitles[i].innerText;
  }

  // Use the Object to create event listeners for <img> elements that launch the provided howler script.
  for (const animalId in animalMap) {
    const animalImg = document.getElementById(animalId);
    const animalSound = animalMap[animalId];

    // Write a single 'for...in' statement to add listeners to all the <img> elements.
    animalImg.addEventListener('click', () => {
      playAnimal(animalSound);
    });

    // Leverage the Object to add mouseover styling to the <img> elements.
    animalImg.addEventListener('mouseover', () => {
      animalImg.style.border = '3px solid red';
    });

    animalImg.addEventListener('mouseout', () => {
      animalImg.style.border = '0px';
    });
  }
});

function playAnimal(animalSound) {
  var sound = new Howl({
    src: [`media/${animalSound}.mp3`, `media/${animalSound}.webm`],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
    }
  });
  sound.play(animalSound);
}

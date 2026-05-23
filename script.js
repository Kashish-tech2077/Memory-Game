console.log('Welcome to memory game!');

// All Emojies

// animals and nature
const animalsDeck = [
  { class: 'lion', emoji: '🦁', completed: false }, { class: 'lion', emoji: '🦁', completed: false },
  { class: 'tiger', emoji: '🐯', completed: false }, { class: 'tiger', emoji: '🐯', completed: false },
  { class: 'panda', emoji: '🐼', completed: false }, { class: 'panda', emoji: '🐼', completed: false },
  { class: 'koala', emoji: '🐨', completed: false }, { class: 'koala', emoji: '🐨', completed: false },
  { class: 'fox', emoji: '🦊', completed: false }, { class: 'fox', emoji: '🦊', completed: false },
  { class: 'monkey', emoji: '🐵', completed: false }, { class: 'monkey', emoji: '🐵', completed: false },
  { class: 'frog', emoji: '🐸', completed: false }, { class: 'frog', emoji: '🐸', completed: false },
  { class: 'octopus', emoji: '🐙', completed: false }, { class: 'octopus', emoji: '🐙', completed: false }
];

// Fast food and treats
const foodDeck = [
  { class: 'pizza', emoji: '🍕', completed: false }, { class: 'pizza', emoji: '🍕', completed: false },
  { class: 'burger', emoji: '🍔', completed: false }, { class: 'burger', emoji: '🍔', completed: false },
  { class: 'taco', emoji: '🌮', completed: false }, { class: 'taco', emoji: '🌮', completed: false },
  { class: 'sushi', emoji: '🍣', completed: false }, { class: 'sushi', emoji: '🍣', completed: false },
  { class: 'icecream', emoji: '🍦', completed: false }, { class: 'icecream', emoji: '🍦', completed: false },
  { class: 'doughnut', emoji: '🍩', completed: false }, { class: 'doughnut', emoji: '🍩', completed: false },
  { class: 'cookie', emoji: '🍪', completed: false }, { class: 'cookie', emoji: '🍪', completed: false },
  { class: 'popcorn', emoji: '🍿', completed: false }, { class: 'popcorn', emoji: '🍿', completed: false }
];

// Fruits and Vegetables
const fruitDeck = [
  { class: 'apple', emoji: '🍏', completed: false }, { class: 'apple', emoji: '🍏', completed: false },
  { class: 'avocado', emoji: '🥑', completed: false }, { class: 'avocado', emoji: '🥑', completed: false },
  { class: 'banana', emoji: '🍌', completed: false }, { class: 'banana', emoji: '🍌', completed: false },
  { class: 'strawberry', emoji: '🍓', completed: false }, { class: 'strawberry', emoji: '🍓', completed: false },
  { class: 'watermelon', emoji: '🍉', completed: false }, { class: 'watermelon', emoji: '🍉', completed: false },
  { class: 'pineapple', emoji: '🍍', completed: false }, { class: 'pineapple', emoji: '🍍', completed: false },
  { class: 'cherries', emoji: '🍒', completed: false }, { class: 'cherries', emoji: '🍒', completed: false },
  { class: 'mushroom', emoji: '🍄', completed: false }, { class: 'mushroom', emoji: '🍄', completed: false }
];

// Sports and Gaming
const sportsDeck = [
  { class: 'soccer', emoji: '⚽', completed: false }, { class: 'soccer', emoji: '⚽', completed: false },
  { class: 'basketball', emoji: '🏀', completed: false }, { class: 'basketball', emoji: '🏀', completed: false },
  { class: 'tennis', emoji: '🎾', completed: false }, { class: 'tennis', emoji: '🎾', completed: false },
  { class: 'boxing', emoji: '🥊', completed: false }, { class: 'boxing', emoji: '🥊', completed: false },
  { class: 'skateboard', emoji: '🛹', completed: false }, { class: 'skateboard', emoji: '🛹', completed: false },
  { class: 'gamepad', emoji: '🎮', completed: false }, { class: 'gamepad', emoji: '🎮', completed: false },
  { class: 'bowling', emoji: '🎳', completed: false }, { class: 'bowling', emoji: '🎳', completed: false },
  { class: 'dice', emoji: '🎲', completed: false }, { class: 'dice', emoji: '🎲', completed: false }
];

// Space & weather
const spaceDeck = [
  { class: 'earth', emoji: '🌏', completed: false }, { class: 'earth', emoji: '🌏', completed: false },
  { class: 'moon', emoji: '🌙', completed: false }, { class: 'moon', emoji: '🌙', completed: false },
  { class: 'rocket', emoji: '🚀', completed: false }, { class: 'rocket', emoji: '🚀', completed: false },
  { class: 'ufo', emoji: '🛸', completed: false }, { class: 'ufo', emoji: '🛸', completed: false },
  { class: 'volcano', emoji: '🌋', completed: false }, { class: 'volcano', emoji: '🌋', completed: false },
  { class: 'sun', emoji: '☀️', completed: false }, { class: 'sun', emoji: '☀️', completed: false },
  { class: 'cloud', emoji: '☁️', completed: false }, { class: 'cloud', emoji: '☁️', completed: false },
  { class: 'star', emoji: '⭐', completed: false }, { class: 'star', emoji: '⭐', completed: false }
];

// Music and Art 
const artDeck = [
  { class: 'guitar', emoji: '🎸', completed: false }, { class: 'guitar', emoji: '🎸', completed: false },
  { class: 'palette', emoji: '🎨', completed: false }, { class: 'palette', emoji: '🎨', completed: false },
  { class: 'microphone', emoji: '🎤', completed: false }, { class: 'microphone', emoji: '🎤', completed: false },
  { class: 'headphones', emoji: '🎧', completed: false }, { class: 'headphones', emoji: '🎧', completed: false },
  { class: 'violin', emoji: '🎻', completed: false }, { class: 'violin', emoji: '🎻', completed: false },
  { class: 'drum', emoji: '🥁', completed: false }, { class: 'drum', emoji: '🥁', completed: false },
  { class: 'clapper', emoji: '🎬', completed: false }, { class: 'clapper', emoji: '🎬', completed: false },
  { class: 'ticket', emoji: '🎫', completed: false }, { class: 'ticket', emoji: '🎫', completed: false }
];

// Travel and Vehicles
const travelDeck = [
  { class: 'airplane', emoji: '✈️', completed: false }, { class: 'airplane', emoji: '✈️', completed: false },
  { class: 'car', emoji: '🚗', completed: false }, { class: 'car', emoji: '🚗', completed: false },
  { class: 'ship', emoji: '🚢', completed: false }, { class: 'ship', emoji: '🚢', completed: false },
  { class: 'train', emoji: '🚂', completed: false }, { class: 'train', emoji: '🚂', completed: false },
  { class: 'scooter', emoji: '🛵', completed: false }, { class: 'scooter', emoji: '🛵', completed: false },
  { class: 'bicycle', emoji: '🚲', completed: false }, { class: 'bicycle', emoji: '🚲', completed: false },
  { class: 'helicopter', emoji: '🛸', completed: false }, { class: 'helicopter', emoji: '🛸', completed: false },
  { class: 'castle', emoji: '🏰', completed: false }, { class: 'castle', emoji: '🏰', completed: false }
];

// Object and Tools
const toolsDeck = [
  { class: 'computer', emoji: '🖥', completed: false }, { class: 'computer', emoji: '🖥', completed: false },
  { class: 'bulb', emoji: '💡', completed: false }, { class: 'bulb', emoji: '💡', completed: false },
  { class: 'magnifier', emoji: '🔍', completed: false }, { class: 'magnifier', emoji: '🔍', completed: false },
  { class: 'key', emoji: '🔑', completed: false }, { class: 'key', emoji: '🔑', completed: false },
  { class: 'book', emoji: '📚', completed: false }, { class: 'book', emoji: '📚', completed: false },
  { class: 'umbrella', emoji: '☂️', completed: false }, { class: 'umbrella', emoji: '☂️', completed: false },
  { class: 'wrench', emoji: '🔧', completed: false }, { class: 'wrench', emoji: '🔧', completed: false },
  { class: 'hammer', emoji: '🔨', completed: false }, { class: 'hammer', emoji: '🔨', completed: false }
];

// Fantasy and Magic
const fantasyDeck = [
  { class: 'unicorn', emoji: '🦄', completed: false }, { class: 'unicorn', emoji: '🦄', completed: false },
  { class: 'dinosaur', emoji: '🦕', completed: false }, { class: 'dinosaur', emoji: '🦕', completed: false },
  { class: 'magic', emoji: '🪄', completed: false }, { class: 'magic', emoji: '🪄', completed: false },
  { class: 'crystal', emoji: '🔮', completed: false }, { class: 'crystal', emoji: '🔮', completed: false },
  { class: 'ghost', emoji: '👻', completed: false }, { class: 'ghost', emoji: '👻', completed: false },
  { class: 'alien', emoji: '👽', completed: false }, { class: 'alien', emoji: '👽', completed: false },
  { class: 'dragon', emoji: '🐉', completed: false }, { class: 'dragon', emoji: '🐉', completed: false },
  { class: 'crown', emoji: '👑', completed: false }, { class: 'crown', emoji: '👑', completed: false }
];

// Expressions and Hearts
const heartsDeck = [
  { class: 'heart', emoji: '❤️', completed: false }, { class: 'heart', emoji: '❤️', completed: false },
  { class: 'fire', emoji: '🔥', completed: false }, { class: 'fire', emoji: '🔥', completed: false },
  { class: 'gift', emoji: '🎁', completed: false }, { class: 'gift', emoji: '🎁', completed: false },
  { class: 'balloon', emoji: '🎈', completed: false }, { class: 'balloon', emoji: '🎈', completed: false },
  { class: 'laughing', emoji: '😂', completed: false }, { class: 'laughing', emoji: '😂', completed: false },
  { class: 'cool', emoji: '😎', completed: false }, { class: 'cool', emoji: '😎', completed: false },
  { class: 'wink', emoji: '😉', completed: false }, { class: 'wink', emoji: '😉', completed: false },
  { class: 'party', emoji: '🥳', completed: false }, { class: 'party', emoji: '🥳', completed: false }
];


// -------------------- DOM Elements -----------------------
const gameGrid = document.getElementById('gameGrid');
const statBadge = document.querySelector('.statBadge');
const popUp = document.getElementById('popUp');
const restartBtn = document.querySelector('.restartBtn');

let totalMoves = 0;
let completedMoves = 0;

let flipCards = [];


// --------------------- Shuffling cards logic ----------------------------

const allEmojiTypes = [animalsDeck, foodDeck, fruitDeck, sportsDeck, spaceDeck, artDeck, travelDeck, toolsDeck, fantasyDeck, heartsDeck];
const randomEmojiType = allEmojiTypes[Math.floor(Math.random() * allEmojiTypes.length)];

for (let i = 0; i < 16; i++) {
  let randomIndex = Math.floor(Math.random() * randomEmojiType.length);
  let randomCard = randomEmojiType.splice(randomIndex, 1)[0];

  const gameCard = document.createElement('div');
  gameCard.className = `gameCard ${randomCard.class}`;
  gameCard.textContent = randomCard.emoji;

  gameGrid.append(gameCard);

}

const allCards = document.querySelectorAll('.gameCard');

// ------------------- All functions -----------------------

// -------------------- togglingCards function ---------------

function togglingCards(cards) {

  if (!cards.classList.contains('flipped') && !cards.classList.contains('matched')) {
    cards.classList.add('flipped');
    flipCards.push(cards);
  }

}

// -------------------- cardsEvaluation function ---------------

function cardsEvaluation(cards) {

  if (flipCards.length === 2) {
    totalMoves++;

    if (flipCards[0].textContent === flipCards[1].textContent) {
      matchedPopUp();
      flipCards.forEach((matchedCards) => {
        matchedCards.classList.add('matched');
      })
      flipCards.length = 0;

      completedMoves++;

      // popUp code
      if (completedMoves === 8) {
        popUp.innerHTML = `<h2> Game Over! </h2>
                           <p class='totalMoves'>Total moves: <strong> ${totalMoves} </strong> </p>
                           <button class='commonBtn restartBtn' type='button'> Restart </button>
                           <p class='proTip'> <strong>Pro Tip:</strong> Try to keep total moves as low as possible </p>
                           <i class="crossIcon fa-solid fa-circle-xmark"></i>`


        const crossIcon = popUp.querySelector('i');

        crossIcon.addEventListener('click', () => {
          popUp.style.display = 'none';
          location.reload();
        })

        const restartBtn = popUp.querySelector('button');

        restartBtn.addEventListener('click', () => {
          location.reload();
        })

        setTimeout(() => {
          popUp.style.display = 'flex';
        }, 2000);
      }

    }

    else {
      setTimeout(() => {
        flipCards.forEach((unMatchedCards) => {
          unMatchedCards.classList.remove('flipped');
        })
        flipCards.length = 0;

      }, 1000);
    }

    statBadge.textContent = `Total moves: ${totalMoves}`;

  }


}

// ------------------- restartPopUp function --------------------

function restartPopUp() {


  const restartPopUp = document.createElement('div');
  restartPopUp.classList.add('restartPopUp');

  restartPopUp.innerHTML = `<h2> Restart Anyway </h2>
  <h3><strong> NOTE: </strong> Current progress will be lost </h3>
  <button type='button' class='commonBtn'> Restart Anyway </button>
  <p class='proTip'> <strong>Pro Tip:</strong> Try to keep total moves as low as possible </p>
  <i class="crossIcon fa-solid fa-circle-xmark"></i>`

  const crossBtn = restartPopUp.querySelector('i');
  const restartBtn = restartPopUp.querySelector('button');

  crossBtn.addEventListener('click', () => {
    restartPopUp.remove();
    gameGrid.style.pointerEvents = 'auto';
  })

  restartBtn.addEventListener('click', () => {
    location.reload();
  })

  document.body.append(restartPopUp);
  restartPopUp.style.display = 'flex';

  if (restartPopUp.style.display === 'flex') {
    gameGrid.style.pointerEvents = 'none';
  }

}

// ------------------- matchedPopUp function --------------------

function matchedPopUp() {

  const matchText = document.createElement('div');
  matchText.classList.add('matchTextStyle');
  matchText.textContent = 'Matched';

  document.body.append(matchText);

  setTimeout(() => {
    matchText.style.display = 'flex';
  }, 300)

  setTimeout(() => {
    matchText.style.display = 'none';
  }, 1800)


}

// --------------------- event listeners of elements -------------------

// --------------------- event listeners on all cards ---------------------

allCards.forEach((element) => {
  element.addEventListener('click', () => {

    if (flipCards.length >= 2 || element.classList.contains('flipped') || element.classList.contains('matched')) {
      return;
    }

    togglingCards(element);
    cardsEvaluation(element);

  })
})


// --------------------- event listener on restart button ---------------------

restartBtn.addEventListener('click', () => {
  restartPopUp();
})
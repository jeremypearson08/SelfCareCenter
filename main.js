//Variables
var receiveMessageBtn = document.querySelector('.receive-button');
var affirmationRadio = document.querySelector('.affirmation-container');
var mantraRadio = document.querySelector('.mantra-container');
var resultsContainer = document.querySelector('.results-container');

// Disable the "Receive Message" button by default
receiveMessageBtn.disabled = true;

//Event Listeners
receiveMessageBtn.addEventListener('click', displayRandomMessage);

//Event Handlers and Functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function hide(element) {
    element.style.display = 'none';
  }

  function displayRandomMessage() {
    var selectedArray;
    if (affirmationRadio.querySelector('input').checked) {
      selectedArray = affirmations;
    } else {
      selectedArray = mantras;
    }
    var randomIndex = getRandomIndex(selectedArray);
    var randomMessage = selectedArray[randomIndex];
    resultsContainer.innerHTML = randomMessage;
    var meditationSymbol = document.getElementById('meditate');
    if (meditationSymbol) {
        hide(meditationSymbol);  
        }
    }
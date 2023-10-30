//Variables
var receiveMessageBtn = document.querySelector('.receive-button button');
var affirmationRadio = document.querySelector('.affirmation-container');
var mantraRadio = document.querySelector('.mantra-container');
var resultsContainer = document.querySelector('.results-container');
var clearButton = document.getElementById('clear-button');
var meditationSymbol = document.getElementById('#meditate');

//Event Listeners
receiveMessageBtn.addEventListener('click', displayRandomMessage);
clearButton.addEventListener('click', clearMessage);

//Event Handlers and Functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function hide(element) {
    element.style.display = 'none';
  }

  function show(element) {
    element.style.display = 'block';
  }

  function displayRandomMessage() {
    var selectedArray;
    if (affirmationRadio.querySelector('input').checked || mantraRadio.querySelector('input').checked) {
      if (affirmationRadio.querySelector('input').checked) {
        selectedArray = affirmations;
      } else {
        selectedArray = mantras;
      }
      var randomIndex = getRandomIndex(selectedArray);
      var randomMessage = selectedArray[randomIndex];
      resultsContainer.innerHTML = randomMessage;
      clearButton.disabled = false;
      hide(meditationSymbol);
      receiveMessageBtn.disabled = true; // Disable the button after displaying a message
    } else {
      alert("Please select a message type before receiving a message.");
    }
  }

  function clearMessage() {
    if (resultsContainer.innerHTML !== '') {
      resultsContainer.innerHTML = '';
      show(meditationSymbol); 
      receiveMessageBtn.disabled = false;
      clearButton.disabled = true;
    } else {
      alert("There is no message to clear.");
    }
  }
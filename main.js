//Variables
var receiveMessageBtn = document.querySelector('.receive-button');
var affirmationRadio = document.querySelector('.affirmation-container');
var mantraRadio = document.querySelector('.mantra-container');
var resultsContainer = document.querySelector('.results-container');
var clearButton = document.getElementById('clear-button');

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

    function clearMessage() {
        resultsContainer.innerHTML = '';
        show(meditationSymbol);
        show(receiveMessageBtn);
        hide(clearButton);
      }
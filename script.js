
var heartCounting = 0;
var coinCounting = 100;
var copyCounting = 0;

// get elements
var heartCountElements = document.getElementById('count-heart');
var coinCountElements = document.getElementById('count-coin');
var copyCountElements = document.getElementById('count-copy-num');
var historyList = document.getElementById('history-part');
var historyButtonClear = document.getElementById('clear-all-history');

// update heart coin and copy
function updateDisplays() {
  heartCountElements.innerText = heartCounting;
  coinCountElements.innerText = coinCounting;
  copyCountElements.innerText = copyCounting;
}


//  functionality on heart buttons starts here
var heartButtons = document.querySelectorAll('.heart-btn');
for (var i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener('click', function () {
    heartCounting = heartCounting + 1; // always increase
    updateDisplays();
  });
}


// copy buttons functionality
var copyButtons = document.querySelectorAll('.copy-btn');
for (var c = 0; c < copyButtons.length; c++) {
  copyButtons[c].addEventListener('click', function () {
    // find the num within this card
    var card = this.parentElement.parentElement;
    var numberElements = card.querySelector('.number');
    if (!numberElements) return;
    var numberText = numberElements.innerText;

    // trying the navigator clipboard 
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(numberText).then(function () {
        alert('Copied: ' + numberText);
      }, function () {
        alert('Copied (fallback): ' + numberText);
      });
    } else {
      // fallback
      var tata = document.createElement('textarea');
      tata.value = numberText;
      document.body.appendChild(tata);
      tata.select();
      try {
        document.execCommand('copy');
        alert('Copied: ' + numberText);
      } catch (e) {
        alert('Cannot copy on this browser');
      }
      document.body.removeChild(tata);
    }

    copyCounting = copyCounting + 1;
    updateDisplays();
  });
}

// call buttons functionality
var callButtons = document.querySelectorAll('.call-btn');
for (var e = 0; e < callButtons.length; e++) {
  callButtons[e].addEventListener('click', function () {
    var card = this.parentElement.parentElement;
    var titleElements = card.querySelector('.card-title');
    var numberElements = card.querySelector('.number');
    if (!titleElements || !numberElements) return;

    var name = titleElements.innerText;
    var numberText = numberElements.innerText;

    if (coinCounting < 20) {
      alert('You do not have enough coins.You need  20 coins to call.');
      return;
    }

    // decrease coin amount
    coinCounting = coinCounting - 20;
    updateDisplays();

    alert('Calling ' + name +' ' + numberText + '...');

    // add history item to top
    var li = document.createElement('li');
    li.className = 'history-item';
    var time = new Date().toLocaleTimeString();
    li.innerText = name + " " + time + "\n" +  numberText ;
    // add at top
    if (historyList.firstChild) {
      historyList.insertBefore(li, historyList.firstChild);
    } else {
      historyList.appendChild(li);
    }
  });
}

// clear all history
 historyButtonClear.addEventListener('click', function () {
  if (historyList) {
    historyList.innerHTML = '';
  }
});

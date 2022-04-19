const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  let minVal = chronometer.getMinutes();
  let secVal = chronometer.getSeconds();
  let millVal = chronometer.getMillSeconds();

  console.log(minVal);
  let mindecVal1 = minVal.slice(0,1);
  let minuniVal2 = minVal.slice(1,2);
  let secdecVal1 = secVal.slice(0,1);
  let secuniVal2 = secVal.slice(1,2);
  let milldecVal1 = millVal.slice(0,1);
  let milluniVal2 = millVal.slice(1,2);

  console.log(minVal + secVal);

  minDecElement.innerHTML = mindecVal1;
  minUniElement.innerHTML = minuniVal2;
  secDecElement.innerHTML = secdecVal1;
  secUniElement.innerHTML = secuniVal2;
  milDecElement.innerHTML = milldecVal1;
  milUniElement.innerHTML = milluniVal2;
}

function printMinutes() {
  // ... your code goes here
  let minVal = chronometer.getMinutes();
  let mindecVal1 = minVal.toFixed(2).slice(0,1);
  let minuniVal2 = minVal.toFixed(2).slice(1,2);
  minDecElement.innerHTML = mindecVal1;
  minUniElement.innerHTML = minuniVal2;
}

function printSeconds() {
  // ... your code goes here
  
  let secVal = chronometer.getSeconds();
  
  let secdecVal1 = secVal.toFixed(2).slice(0,1);
  let secuniVal2 = secVal.toFixed(2).slice(1,2);
  
  secDecElement.innerHTML = secdecVal1;
  secUniElement.innerHTML = secuniVal2;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  
  let millsecVal = chronometer.getMillSeconds();
  let millsecVal1 = millsecVal.toFixed(2).slice(0,1);
  let millsecVal2 = millsecVal.toFixed(2).slice(1,2);
  
  milDecElement.innerHTML = millsecVal1;
  milUniElement.innerHTML = millsecVal2;
}

function printSplit() {
  // ... your code goes here
  splitTag = document.createElement('ol');
  splitValue = chronometer.split();

  btnRightElement.onclick = function() {
    liTag = document.createElement('li');
    liTag.innerText = splitValue;
    splitTag.appendChild(liTag);
  }
}

function clearSplits() {
  // ... your code goes here
  let theSplitTag = document.getElementsByTagName('ol')[0];
  parent.removechild(theSplitTag);
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.innerText === 'START') {
    chronometer.start();
    let varintervalId;
    varintervalId = setInterval(() => {
      printTime()
      },1000/6);
    
    btnLeftElement.innerText = 'STOP';
  }
  else {
    chronometer.stop();
    btnLeftElement.innerText = 'START'
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerText === 'SPLIT') {
   printSplit();
   btnRightElement.innerText = 'RESET';
  }
  else {
    chronometer.reset();
    btnRightElement.innerText = 'SPLIT';
  }
});

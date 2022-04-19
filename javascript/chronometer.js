class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    
      this.intervalId = setInterval(() => {
      this.currentTime++;
      },1000);
    
  }

  getMinutes() {
    // ... your code goes here
    console.log(Math.floor(this.currentTime / 60));
    let minutesFormatNumber = ('0'+Math.floor(this.currentTime / 60)).slice(-2);
    return minutesFormatNumber;
    
  }

  getSeconds() {
    // ... your code goes here
    console.log(Math.floor(this.currentTime % 60));
    let secondsFormatNumber = ('0'+ Math.floor(this.currentTime % 60)).slice(-2);
    return secondsFormatNumber;
  }
  
  getMillSeconds() {
    let millsecondsFormatNumber = ('0'+Math.floor((this.currentTime %60)%60)).slice(-2);
    return millsecondsFormatNumber;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let varformatNumber = '';
    if (value === 0) {
      varformatNumber = '00';
    }
    else if (value < 10) {
      varformatNumber = '0'+value.toString();
    }
    else {
      varformatNumber = value.toString();
    }
    return varformatNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let vartimeValue, varminuteValue, varsecondValue;
    varminuteValue = this.computeTwoDigitNumber(this.getMinutes());
    varsecondValue= this.computeTwoDigitNumber(this.getSeconds());
    vartimeValue = `${varminuteValue}:${varsecondValue}`;
    return vartimeValue;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

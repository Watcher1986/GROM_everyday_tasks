'use strict';

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    // console.log(this);
    this.timerId = setInterval(() => {
      // console.log(this);
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
    // setInterval(function () => {
    //   console.log(this);
    //   this.secondsPassed += 1;
    // }.bind(this), 1000);
    // fix context with bind
    // const callbackFunc = function () {
    //   console.log(this);
    //   this.secondsPassed += 1;
    // }
    // const bindedCallBackFunc = callbackFunc.bind(this);
    // setInterval(bindedCallBackFunc, 1000);
  },
  stopTimer() {
    clearInterval(this.timerId);
  },
  getTime() {
    return `${this.minsPassed}:${String(this.secondsPassed).padStart(2, '0')}`;
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
    this.timerId = null;
  },
};

// context
// 1. know when context is lost (2-3 cases)
// 2. fix context

// test data

timer.startTimer();

// lose context case #1
// const startTimeFunc = timer.startTimer;
// startTimeFunc();

// set interval example
// setInterval(() => {
//   console.log('monday');
// }, 2000);

// loose context case #2
// [1, 2, 3].filter(function () {
//   console.log('filter this :' + this);
// });

// const obj = {
//   testNum: 5,
//   testFunc: () => {
//     console.log(this);
//   }
// }

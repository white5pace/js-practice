'use strict';

function htmlOut(hOne, pOne, output, link) {
  document.getElementById('hOne').innerHTML = hOne;
  if (link) {
    document.getElementById('linkTo').href = link;
    document.getElementById('linkTo').style.display = 'block';
  } else {
    document.getElementById('linkTo').style.display = 'none';
  }
  document.getElementById('Output').innerHTML = 'Выходящее значение: ' + output;
  const codeOut = document.getElementById('pOne');

  if (pOne) {
    codeOut.style.display = 'block';
    document.getElementsByClassName('pOne__desc')[0].style.display = 'block';
    codeOut.innerHTML = pOne;
    Prism.highlightElement(codeOut);
  } else {
    document.getElementById('pOne__desc').style.display = 'none';
    codeOut.style.display = 'none';
  }
};

// 9.1.1 Перепишите класс

function exOne() {
  class Clock {
    constructor({template}) {
      this.template = template;
    }
    render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);

      console.log(output);
    }
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
    stop() {
      clearInterval(this.timer);
    }
  }

  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  setTimeout(() => clock.stop(), 5e3);

  htmlOut( 'Перепишите класс',
      exOne.toString(),
      1,
      'https://learn.javascript.ru/task/rewrite-to-class'
  );
}
exOne();

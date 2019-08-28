/* eslint-disable max-len */
'use strict';

// Документ

function htmlOut(exCode, pOne, execution) {
  exCode.previousElementSibling.onclick = function() {
    this.style.display = 'none';
    exCode.style.display = 'block';
    exCode.innerHTML = pOne;
    exCode.parentElement.style.justifyContent = 'start';
    Prism.highlightElement(exCode);
    execution();
  };
};

// 1.3.1 Дочерние элементы в DOM

function exOne() {
  let ex = document.getElementById('1.3.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    exBody.firstElementChild.style.background = 'red'; // Получили элемент div
    exBody.lastElementChild.style.background = 'green'; // Получили элемент ul
    exBody.lastElementChild.children[1].style.background = 'yellow'; // Получили второй li
    console.log(exBody.children);
  }

  htmlOut(exCode,
      exOne.toString(),
      execution);
}
exOne();

// 1.3.3 Выделите ячейки по диагонали

function exTwo() {
  let ex = document.getElementById('1.3.3');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let table = exBody.children[0];
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[i].style.background = 'red';
    }
  }

  htmlOut(exCode,
      exTwo.toString(),
      execution);
}
exTwo();

// 1.4 Поиск элементов

function exThree() {
  let ex = document.getElementById('1.4');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let table = exBody.querySelector('#age-table');
    let label = table.getElementsByTagName('label');
    let firstTd = table.getElementsByTagName('td')[0];
    let searchForm = document.getElementsByName('search')[0];
    let searchInputs = searchForm.querySelectorAll('input');
    console.log(table);
    console.log(label);
    console.log(firstTd);
    console.log(searchForm);
    console.log(searchInputs[0]);
    console.log(searchInputs[1]);
  }
  htmlOut(exCode,
      exThree.toString(),
      execution);
}
exThree();

// 1.5 Считаем потомков

function exFour() {
  let ex = document.getElementById('1.5');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    for (let li of exBody.querySelectorAll('li')) {
      console.log(li.firstChild.data.trim() + ': ' + li.getElementsByTagName('li').length);
    }
  }
  htmlOut(exCode,
      exFour.toString(),
      execution);
}
exFour();

// 1.6.1 Получите атрибут

function exFive() {
  let ex = document.getElementById('1.6.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let atr = exBody.querySelector('[data-widget-name]');
    console.log(atr.dataset.widgetName);
  }

  htmlOut(exCode,
      exFive.toString(),
      execution);
}
exFive();

// 1.6.2 Сделайте внешние ссылки оранжевыми

function exSix() {
  let ex = document.getElementById('1.6.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let links = exBody.querySelector('ul').querySelectorAll('a');

  function execution() {
    for (let link of links) {
      let address = link.getAttribute('href');
      let external = false;
      for (let i = 0; i < address.length; i++) {
        if (address[i] == ':') {
          external = true;
        }
      }
      if (external && address.slice(0, 19) != 'http://internal.com') {
        link.style.color = 'orange';
      }
    }
  }

  htmlOut(exCode,
      exSix.toString(),
      execution);
}
exSix();

// 1.7.2 Сделайте внешние ссылки оранжевыми

function exEight() {
  let ex = document.getElementById('1.7.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let elem = exBody.querySelector('#elem');
    function clear(elem) {
      while (elem.firstChild) {
        elem.firstChild.remove();
      }
    }
    clear(elem);
  }

  htmlOut(exCode,
      exEight.toString(),
      execution);
}
exEight();

// 1.7.4 Создайте список

function exNine() {
  let ex = document.getElementById('1.7.4');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let ul = document.createElement('ul');
  exBody.append(ul);

  function execution() {
    let list = exBody.querySelector('ul');

    while (true) {
      let addLi = prompt('What is new li', '');

      if (addLi == null || addLi == '') break;

      let newLi = document.createElement('li');
      newLi.textContent = addLi;
      list.append(newLi);
    }
  }

  htmlOut(exCode,
      exNine.toString(),
      execution);
}
exNine();

// 1.7.5 Создайте дерево из объекта

function exTen() {
  let ex = document.getElementById('1.7.5');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let data = {
    'Рыбы': {
      'форель': {},
      'лосось': {},
    },

    'Деревья': {
      'Огромные': {
        'секвойя': {},
        'дуб': {},
      },
      'Цветковые': {
        'яблоня': {},
        'магнолия': {},
      },
    },
  };

  function execution() {
    console.log('i am fucked up ');
  }
  htmlOut(exCode,
      exTen.toString(),
      execution);
}
exTen();

// 1.7.6 Выведите список потомков в дереве

function exEleven() {
  let ex = document.getElementById('1.7.6');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    for (let li of exBody.querySelectorAll('li')) {
      let length = li.querySelectorAll('li').length;
      if (length > 0) {
        li.firstChild.data += `[${length}]`;
      }
    }
  }

  htmlOut(exCode,
      exEleven.toString(),
      execution);
}
exEleven();

// 1.7.7 Создайте календарь в виде таблицы

function exTwelve() {
  let ex = document.getElementById('1.7.7');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function createCalendar(elem, year, month) {
    let date = new Date(year, month, 0);
    let numberOfDays = date.getDate();
    date.setDate(date.getDate() - (numberOfDays - 1));

    function monthBeginsWith() {
      if (date.getDay() == 0) {
        return 7;
      }
      return date.getDay();
    }

    function calculateRowsAmount() {
      if ( (( monthBeginsWith() - 1) + numberOfDays) > 35 ) return 7;
      return 6;
    }

    let table = document.createElement('table');
    elem.append(table);

    for (let i = 0; i < calculateRowsAmount(); i++) {
      let tr = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
        let td = document.createElement('td');
        tr.append(td);
      }
      table.append(tr);
    }

    let weekDays = new Map([
      [1, 'пн'],
      [2, 'вт'],
      [3, 'ср'],
      [4, 'чт'],
      [5, 'пт'],
      [6, 'сб'],
      [7, 'вс'],
    ]);

    for (let i = 0; i < 7; i++) {
      table.rows[0].cells[i].innerHTML = weekDays.get(i+1);
    }

    table.rows[0].style.backgroundColor = '#E6E6E6';
    table.rows[0].style.fontWeight = 'bold';

    let day = 1;
    let firstWeek = true;

    for (let iRows = 1; iRows < calculateRowsAmount(); iRows++) {
      table.rows[iRows].style.backgroundColor = '#ffffff';
      for (let iCells = 0; iCells < 7; iCells++) {
        if (iCells < monthBeginsWith() - 1 && firstWeek) {
          continue;
        }
        firstWeek = false;
        if (day > numberOfDays) {
          break;
        }
        table.rows[iRows].cells[iCells].innerHTML = day;
        day++;
      }
    }
  };
  function execution() {
    createCalendar(exBody, 2019, 9);
  }
  htmlOut(exCode,
      exTwelve.toString(),
      execution);
}
exTwelve();

// 1.7.8 Создайте календарь в виде таблицы

function exThirteen() {
  let ex = document.getElementById('1.7.8');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let htmlHour = exBody.querySelector('.hours');
  let htmlMinutes = exBody.querySelector('.minutes');
  let htmlSeconds = exBody.querySelector('.seconds');

  let cachedHours;
  let cachedMinutes;

  function clockHmtl() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    function ifOneNumber(time) {
      if (time < 10) return `0${time}`;
      return time;
    }

    if (cachedHours != hours) {
      htmlHour.innerHTML = ifOneNumber(hours);
      cachedHours = ifOneNumber(hours);
    }
    if (cachedMinutes != minutes) {
      htmlMinutes.innerHTML = ifOneNumber(minutes);
      cachedMinutes = ifOneNumber(minutes);
    }
    htmlSeconds.innerHTML = ifOneNumber(seconds);
  }

  function execution() {
    clockHmtl();
    setInterval(() => clockHmtl(), 1000);
  }

  htmlOut(exCode,
      exThirteen.toString(),
      execution);
}
exThirteen();

// 1.7.9 Вставьте HTML в список

function exFourteen() {
  let ex = document.getElementById('1.7.9');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let one = exBody.querySelector('#one');

  // let liTwo = document.createElement('li');
  // liTwo.innerHTML = '2';

  // let liThree = document.createElement('li');
  // liThree.innerHTML = '3';

  // one.after(liTwo);
  // liTwo.after(liThree);
  function execution() {
    one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
  }

  htmlOut(exCode,
      exFourteen.toString(),
      execution);
}
exFourteen();

// 1.7.10 Сортировка таблицы

function exFiveteen() {
  let ex = document.getElementById('1.7.10');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let table = exBody.querySelector('table');
  let tableLength = table.children[0].children.length;
  let allTr = table.querySelectorAll('tr');
  let names = [];

  function execution() {
    for (let i = 1; i < tableLength; i++) {
      names.push(allTr[i].children[0].innerHTML);
    }
    names.sort();

    for (let i = 0; i < tableLength - 1; i++ ) {
      let coincide = 0;
      for (let j = 1; j < tableLength; j++) {
        if (allTr[j].children[0].innerHTML == names[i]) {
          coincide = allTr[j];
        }
      }
      allTr[i].after(coincide);
    }
  }
  htmlOut(exCode,
      exFiveteen.toString(),
      execution);
}
exFiveteen();

// 1.8.1 Сортировка таблицы

function exSixteen() {
  let ex = document.getElementById('1.8.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let div = document.createElement('div');
  function showNotification(options) {
    div.style.cssText = `
      ${options};
      position: absolute;
      height: 50px;
      width: 150px;
      text-align: center;
      line-height: 50px;
      background-color: black;
      color: #fff;
    `;

    div.style.top = options.top + 'px';
    div.style.right = options.right + 'px';

    div.innerHTML = options.html;
    div.className = options.className;
    exBody.append(div);
  }

  function execution() {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello!',
      className: 'welcome',
    });

    setInterval(() => {
      if (div.style.display === 'none') {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    }, 1000);
  }

  htmlOut(exCode,
      exSixteen.toString(),
      execution);
}
exSixteen();

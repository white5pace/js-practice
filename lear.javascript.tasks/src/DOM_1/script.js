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
    table.className = 'my-table';
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

// 1.8.1 Создать уведомление

function exSixteen() {
  let ex = document.getElementById('1.8.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let div = document.createElement('div');
  function showNotification(options) {
    div.style.cssText = `
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

// 1.9.1 Найти размер прокрутки снизу

function exSeventeen() {
  let ex = document.getElementById('1.9.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let elem = exBody.querySelector('.elem');
  let valueOut = exBody.querySelector('.scroll-value').children[1];

  function scrollBottom(elem) {
    let value = 0;
    value = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
    return Math.round(value);
  }

  function execution() {
    valueOut.innerHTML = scrollBottom(elem);
  }

  htmlOut(exCode,
      exSeventeen.toString(),
      execution);
}
exSeventeen();

// 1.9.2 Узнать ширину полосы прокрутки

function exEighteen() {
  let ex = document.getElementById('1.9.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');
  let outputValues = exBody.querySelector('.output-values');

  let html = document.querySelector('html');
  // <html> === document.documentElement
  function execution() {
    outputValues.innerHTML = `Width of scrollbar 
      ${window.innerWidth - html.clientWidth}`;
  }
  htmlOut(exCode,
      exEighteen.toString(),
      execution);
}
exEighteen();

// 1.9.3 Поместите мяч в центр поля

function exNineteen() {
  let ex = document.getElementById('1.9.3');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let field = exBody.querySelector('.field');
  let ball = exBody.querySelector('.ball');

  function execution() {
    ball.style.left = field.clientWidth / 2 - ball.clientWidth / 2 + 'px';
    ball.style.top = field.clientHeight / 2 - ball.clientHeight / 2 + 'px';
  }

  htmlOut(exCode,
      exNineteen.toString(),
      execution);
}
exNineteen();

// 1.11.1 Найдите координаты точек относительно окна браузера

function exTwenty() {
  let ex = document.getElementById('1.11.1');
  let exCode = ex.querySelector('.ex-code');

  function execution() {
    let iframe = document.querySelector('.iframe-one-eleven-one');
    let iframeDoc = iframe.contentWindow.document;

    let exBody = iframeDoc.querySelector('.one-eleven-one');
    let coords = exBody.querySelector('.coords');

    exBody.onclick = function(e) {
      coords.innerHTML = e.clientX + ':' + e.clientY;
    };

    alert(searchPoints(exBody));
  }

  function searchPoints(exBody) {
    let field = exBody.querySelector('.field');
    let fieldStyles = getComputedStyle(field);
    let fieldPosition = field.getBoundingClientRect();

    function getBorderSize(border) {
      return parseInt(border.split(' ')[0]);
    }

    let getPoints = {
      leftInner() {
        let x = fieldPosition.x + getBorderSize(fieldStyles.borderTop);
        let y = fieldPosition.y + getBorderSize(fieldStyles.borderLeft);
        return `Координаты левой внутренней точки x: ${Math.round(x)}, y: ${Math.round(y)}`;
      },
      rightInner() {
        let x = fieldPosition.bottom - getBorderSize(fieldStyles.borderRight);
        let y = fieldPosition.right - getBorderSize(fieldStyles.borderBottom);
        return `Координаты правой внутренней точки x: ${Math.round(x)}, y: ${Math.round(y)}`;
      },
      leftOuter() {
        let x = fieldPosition.x;
        let y = fieldPosition.y;
        return `Координаты левой внешней точки x: ${Math.round(x)}, y: ${Math.round(y)}`;
      },
      rightOuter() {
        let x = fieldPosition.bottom;
        let y = fieldPosition.right;
        return `Координаты правой внешней точки x: ${Math.round(x)}, y: ${Math.round(y)}`;
      },
    };
    return `${getPoints.leftOuter()},
    ${getPoints.leftInner()},
    ${getPoints.rightInner()},
    ${getPoints.rightOuter()}`;
  }

  htmlOut(exCode,
      exTwenty.toString(),
      execution);
}
exTwenty();

// 1.11.2 Покажите заметку рядом с элементом

function exTwentyOne() {
  let ex = document.getElementById('1.11.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();
    let elemStyles = getComputedStyle(elem);

    if (position == 'top') {
      elem.style.top = anchorCoords.y - parseInt(elemStyles.height) + 'px';
      elem.style.left = anchorCoords.x + anchorCoords.width / 2 - parseInt(elemStyles.width) / 2 + 'px';
    }

    if (position == 'right') {
      elem.style.top = anchorCoords.bottom - parseInt(elemStyles.height) / 2 - anchorCoords.height / 2 + 'px';
      elem.style.left = anchorCoords.right + 'px';
    }

    if (position == 'left') {
      elem.style.top = anchorCoords.bottom - parseInt(elemStyles.height) / 2 - anchorCoords.height / 2 + 'px';
      elem.style.left = anchorCoords.x - parseInt(elemStyles.width) + 'px';
    }

    if (position == 'bottom') {
      elem.style.top = anchorCoords.bottom + 'px';
      elem.style.left = anchorCoords.right - parseInt(elemStyles.width) / 2 - anchorCoords.width / 2 + 'px';
    }
  }

  function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = html;
    exBody.append(note);

    positionAt(anchor, position, note);
  }

  function execution() {
    let hideButton = exBody.querySelector('.hide-note');
    hideButton.style.display = 'block';
    hideButton.onclick = function() {
      let allNote = exBody.querySelectorAll('.note');
      for (let note of allNote) {
        note.style.display = 'none';
      }
    };

    let blockquote = exBody.querySelector('blockquote');

    showNote(blockquote, 'top', 'note above');
    showNote(blockquote, 'right', 'note at the right');
    showNote(blockquote, 'bottom', 'note below');
    showNote(blockquote, 'left', 'note at the left');
  }

  htmlOut(exCode,
      exTwentyOne.toString(),
      execution);
}
exTwentyOne();

// 1.11.3 Покажите заметку около элемента (абсолютное позиционирование)

function exTwentyTwo() {
  let ex = document.getElementById('1.11.3');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();
    let elemStyles = getComputedStyle(elem);

    if (position == 'top') {
      elem.style.top = anchorCoords.y + document.documentElement.scrollTop - parseInt(elemStyles.height) + 'px';
      elem.style.left = anchorCoords.x + anchorCoords.width / 2 - parseInt(elemStyles.width) / 2 + 'px';
    }

    if (position == 'right') {
      elem.style.top = anchorCoords.bottom + document.documentElement.scrollTop - parseInt(elemStyles.height) / 2 - anchorCoords.height / 2 + 'px';
      elem.style.left = anchorCoords.right + 'px';
    }

    if (position == 'left') {
      elem.style.top = anchorCoords.bottom + document.documentElement.scrollTop - parseInt(elemStyles.height) / 2 - anchorCoords.height / 2 + 'px';
      elem.style.left = anchorCoords.x - parseInt(elemStyles.width) + 'px';
    }

    if (position == 'bottom') {
      elem.style.top = anchorCoords.bottom + document.documentElement.scrollTop + 'px';
      elem.style.left = anchorCoords.right - parseInt(elemStyles.width) / 2 - anchorCoords.width / 2 + 'px';
    }
  }

  function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = html;
    exBody.append(note);

    positionAt(anchor, position, note);
  }

  function execution() {
    let blockquote = exBody.querySelector('blockquote');

    showNote(blockquote, 'top', 'note above');
    showNote(blockquote, 'right', 'note at the right');
    showNote(blockquote, 'bottom', 'note below');
    showNote(blockquote, 'left', 'note at the left');
  }

  htmlOut(exCode,
      exTwentyTwo.toString(),
      execution);
}
exTwentyTwo();

// 1.11.4 Расположите заметку внутри элемента (абсолютное позиционирование)

function exTwentyThree() {
  let ex = document.getElementById('1.11.4');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();
    let elemStyles = getComputedStyle(elem);

    if (position == 'top-in') {
      elem.style.top = anchorCoords.y + document.documentElement.scrollTop + 'px';
      elem.style.left = anchorCoords.x + anchorCoords.width / 2 - parseInt(elemStyles.width) / 2 + 'px';
    }

    if (position == 'right-in') {
      elem.style.top = anchorCoords.bottom + document.documentElement.scrollTop - parseInt(elemStyles.height) / 2 - anchorCoords.height / 2 + 'px';
      elem.style.left = anchorCoords.right - parseInt(elemStyles.width) + 'px';
    }

    if (position == 'left-in') {
      elem.style.top = anchorCoords.bottom + document.documentElement.scrollTop - parseInt(elemStyles.height) / 2 - anchorCoords.height / 2 + 'px';
      elem.style.left = anchorCoords.x + 'px';
    }

    if (position == 'bottom-in') {
      elem.style.top = anchorCoords.bottom - parseInt(elemStyles.height) + document.documentElement.scrollTop + 'px';
      elem.style.left = anchorCoords.right - parseInt(elemStyles.width) / 2 - anchorCoords.width / 2 + 'px';
    }

    if (position == 'top-out') {
      elem.style.top = anchorCoords.y + document.documentElement.scrollTop - parseInt(elemStyles.height) + 'px';
      elem.style.left = anchorCoords.x + anchorCoords.width / 2 - parseInt(elemStyles.width) / 2 + 'px';
    }

    if (position == 'right-out') {
      elem.style.top = anchorCoords.bottom + document.documentElement.scrollTop - parseInt(elemStyles.height) / 2 - anchorCoords.height / 2 + 'px';
      elem.style.left = anchorCoords.right + 'px';
    }

    if (position == 'left-out') {
      elem.style.top = anchorCoords.bottom + document.documentElement.scrollTop - parseInt(elemStyles.height) / 2 - anchorCoords.height / 2 + 'px';
      elem.style.left = anchorCoords.x - parseInt(elemStyles.width) + 'px';
    }

    if (position == 'bottom-out') {
      elem.style.top = anchorCoords.bottom + document.documentElement.scrollTop + 'px';
      elem.style.left = anchorCoords.right - parseInt(elemStyles.width) / 2 - anchorCoords.width / 2 + 'px';
    }
  }

  function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = html;
    exBody.append(note);

    positionAt(anchor, position, note);
  }

  function execution() {
    let blockquote = exBody.querySelector('blockquote');

    showNote(blockquote, 'top-in', 'note top-in');
    showNote(blockquote, 'right-in', 'note right-in');
    showNote(blockquote, 'bottom-in', 'note bottom-in');
    showNote(blockquote, 'left-in', 'note left-in');
    showNote(blockquote, 'top-out', 'note top-out');
    showNote(blockquote, 'right-out', 'note right-out');
    showNote(blockquote, 'bottom-out', 'note bottom-out');
    showNote(blockquote, 'left-out', 'note left-out');
  }

  htmlOut(exCode,
      exTwentyThree.toString(),
      execution);
}
exTwentyThree();

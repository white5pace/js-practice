'use strict';

// Введение в события

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

// 3.1.1 Скрыть элемент по нажатию кнопки

function exOne() {
  let ex = document.getElementById('3.1.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let ul = exBody.querySelector('.ul');

  ul.onmousedown = () => false;

  ul.addEventListener('click', function(e) {
    if (e.target.tagName != 'LI') return;

    if (e.ctrlKey || e.metaKey) {
      toggleSelect(e.target);
    } else {
      singleSelect(e.target);
    }
  });

  function toggleSelect(target) {
    target.classList.toggle('selected');
  }

  function singleSelect(target) {
    let selected = ul.querySelectorAll('.selected');
    for (let elem of selected) {
      elem.classList.remove('selected');
    }
    target.classList.add('selected');
  }

  function execution() {}
  htmlOut(exCode,
      exOne.toString(),
      execution);
}
exOne();

// 3.2.1 Улучшенная подсказка

function exTwo() {
  let ex = document.getElementById('3.2.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let tooltip;
  exBody.onmouseover = function(e) {
    let target = e.target.closest('[data-tooltip]');

    if (!target) return;

    showTooltip(target);
  };

  exBody.onmouseout = function(e) {
    if (tooltip) {
      tooltip.remove();
      tooltip = false;
    }
  };
  function showTooltip(target) {
    tooltip = document.createElement('div');
    tooltip.className = 'my-tooltip';
    tooltip.innerHTML = target.dataset.tooltip;
    exBody.append(tooltip);

    let coords = target.getBoundingClientRect();

    tooltip.style.top = coords.y - tooltip.offsetHeight + 'px';
    tooltip.style.left = coords.x + coords.width / 2
      - tooltip.offsetWidth / 2 + 'px';

    if (coords.y < tooltip.offsetHeight) {
      tooltip.style.top = coords.bottom + 'px';
    }
  }
  function execution() {}
  htmlOut(exCode,
      exTwo.toString(),
      execution);
}
exTwo();

// 3.2.2 "Умная" подсказка

function exThree() {
  let ex = document.getElementById('3.2.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');
  class HoverIntent {
    constructor({
      sensitivity = 0.1,
      interval = 100,
      elem,
      over,
      out,
    }) {
      this.sensitivity = sensitivity;
      this.interval = interval;
      this.elem = elem;
      this.over = over;
      this.out = out;
      this.variable = 0;

      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);

      elem.addEventListener('mouseover', this.onMouseOver);
      elem.addEventListener('mouseout', this.onMouseOut);
    }

    onMouseOver(event) {
    }

    onMouseOut(event) {
    }

    onMouseMove(event) {
    }


    destroy() {
    }
  }
  let elem = exBody.querySelector('.clock');
  let tooltip = exBody.querySelector('.my-tooltip');
  new HoverIntent({
    elem,
    over() {
      tooltip.hidden = false;
    },
    out() {
      tooltip.hidden = true;
    },
  });

  function execution() {}
  htmlOut(exCode,
      exThree.toString(),
      execution);
}
exThree();

// 3.3.1 Слайдер

function exFour() {
  let ex = document.getElementById('3.3.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let thumb = exBody.querySelector('.thumb');
  let slider = exBody.querySelector('.slider');
  let sliderMetrics = slider.getBoundingClientRect();

  thumb.onmousedown = function(event) {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    function onMouseMove(event) {
      let innerCoords = event.clientX - shiftX -
        slider.getBoundingClientRect().left;

      if (innerCoords < 0) {
        innerCoords = 0;
      }
      let rightEdge = slider.offsetWidth - thumb.offsetWidth;
      if (innerCoords > rightEdge) {
        innerCoords = rightEdge;
      }

      thumb.style.left = innerCoords + 'px';
    }

    exBody.addEventListener('mousemove', onMouseMove);
    exBody.addEventListener('mouseup', onMouseUp);

    function onMouseUp() {
      exBody.removeEventListener('mousemove', onMouseMove);
      exBody.removeEventListener('mouseup', onMouseUp);
    };

    thumb.ondragstart = function() {
      return false;
    };
  };


  function execution() {}
  htmlOut(exCode,
      exFour.toString(),
      execution);
}
exFour();

// 3.3.2 Расставить супергероев по полю

function exFive() {
  let ex = document.getElementById('3.3.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  document.documentElement.onmousedown = function(event) {
    let target = event.target;

    if (!target.classList.contains('draggable')) return;
    event.preventDefault();

    let shiftX = event.clientX - target.getBoundingClientRect().left;
    let shiftY = event.clientY - target.getBoundingClientRect().top;
    let shiftRightX = target.getBoundingClientRect().right - event.clientX;
    let shiftBottom = target.getBoundingClientRect().bottom - event.clientY;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      event.target.style.position = 'absolute';
      event.target.style.top = pageY - shiftY + 'px';
      event.target.style.left = pageX - shiftX + 'px';
    }

    function onMouseMove(event) {
      let scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
      );

      let pageX = event.pageX;
      let pageY = event.pageY;

      // left border
      if (pageX - shiftX < 0) {
        pageX = 0 + shiftX;
      }

      // right border
      if (pageX + shiftRightX > document.documentElement.clientWidth) {
        pageX = document.documentElement.clientWidth - shiftRightX;
      }

      // top border
      if (pageY - shiftY < window.pageYOffset) {
        pageY = window.pageYOffset + shiftY;
        window.scrollBy(0, -10);
      }

      let scroledHeight = window.pageYOffset
          + document.documentElement.clientHeight;

      // bottom border
      if (pageY + shiftBottom > scroledHeight) {
        pageY = scroledHeight - shiftBottom;
        window.scrollBy(0, 10);
      }
      moveAt(pageX, pageY);
    }

    document.documentElement.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseup', onMouseUp);

    function onMouseUp() {
      document.documentElement.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseup', onMouseUp);
    };
  };

  function execution() {}
  htmlOut(exCode,
      exFive.toString(),
      execution);
}
exFive();

// 3.4.1 Отследить одновременное нажатие

function exSix() {
  let ex = document.getElementById('3.4.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  // Решение намного длинее и сложнее, чем решение автора,
  // но у меня есть проверка на длину множества нажатых клавиш
  // итого, если нажаты неподходящие по условию клавиши -
  // вызов не сработает

  function runOnKeys(func, ...keys) {
    let setKeys = new Set();
    document.addEventListener('keydown', function(event) {
      setKeys.add(event.code);
      let checkSet = new Set();

      document.addEventListener('keyup', function() {
        for (let key of keys) {
          checkSet.add(setKeys.has(key));
        }
        if (!checkSet.has(false) && keys.length == setKeys.size) {
          func();
        }

        checkSet.clear();
        setKeys.clear();
      });
    });
  }
  runOnKeys(
      () => alert('Kus\' kus\''),
      'KeyQ',
      'KeyW'
  );

  function execution() {}
  htmlOut(exCode,
      exSix.toString(),
      execution);
}
exSix();

// 3.5.1 Бесконечная страница

function exSeven() {
  let ex = document.getElementById('3.5.1');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  let iframe = exBody.querySelector('.three-five-one_iframe');
  iframe.onload = function() {
    let iframeDoc = iframe.contentWindow.document;
    let frameBody = iframeDoc.querySelector('.three-five-one_body');

    let scroll = frameBody.querySelector('.scroll');

    function createTimeBlock() {
      let now = new Date();
      let newDivNow = document.createElement('div');
      newDivNow.innerHTML = now;
      newDivNow.className = 'time';
      return newDivNow;
    }

    while (frameBody.offsetHeight < 400) {
      scroll.append(createTimeBlock());
    }

    iframeDoc.addEventListener('scroll', function() {
      let scrollHeight = Math.max(
          iframeDoc.body.scrollHeight, iframeDoc.documentElement.scrollHeight,
          iframeDoc.body.offsetHeight, iframeDoc.documentElement.offsetHeight,
          iframeDoc.body.clientHeight, iframeDoc.documentElement.clientHeight
      );
      let scroledTop = iframeDoc.documentElement.scrollTop;
      let frameHeight = iframeDoc.documentElement.clientHeight;

      if (scroledTop + frameHeight + 100 > scrollHeight) {
        scroll.append(createTimeBlock());
      }
    });
  };


  function execution() {}
  htmlOut(exCode,
      exSeven.toString(),
      execution);
}
exSeven();

// 3.5.2 Кнопка вверх/вниз

function exEigth() {
  let ex = document.getElementById('3.5.2');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');
  let iframe = exBody.querySelector('.three-five-two_iframe');

  iframe.onload = function() {
    let iframeDoc = iframe.contentWindow.document;
    let frameBody = iframeDoc.querySelector('.three-five-two_body');
    let content = frameBody.querySelector('.content');

    let nowYear = (new Date()).getFullYear();
    for (let i = 0; i < nowYear; i++) {
      let number = document.createElement('span');
      number.innerHTML = i;
      content.append(number);
    }

    let buttonUp = document.createElement('div');
    buttonUp.className = 'buttonUp';

    buttonUp.addEventListener('click', function() {
      let timerId = setInterval(() => {
        iframeDoc.documentElement.scrollBy(0, -40);
        if (!iframeDoc.documentElement.scrollTop) {
          clearInterval(timerId);
          buttonUp.style.display = 'none';
        }
      }, 1);
    });

    iframeDoc.addEventListener('scroll', function() {
      let scroledTop = iframeDoc.documentElement.scrollTop;
      let frameHeight = iframeDoc.documentElement.clientHeight;
      if (scroledTop > 250) {
        buttonUp.style.display = 'block';
      }
    });

    content.append(buttonUp);
  };

  function execution() {}
  htmlOut(exCode,
      exEigth.toString(),
      execution);
}
exEigth();


// 3.5.3 Загрузка видимых изображений

function exNine() {
  let ex = document.getElementById('3.5.3');
  let exBody = ex.querySelector('.ex-body');
  let exCode = ex.querySelector('.ex-code');

  // this solution is shit

  // let imgs = document.querySelectorAll('img[data-src]');
  // let nextVisible = 0;

  // document.addEventListener('scroll', function() {
  //   isVisible();
  // });

  // function isVisible() {
  //   let currentScroll = window.pageYOffset + window.innerHeight;
  //   let preload = 1000;
  //   if (nextVisible == imgs.length) return;
  //   if (currentScroll + preload >= imgs[nextVisible].offsetTop) {
  //     showVisible();
  //   }
  // }

  // function showVisible() {
  //   imgs[nextVisible].src = imgs[nextVisible].dataset.src;
  //   if (nextVisible < imgs.length) {
  //     nextVisible++;
  //   }
  // }

  function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
  }

  function showVisible() {
    for (let img of exBody.querySelectorAll('img')) {
      let realSrc = img.dataset.src;
      if (!realSrc) continue;

      if (isVisible(img)) {
        img.src = realSrc;
        img.dataset.src = '';
      }
    }
  }

  showVisible();
  window.onscroll = showVisible;
  function execution() {}
  htmlOut(exCode,
      exNine.toString(),
      execution);
}
exNine();

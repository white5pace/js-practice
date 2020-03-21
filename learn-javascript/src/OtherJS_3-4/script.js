/* eslint-disable max-len */
'use strict';

window.onload = function() {
  let tasks = document.querySelectorAll('.task');
  for (let task of tasks) {
    let code = task.querySelector('.task__code code');
    let taskNumber = task.dataset.taskNumber;
    let perform = task.querySelector('.task__perform');

    code.innerHTML = eval(taskNumber).toString();
    Prism.highlightElement(code);
    perform.addEventListener('click', eval(taskNumber));
  }
};


function fourTwoOne() {
  let task = document.querySelector('#fourTwoOne');

  let form = document.createElement('form');
  form.style.cssText= `margin: -25px 0 50px 0;
    width: 15%;
    display: flex;
    flex-direction: column;
  `;

  let textarea = document.createElement('textarea');
  textarea.style.cssText= `
    height: 100px;
    margin-bottom: 10px;
  `;

  let clearButton = document.createElement('button');
  
  textarea.value = localStorage.getItem('fourTwoOne');
  textarea.addEventListener('input', function(e) {
    localStorage.setItem('fourTwoOne', e.path[0].value);
  });

  clearButton.innerText = 'clean';
  clearButton.addEventListener('click', function(e) {
    e.preventDefault();
    this.previousElementSibling.value = '';
    localStorage.removeItem('fourTwoOne');
  });

  form.append(textarea);
  form.append(clearButton);

  task.append(form);
}


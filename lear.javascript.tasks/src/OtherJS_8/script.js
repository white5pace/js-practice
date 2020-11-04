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


function eightFourTwo() {
 // Inited
}


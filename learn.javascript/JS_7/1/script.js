'use strict';

var outputs = [];
var writeTo = document.getElementById('outputvalue'); 
// Оператор typeof 

// 1. Полиморфная функция formatDate
function formatDate(date) { 
    var options = {day: '2-digit', month: '2-digit', year: '2-digit'};  

    function getClass(obj) {
        return {}.toString.call(obj).slice(8, -1);
    }
    function getDate(){
        if (getClass(date) == 'String') {
            return new Date(date);
        }else if(getClass(date) == 'Array'){
            return new Date(date[0], date[1], date[2]);
        }else if(getClass(date) == 'Number'){
            return new Date(date * 1000);
        }else{ 
            return date;
        }
    }
    return getDate(date).toLocaleString("ru", options);
 }
outputs.push(formatDate('2011-10-02')); // 02.10.11
outputs.push(formatDate(1234567890));
outputs.push(formatDate([2014, 0, 1]));
outputs.push(formatDate(new Date(2014, 0, 1)) );

outputs.forEach(function(item){
    writeTo.innerHTML += item + "<hr>";
});


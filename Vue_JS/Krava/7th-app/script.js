new Vue({
    el: '#app', 
    data: {
        counter: 0,
        title: 'Счётчик'
    },
    methods: {
        riseCounter(num, str, event) {
            this.counter += num;
            this.title = str;

            if (num === 5) {
                event.target.style.color = 'blue';
            }else if (num === 10) {
                event.target.style.color = 'red';
            }
        }
    }
}) 
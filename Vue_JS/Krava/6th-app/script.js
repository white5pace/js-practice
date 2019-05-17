new Vue({
    el: '#app', 
    data: {
        counter: 0,
        counter2: 0
    },
    methods: {
        riseCounter() {
            this.counter++;
        },
        onHover(event) {
            event.target.style.color = 'red';
        }
    }
}) 
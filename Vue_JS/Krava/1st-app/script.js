new Vue({
    el: '#app', 
    data: {
        name: 'Lord',
    },
    methods: {
        changeName(event) {
            this.name = event.target.value;
        }
    }
}) 
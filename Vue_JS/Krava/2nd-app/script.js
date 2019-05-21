new Vue({
    el: '#app', 
    data: {
        name: 'Lord',
        number: 100, 
        isOk: true,
        string: 'My name is Lord',
    },
    methods: {
        sayHello: function() {
            return 'I am function';
        }
    }
}) 
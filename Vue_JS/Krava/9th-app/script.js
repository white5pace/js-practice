new Vue({
    el: '#app', 
    data: {
        x: 0,
        y: 0,
    },
    methods: {
        handleMouseMove(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertValue(event) {
            alert(event.target.value);
        }
    }
}) 
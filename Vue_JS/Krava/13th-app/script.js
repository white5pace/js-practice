new Vue({
    el: '#app', 
    data: {
        color: 'blue',
        height: 100,
    }, 
    computed: {
        circleClasses: function() {
            return {
                'background': this.color, 
                'height': this.height + 'px'
            }
        }
    }
}) 
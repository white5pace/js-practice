new Vue({
    el: '#app', 
    data: {
        isActive: false,
        color: 'blue',
    }, 
    computed: {
        getCssClasses() {
            return {
                'red': this.isActive, 
                'green': !this.isActive
            }
        }
    }
}) 
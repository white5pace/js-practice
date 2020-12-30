const app = Vue.createApp({
    data() {
        return {
            output: '',
            confirmedOutput: ''
        }
    },
    methods: {
        showAlert() {
            alert('Glowing')
        },
        outputConfirm() {
            this.confirmedOutput = event.target.value
        },
        outputParagraph(event) {
            this.output = event.target.value
        }
    }
}).mount('#assignment')
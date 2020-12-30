const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      // e.preventDefault()
      alert('Submitted')
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    addCounter(num = 1) {
      this.counter = this.counter + num;
    },
    reduceCounter(num = 1) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');

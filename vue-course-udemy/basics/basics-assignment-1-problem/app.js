Vue.createApp({
  data() {
    return {
      myName: 'Roman',
      myAge: 24,
      imgLink: 'https://v3.vuejs.org/logo.png'

    };
  },
  methods: {
    randomNumber() {
      return Math.random().toFixed(1)
    }
  }
}).mount('#assignment')
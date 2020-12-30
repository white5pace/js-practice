Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet'
      } else if (this.number > 37) {
        return 'Too much!'
      } else {
        return this.number
      }
    }
  },
  watch: {
    result() {
      // let that = this;
      setTimeout(() => {this.number = 0} ,5000)
    }
  },
  methods: {
    addNumber(value) {
      this.number += value
    }
  },

}).mount('#assignment')
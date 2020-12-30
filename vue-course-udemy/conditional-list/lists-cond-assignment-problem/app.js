const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      tasks: [],
      listVisible: true
    }
  },
  computed: {
    buttonCaption() {
      return this.listVisible ? 'Hide list' : 'Show list'
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue)
      this.enteredValue = '';
    },
    changeListVisibility() {
      this.listVisible = !this.listVisible
    }
  }

})

app.mount('#assignment')
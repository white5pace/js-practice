const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      paragraphShowed: true,
      paragraphBackground: ''
    };
  },
  computed: {
    userClass() {
      if(this.userInput === 'user1') {
        return 'user1';
      } else if (this.userInput === 'user2') {
        return 'user2';
      }
    }
  },
  methods: {
    paragraphToggle() {
      this.paragraphShowed = !this.paragraphShowed;
    },
    setParagraphBackground(event) {
      this.paragraphBackground = event.target.value;
    }
  }
})

app.mount('#assignment')
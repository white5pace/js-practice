const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'ionel',
          name: 'Ionel Lorenz',
          phone: '+79998887766',
          email: 'ionel@gmail.com'
        },
        {
          id: 'yancka',
          name: 'Yancka Jones',
          phone: '+79997776644',
          email: 'yancka96@gmail.com'
        },
      ]
    }
  },

})

app.component('friend-contact', {
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show Details'}}</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'yancka',
        name: 'Yancka Jones',
        phone: '+79997776644',
        email: 'yancka96@gmail.com'
      },

    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
})

app.mount('#app')
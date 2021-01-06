<template>
  <div>
    <active-user
        :user-name="userName"
        :user-age="userAge"
    ></active-user>
    <user-data
        @change-name="changeName"
        @change-age="changeAge"
    ></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userAge: ''
    }
  },
  methods: {
    changeName(inputValue) {
      this.userName = inputValue
    },
    changeAge(inputValue) {
      this.userAge = inputValue
    }
  }
}
</script>

<style>
html {
  font-family: Roboto;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
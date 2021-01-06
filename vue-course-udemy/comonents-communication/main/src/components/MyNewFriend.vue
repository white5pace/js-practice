<template>
  <form id="createFriend">
    <label for="enterFriendName">Enter a name:</label>
    <input type="text" id="enterFriendName" v-model="friendName">
    <label for="enterFriendName">Enter a phone:</label>
    <input type="text" id="enterFriendPhone" v-model="friendPhone">
    <label for="enterFriendName">Enter email:</label>
    <input type="text" id="enterFriendEmail" v-model="friendEmail">
    <label for="favoriteCheck">Is favorite:</label>
    <input type="checkbox" id="favoriteCheck" v-model="friendFavorite">
    <button @click.prevent="createFriend">Create friend</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        friendName: '',
        friendEmail: '',
        friendPhone: '',
        friendFavorite: false,
      }
    },
    methods: {
      createFriend() {
        this.$emit(
            'create-friend',
            this.friendName,
            this.friendEmail,
            this.friendPhone,
            this.friendFavorite
        )
      }
    }
  }
</script>

<style>
 #createFriend {
   display: flex;
   flex-direction: column;
   margin: 1rem auto;
   padding: 1rem;
   width: 90%;
   max-width: 40rem;
 }
</style>
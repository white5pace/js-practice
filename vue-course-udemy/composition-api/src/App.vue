<template>
  <section class="container">
    <user-data
        :first-name="firstName"
        :last-name="lastName"
    >
    </user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
  import {
    ref,
    reactive,
    computed,
    toRefs,
    watch, provide,
  } from 'vue';
  import UserData from '@/components/UserData';

  export default {
    components: {UserData},
    setup() {
      // const userName = ref('Roman');
      // const age = ref(24);
      const firstName = ref('');
      const lastName = ref('');
      const lastNameInput = ref(null);

      // const user = reactive({
      //   name: 'Roman',
      //   age: 24,
      // });
      const user = toRefs(reactive({
        name: 'Roman',
        age: 24,
      }));

      provide('userAge', user.age);


      // setTimeout(function () {
      //   // userName.value = 'Roma';
      //   // age.value = 25;
      //
      //   user.name = 'Roma';
      //   user.age = 25;
      // }, 2000);

      const userName = computed(function () {
        return firstName.value + ' ' + lastName.value;
      });



      watch([user.age, userName], function (newValues, oldValues) {
        // console.log('Old age: ' + oldValue);
        // console.log('New age: ' + newValue);
        console.log('Old age: ' + oldValues[0]);
        console.log('New age: ' + newValues[0]);
        console.log('Old name: ' + oldValues[1]);
        console.log('New name: ' + newValues[1]);
      })

      function setNewAge() {
        user.age.value = 25;
        // age.value = 25;
      }

      function setFirstName(event) {
        firstName.value = event.target.value;
      }

      // function setLastName(event) {
      //   lastName.value = event.target.value;
      // }

      function setLastName() {
        lastName.value = lastNameInput.value.value;
      }

      return {
        // userName: user.value.name,
        // age: user.value.age,
        userAge: user.age,
        userName,
        firstName,
        lastName,
        lastNameInput,
        setNewAge,
        setFirstName,
        setLastName,
      };
    },
    // data() {
    //   return {
    //     userName: 'Maximilian',
    //   };
    // },
    // methods: {
    //   setNewAge() {
    //     this.age = 32;
    //   }
    // },
    // provide() {
    //   return {
    //     age: this.age,
    //   }
    // }
  };
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
    }

    body {
        margin: 0;
    }

    .container {
        margin: 3rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        text-align: center;
    }
</style>
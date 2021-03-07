<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalVisibility">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGaolVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
  import {
    // ref,
    // reactive,
  } from 'vue';

  export default {
    //   setup() {
    //     // const goal = ref('Money, Hoe, Benz');
    //     // const goalVisibility = ref(true);
    //
    //     // const goals = ref({
    //     //     goal: 'Money, Hoe, Benz',
    //     //     goalVisibility: true,
    //     // })
    //
    //     const goals = reactive({
    //       goal: 'Money, Hoe, Benz',
    //       goalVisibility: true,
    //     });
    //
    //     function toggleGaolVisibility() {
    //       // goalVisibility.value = !goalVisibility.value;
    //
    //       // goals.value.goalVisibility = !goals.value.goalVisibility;
    //
    //       goals.goalVisibility = !goals.goalVisibility;
    //     }
    //
    //     return {
    //       // goal,
    //       // goalVisibility,
    //       goals,
    //       toggleGaolVisibility,
    //     };
    //   },
    // };

    data() {
      return {
        goal: 'Money, Hoe, Benz',
        goalVisibility: true,
      }
    },
    methods: {
      toggleGaolVisibility() {
        this.goalVisibility = !this.goalVisibility;
      },
    }
  }
</script>

<style>
    html {
        font-family: sans-serif;
    }

    body {
        margin: 3rem;
        text-align: center;
    }
</style>
<template>
  <div class="test">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
  import {
    computed,
    inject,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted, onUnmounted,
    onUpdated,
  } from 'vue';

  export default {
    // inject: ['userAge'],
    props: ['firstName', 'lastName'],
    setup(props, context) {

      const userName = computed(function () {
        return props.firstName + ' ' + props.lastName
      })

      // context.emit('save-data', 1); // this.$emit('save-data, 1);

      const age = inject('userAge');

      console.log(context);

      onBeforeMount(function () {
        console.log('onBeforeMount');
      })

      onMounted(function () {
        console.log('onMounted');
      });

      onBeforeUpdate(function () {
        console.log('onBeforeUpdate');
      });

      onUpdated(function () {
        console.log('onUpdated');
      });

      onBeforeUnmount(function () {
        console.log('onBeforeUnmount');
      });

      onUnmounted(function () {
        console.log('onUnmounted');
      });
      return {
        userName,
        age
      }
    }
    // computed: {
    //   userName(){
    //     return this.firstName + ' ' + this.lastName;
    //   }
    // }
  };
</script>

<style scoped>

</style>
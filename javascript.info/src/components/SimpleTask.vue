<template>
  <div class="simpletask" :id="id">
    <h3 class="simpletask__name">{{ taskName }}</h3>
    <a class="simpletask__link" :href="link" target="_blank">link</a>
    <pre><code class="simpletask__code language-javascript line-numbers">{{ taskSolution }}</code></pre>
    <button class="simpletask__run" v-on:click="taskSolution">do</button>
  </div>
</template>

<script>
  export default {
    props: ['id', 'taskName', 'taskSolution'],


  };
</script>

<style scoped>
    .simpletask {
        border-top: 2px solid #eee;
        margin: 0 0 16px;
    }

    .simpletask__name {
        margin: 0;
        line-height: 28px;
        display: inline;
        font-size: 20px;
        font-weight: 700;
    }
</style>
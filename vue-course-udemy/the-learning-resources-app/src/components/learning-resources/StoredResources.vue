<template>
  <ul>
    <LearningResource
        v-for="res in resources" :key="res.id"
        :title="res.title"
        :id="res.id"
        :description="res.description"
        :link="res.link"
    />
  </ul>
</template>

<script>
  import LearningResource from "@/components/learning-resources/LearningResource";

  export default {
    components: {LearningResource},
    inject: ['resources']
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
  }
</style>
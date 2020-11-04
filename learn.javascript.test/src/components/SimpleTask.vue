<template>
  <div class="simpletask" :id="id">
    <h3 class="simpletask__name">{{ testName }}</h3>
    <a class="simpletask__link" :href="link" target="_blank">link</a>
    <pre><code class="simpletask__code language-javascript line-numbers">{{ JSSolution }}</code></pre>
    <button class="simpletask__run" v-on:click="JSSolution">do</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Prism from "prismjs";

@Component
export default class SimpleTask extends Vue {
  @Prop() private testName!: string;
  @Prop() private link!: string;
  @Prop() private JSSolution!: string;
  @Prop() private id!: string;

  mounted() {
    Prism.highlightAll();
  }
}
</script>

<style scoped lang="scss">
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

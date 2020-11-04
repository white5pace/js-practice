<template>
  <div class="chapterTemplate">
    <SideBar :tasks="tasks" />
    <div class="chapter-content-wrapper">
      <div class="chapter-content">
        <div class="chapter-name">{{ chapterName }}</div>
        <SimpleTask
          v-for="task in tasks"
          :key="task.id"
          :testName="task.testName"
          :link="task.link"
          :JSSolution="task.solution"
          :id="task.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from "@/components/SideBar.vue";
import SimpleTask from "@/components/SimpleTask.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { SimpleTask, SideBar }
})
export default class Chapter extends Vue {
  @Prop() private chapterName!: string;
  @Prop() private tasks!: any;
}
</script>

<style lang="scss">
.chapter-name {
  font: 700 32px/40px BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 40px 0 16px;
}
.header {
  box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 1;
  position: relative;
  background: #fff;
  padding: 18px 22px;
}

.back-link a {
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  text-decoration: none;
  color: #3c3c3b;
  font-weight: bold;

  svg {
    margin-right: 10px;
  }
}

.chapter-content-wrapper {
  padding-left: 250px;
}

.chapter-content {
  padding: 0 120px;
}
</style>

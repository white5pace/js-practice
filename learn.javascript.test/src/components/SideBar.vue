<template>
  <div class="sidebar-navigation">
    <div class="sidebar__section-title"></div>
    <nav class="sidebar__navigation">
      <ul
        class="sidebar__navigation-links"
        @click="log(task)"
        style="width: 100px; height: 100px; background-color: aquamarine"
      >
        <li
          class="sidebar__navigation-link"
          v-for="task in tasks"
          :key="task.id"
        >
          <a href="" @click.prevent="scrollTo('#' + task.id)">
            {{ task.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SideBar extends Vue {
  @Prop() private tasks!: any;

  scrollTo(selector: any) {
    document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped lang="scss">
.sidebar-navigation {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 249px;
  background: #f5f2f0;
  border-right: 1px solid #d5d2d0;
  padding: 23px 30px;
  box-sizing: border-box;
}
</style>

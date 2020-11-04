<template>
  <div class="home">
    <div class="main-title">
      <div class="main-title-inner">Solved tasks from javascript.info</div>
    </div>
    <div class="content-container">
      <div class="nav nav-main">
        <div class="list-title">The JavaScript language</div>
        <ul class="list-sub">
          <li class="list-sub__item">
            <router-link to="/JavaScriptFundamentals">
              <span class="list-sub__number">2.</span>
              <span class="list-sub__name">JavaScriptFundamentals</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.content-container,
.main-title-inner {
  max-width: 920px;
  margin: 0 auto;
}
.content-container {
  padding-top: 52px;
}

.main-title {
  background: linear-gradient(0deg, #414141 0, #373636);
  &-inner {
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
      Arial, sans-serif;
    font-weight: 700;
    line-height: 1.4;
    color: #fff;
    padding: 0.67em 0;
    font-size: 36px;
  }
}

.list-title {
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 8px;
  margin-bottom: 16px;
}

.list-sub {
  list-style: none;
  margin-bottom: 24px;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
}

.list-sub__item {
  margin: 0;
  width: 33.3%;
  box-sizing: border-box;
  padding-right: 20px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
  }
}

.list-sub__number {
  font-family: Consolas, Lucida Console, Menlo, Monaco, monospace;
  font-size: 12px;
  line-height: 21px;
  color: #333;
  margin-right: 16px;
}

.list-sub__name {
  font-size: 16px;
  line-height: 23px;
  color: #0059b2;
}

.list-sub__item:hover .list-sub__name {
  color: #ba1000;
  text-decoration: underline;
}
</style>

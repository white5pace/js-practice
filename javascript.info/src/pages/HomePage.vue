<template>
  <div class="homepage-banner">
    <div class="container">
      <div class="homepage-banner-main">
        <h1>javascript.info</h1>
        <p>Solved tasks from javascript.info</p>
      </div>
      <div class="homepage-banner-table">
        <h2>Table of contents</h2>
      </div>
    </div>
  </div>

  <section class="table-of-contents">
    <div class="container">
      <ul class="parts">
        <li class="part">The JavaScript language</li>
        <ul class="chapters">
          <li class="chapter">
            <span class="chapter-number">1.1</span>
            <router-link to="/introduction">Introduction</router-link>
          </li>
          <li class="chapter">
            <span class="chapter-number">1.2</span>
            <router-link to="/fundamentals">JavaScript Fundamentals</router-link>
          </li>
        </ul>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Home',

  };
</script>
<style lang="scss" scoped>
  .homepage-banner {
    background: linear-gradient(0deg, #414141 0, #373636);
    color: #ffffff;
    padding: 50px 0 30px;
    text-align: center;

    h1 {
      font-size: 36px;
      font-weight: 700;
      line-height: 1.4;
      color: #ffffff;
      margin-bottom: 15px
    }
  }

  .homepage-banner-table {
    margin-top: 40px;

    h2 {
      font-size: 24px;
    }
  }

  .container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  .table-of-contents {
    position: relative;
  }

  .table-of-contents:before {
    content: "";
    position: absolute;
    top: -18px;
    left: 50%;
    margin-left: -16px;
    border-bottom: 19px solid #ffffff;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent
  }

  .parts {
    padding: 50px 0;
  }

  .part {
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 8px;
    margin-bottom: 16px
  }

  .chapter {
    margin-bottom: 10px;
    line-height: 20px;

    .chapter-number {
      margin-right: 10px;
    }

    a {
      color: #0059b2;
    }

    a:visited {
      color: #551a8b;
    }
  }
</style>

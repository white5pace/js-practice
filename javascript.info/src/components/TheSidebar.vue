<template>
  <div class="sidebar-navigation">
    <div class="sidebar-content">
      <router-link to="/" class="sidebar__link">Home</router-link>
      <nav class="sidebar__navigation">
        <div class="sidebar__section-title">Tasks navigation</div>
        <ul class="sidebar__navigation-links">
          <li class="sidebar__navigation-link">
            <a href="#" class="sidebar__link">First task</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .sidebar-navigation {
    position: fixed;
    height: 100vh;
    width: 249px;
    background: #f5f2f0;
    border-right: 1px solid #d5d2d0;
  }

  .sidebar-content {
    padding: 23px 25px;
  }

  .sidebar__section-title {
    margin: 8px 0 6px;
    color: #c4c2c0;
    font-weight: 400;
  }

  .sidebar__navigation-links {
    list-style: none;
  }

  .sidebar__navigation-link {
    line-height: 1.1;
    margin: 6px 0;
  }

  .sidebar__link {
    color: #333333;
    text-decoration: none;
    font-size: 14px;
  }
</style>
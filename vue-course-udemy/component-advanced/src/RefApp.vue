
<template>
  <div>
    <TheHeader/>
    <BadgeList/>
    <UserInfo
        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role"
    />
    <CourserGoal #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </CourserGoal>
  </div>
</template>


<script>
  import TheHeader from "@/components/TheHeader";
  import UserInfo from "@/components/UserInfo";
  import BadgeList from "@/components/BadgeList";
  import CourserGoal from "@/components/CourserGoal";

  export default {
    components: {CourserGoal, BadgeList, UserInfo, TheHeader},
    // components: {
    //   'badge-list': BadgeList,
    // },
    data() {
      return {
        activeUser: {
          name: 'Maximilian Schwarzmüller',
          description: 'Site owner and admin',
          role: 'admin',
        },
      };
    },
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>
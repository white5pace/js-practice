<template>
  <div>
    <TheSidebar>

    </TheSidebar>
    <div class="tasks">
      <simple-task
        v-for="task in tasks"
        :key="task.id"
        :taskName="task.name"
        :taskSolution="task.solution"
      ></simple-task>
    </div>
  </div>
</template>

<script>
  import TheSidebar from '../components/TheSidebar';
  import SimpleTask from '../components/SimpleTask';
  export default {
    components: {SimpleTask, TheSidebar},
    data() {
      return {
        tasks: [
          {
            id: '1',
            name: 'First Task',
            solution() {
              alert(1);
            },
          }
        ]
      }
    },
  };
</script>

<style scoped>
  .tasks {
      padding-left: 250px;
  }
</style>
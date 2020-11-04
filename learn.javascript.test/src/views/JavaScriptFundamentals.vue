<template>
  <div class="JavaScriptFundamentals">
    <Chapter
      :chapterName="'JavaScript Fundamentals и хуементолас'"
      :tasks="tasks"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chapter from "@/components/Chapter.vue";

@Component({
  components: { Chapter }
})
export default class JavaScriptFundamentals extends Vue {
  tasks = [
    {
      id: "callAlert2",
      taskNumber: "2.1.1",
      testName: "Вызвать alert",
      code: `alert('1')`,
      link: "https://learn.javascript.ru/task/hello-alert",

      solution: function() {
        alert(1);
      }
    },
    {
      id: "callAlert1",
      testName: "Вызвать Хуерт",
      code: `alert('1')`,
      link: "https://learn.javascript.ru/task/hello-alert",
      solution: function() {
        interface User {
          name: string;
          id: number;
        }

        class UserAccount {
          name: string;
          id: number;

          constructor(name: string, id: number) {
            this.name = name;
            this.id = id;
          }
        }

        const user: User = new UserAccount("Roman", 1);
      }
    },
    {
      id: "callAlert3",
      testName: "Вызвать alert",
      code: `alert('1')`,
      link: "https://learn.javascript.ru/task/hello-alert",
      solution: function() {
        alert(1);
      }
    },
    {
      id: "callHui",
      testName: "Вызвать alert",
      code: `alert('1')`,
      link: "https://learn.javascript.ru/task/hello-alert",
      solution: function() {
        alert(1);
      }
    }
  ];
}
</script>

<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!--  <div class="container">-->
  <!--    <users-list></users-list>-->
  <!--  </div>-->
  <!--  <div class="container">-->
  <!--    <div class="block" :class="{animate: animatedBlock}"></div>-->
  <!--    <button @click="animateBlock">Animate</button>-->
  <!--  </div>-->

  <!--  <div class="container">-->
  <!--    <transition-->
  <!--        name="para"-->
  <!--        enter-to-class="para-enter-to"-->
  <!--        @before-enter="beforeEnter"-->
  <!--        @before-leave="beforeLeave"-->
  <!--        @enter="enter"-->
  <!--        @after-enter="afterEnter"-->
  <!--        @leave="leave"-->
  <!--        @after-leave="afterLeave"-->
  <!--    >-->
  <!--      <p v-if="paraIsVisible">This is only sometimes visible...</p>-->
  <!--    </transition>-->
  <!--    <button @click="toggleParagraph">Toggle Paragraph</button>-->
  <!--  </div>-->

  <!--  <div class="container">-->
  <!--    <transition-->
  <!--        :css="false"-->
  <!--        @before-enter="beforeEnterOne"-->
  <!--        @enter="enterOne"-->
  <!--        @before-leave="beforeLeaveOne"-->
  <!--        @leave="leaveOne"-->
  <!--        @enter-cancelled="enterCanceled"-->
  <!--        @leave-cancelled="leaveCanceled"-->
  <!--    >-->
  <!--      <p v-if="paraOneIsVisible">This is only sometimes visible and this is paraOne</p>-->
  <!--    </transition>-->
  <!--    <button @click="toggleParagraphOne">Toggle ParaOne</button>-->
  <!--  </div>-->

  <!--  <div class="container">-->
  <!--    <transition name="fade-button" mode="out-in">-->
  <!--      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>-->
  <!--      <button @click="hideUsers" v-else>Hide Users</button>-->
  <!--    </transition>-->
  <!--  </div>-->

  <!--  <base-modal @close="hideDialog" :open="dialogIsVisible">-->
  <!--    <p>This is a test dialog!</p>-->
  <!--    <button @click="hideDialog">Close it!</button>-->
  <!--  </base-modal>-->

  <!--  <div class="container">-->
  <!--    <button @click="showDialog">Show Dialog</button>-->
  <!--  </div>-->
</template>

<script>
// import UsersList from "@/components/UsersList";
export default {
  // components: {UsersList},
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      paraOneIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCanceled(el) {
      console.log(el)
      clearInterval(this.enterInterval)
    },
    leaveCanceled(el) {
      console.log(el);
      clearInterval(this.leaveInterval)
    },
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);
    },
    beforeEnterOne(el) {
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log('beforeLeave')
      console.log(el);
    },
    enter(el) {
      console.log('enter')
      console.log(el);
    },
    enterOne(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;

        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('afterEnter')
      console.log(el);
    },
    beforeLeaveOne(el) {
      el.style.opacity = 1;
    },
    leave(el) {
      console.log('leave')
      console.log(el);
    },
    leaveOne(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('afterLeave')
      console.log(el);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible
    },
    toggleParagraphOne() {
      this.paraOneIsVisible = !this.paraOneIsVisible
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform .3s ease-out;*/
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #cccccc;
  border-radius: 12px;
}

.animate {
  animation: slide-scale .3s ease-out forwards;
  /*transform: translateX(-150px);*/
}

.para-enter-from {
  /*opacity: 0;*/
  /*transform: translateY(-30px);*/
}

.para-enter-active {
  transition: all .3s ease-out;
  animation: slide-scale .3s ease-out;
}

.para-enter-to {
  /*opacity: 1;*/
  /*transform: translateY(0);*/
}

.para-leave-from {
  /*opacity: 1;*/
  /*transform: translateY(0);*/
}

.para-leave-active {
  /*transition: all .3s ease-in;*/
  animation: slide-scale .3s ease-out;
}

.para-leave-to {
  /*opacity: 0;*/
  /*transform: translateY(30px);*/
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity .3s ease-out;
}

.fade-button-leave-active {
  transition: opacity .3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
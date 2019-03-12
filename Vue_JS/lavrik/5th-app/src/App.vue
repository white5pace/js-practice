<template>
<div>
    <button class="btn btn-primary" 
            v-on:click="showRes = !showRes"
            >
        {{ btnText }}
    </button>
    <hr>
    <app-progress v-bind:val="sum" 
                  v-bind:max="maxNumbers * 5">
    </app-progress>
    <hr>
    <transition name="slide">
        <h2 v-show="showRes" class="alert alert-success">Your profit: {{ sum }}</h2>
    </transition>
    <hr>
    <app-progress v-bind:val="numbers.length" 
                    v-bind:max="maxNumbers">
    </app-progress>
    <hr>
    <button class="btn btn-success" 
            v-on:click="addNumber"
            v-bind:disabled="done"
            >
        Add number
    </button>
    <button class="btn btn-success" 
            v-if="done"
            v-on:click="Restart"
            >
        Restart
    </button>
    <hr>
    <ul class="list-group">
        <li class="list-group-item"
            v-for="number in numbers"
            :key="number"
            >
            {{ number }}
        </li>
    </ul>
</div>
</template>

<script>
    import progress from './progress.vue';

    export default {
        data() {
            return {
                showRes: true,
                numbers: [],
                maxNumbers: 10
                }
        },
        methods: {
            addNumber(){
                if(!this.done){
                let rnd = Math.floor(Math.random() * 11) - 5;
                this.numbers.push(rnd);
                }
            },
            Restart(){
                this.numbers = [];
                }
        },
        computed: {
            sum(){
                let sum = 0;
        
                for(let i = 0; i < this.numbers.length; i++){
                sum += this.numbers[i];
                }
                return sum;
            },
            btnText(){
                return this.showH2 ? 'Hide result' : 'Show result';
            },
            done(){
                return this.numbers.length >= this.maxNumbers;
            }
        },
        components: {
            AppProgress: progress,
        }
    }
</script>

<style scoped>
    .container {
        padding-top: 20px;
    }
    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        transition: opacity .5s;
    }
    .slide-leave-active {
        transition: opacity .5s;    
    }
    .slide-leave-to {
        opacity: 0;
    }
</style>



Vue.component('app-progress', {
    props: {
      max: Number,
      val: Number
    },
    computed: {
      width(){
        let w = this.val / this.max * 100;
  
        if(w > 100){
          w = 100;
        }
        else if(w < 0){
          w = 0;
        }
  
        return {
          width: w + '%'
        }
      }
    },
    template: `
  <div class="progress">
  <div class="progress-bar" v-bind:style="width">
  </div>
  </div>
  `
  });
  
  let sample = new Vue({
    el: '.sample',
    data: {
      showRes: true,
      numbers: [],
      maxNumbers: 10
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
        //   this.numbers.splice(0, numbers.length);
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
    }
  });
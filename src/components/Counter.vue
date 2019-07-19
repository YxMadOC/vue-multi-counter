<template>

  <div class="counter">
    <button v-on:click="decrease"> - </button>
    <span> {{ value }} </span>
    <button v-on:click="increase"> + </button>
  </div>

</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        value: 0
      }
    },
    methods: {
      increase() {
        this.value ++;
      },
      decrease() {
        this.value --;
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  button{
    margin: 30px;
    font-size: 30px;
  }
  span{
    margin: 30px;
    font-size: 30px;
  }
  .counter{
    margin: 5px;
  }
</style>

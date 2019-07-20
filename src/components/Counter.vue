<template>

  <div class="counter">
    <button v-on:click="decrease"> - </button>
      <span> {{ count }} </span>
    <button v-on:click="increase"> + </button>
  </div>

</template>

<script>

  export default {
      name: 'Counter',
      model: {
          prop: "count"
    },
      props: {
          count: {
              default: 0
          }
      },
    methods: {
      increase() {
          this.emitUpdate(this.count + 1);
      },
      decrease() {
          this.emitUpdate(this.count - 1);
      },
        emitUpdate(count) {
            this.$emit("change", count);
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

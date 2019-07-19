<template>
    <div id="app">

        <CounterGroup />
    </div>
</template>

<script>
    import CounterGroup from './components/CounterGroup.vue'

    export default {
        name: 'app',
        components: {
            CounterGroup
        },
        data() {
            return{
                counters: Number(0)
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
</style>

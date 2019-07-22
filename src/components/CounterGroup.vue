<template>

    <div class="counter-group">
        <div>
            nums:
            <input type="number" v-model="counterNum">
        </div>
        <Counter v-for="n in parseInt(counterNum)" :key="n"/>
        <CounterSum />
    </div>
    
</template>

<script>
    import Counter from "./Counter";
    import CounterSum from "./CounterSum";

    export default {
        name: "CounterGroup",
        components: {CounterSum, Counter},
        data() {
            return {
                counterNum: 0,
                counts: []
            }
        }
    }
</script>

<style scoped>


</style>
<template>

    <div class="counter-group">
        <div>
            nums:
            <input v-model="counterNum" @change="updateCounterNum">
        </div>
        <Counter :count="count.value" :key="index" @change="(val) => updateCount(index, val)"
                 v-for="(count, index) in counts"/>
        <CounterSum :sum="sum"/>
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
        },
        computed: {
            sum() {
                return this.counts.map(c => c.value).reduce((a, b) => a + b, 0);
            }
        },
        methods: {
            updateCounterNum(e) {
                this.counts = new Array(parseInt(e.target.value))
                    .fill(0).map(i => ({value: 0}));
            },
            updateCount(index, num) {
                this.counts[index].value = num;
            }
        }
    }
</script>

<style scoped>


</style>
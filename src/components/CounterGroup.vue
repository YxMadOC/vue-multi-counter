<template>

    <div class="counter-group">
        <div>
            nums:
            <input v-model="counterNum" @change="updateCounterNum">
        </div>
        <Counter v-for="(count, index) in parseInt(counterNum)" :count="count.value" :key="index" @change="(val) => updateCount(index, val)" />
        <CounterSum :sum="sum"/>
    </div>
    
</template>

<script>
    import Counter from "./Counter";
    import _ from 'lodash';
    import CounterSum from "./CounterSum";
    export default {
        name: "CounterGroup",
        components: {CounterSum, Counter},
        data() {
            return{
                counterNum: 0,
                counts: []
            }
        },
        computed: {
            sum() {
                return _.sum(this.counts.map(c => c.value));
            }
        },
        methods: {
            updateCounterNum(e) {
                this.counts = new Array(parseInt(e.target.value))
                    .fill(0).map(() => ({ value: 0 }));
            },
            updateCount(index, num){
                this.counts[index].value = num;
            }
        }
    }
</script>

<style scoped>


</style>
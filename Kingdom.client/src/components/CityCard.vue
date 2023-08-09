<template>
    <div class="card bg-dark">
      <div class="card-body">
        <h1>{{city.name}}</h1>
        <h4>Population: {{ city.pop }}</h4>
        <!-- <h4>Wealth: {{ city.wealth }}</h4> -->
        <h4>Alliance: {{ alliance }}</h4>
        <h4>Stability: {{ city.stability - unrest }}</h4>

      </div>
    </div>
</template>


<script>
// import { City } from '../models/City.js';

export default {
  props: {
    city: {
      type: Object,
      required: true
    },
  },
  setup(props){
    return {
      props,
      alliance: props.city.kingInfluence - props.city.rebelInfluence,
      unrest: Math.abs(props.city.kingInfluence - props.city.rebelInfluence),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
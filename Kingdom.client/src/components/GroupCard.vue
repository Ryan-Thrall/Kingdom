<template>
  <div class="card bg-success">
    <div class="card-body">
      <h1>{{ group.name }}</h1>
      <h2>Alliance: {{group.alliance}}</h2>
      <h3>Wealth: {{group.wealth}}</h3>
      <h4>Pop: {{ group.pop }}</h4>
    </div>
  </div>
</template>


<script>
// import { Group } from '../models/Group.js';

export default {
  props: {
    group: {
      type: Object,
      required: true
    },
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-2">
        <h1>Treasury: {{ treasury }}</h1>
      </div>

      <div class="col-8 d-flex justify-content-center">
        <h1>Turn: {{turn}}</h1>
      </div>

      <div class="col-2">
        <h1>Money: {{ rebelMoney }}</h1>
      </div>


    </div>


    <div class="row justify-content-center">
      <div class="col-6 d-flex justify-content-around mt-5">
        <GroupCard v-for="g in groups" :key="g.id" :group="g"/>
        <!-- <h1>{{cities}}</h1> -->
      </div>

    </div>

    <div class="row justify-content-center">
      <div class="col-6 d-flex justify-content-around mt-5">
        <CityCard v-for="c in cities" :key="c.id" :city="c"/>
      </div>
    </div>

  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {

    return {
      groups: computed(() => AppState.groups),
      cities: computed(() => AppState.cities),
      treasury: computed(() => AppState.treasury),
      rebelMoney: computed(() => AppState.rebelMoney),
      turn: computed(() => AppState.turn),
    }
  }
}
</script>


<style lang="scss" scoped></style>
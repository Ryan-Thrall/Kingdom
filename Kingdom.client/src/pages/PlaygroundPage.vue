<template>
  <div class="container-fluid">
    <div class="row justify-content-center">

      <!-- Anger Meters -->
      <div class="col-12">
        
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
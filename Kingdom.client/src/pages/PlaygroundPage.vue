<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-around mt-5">

        <GroupCard v-for="g in groups" :key="g.id" :group="g"/>

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
    }
  }
}
</script>


<style lang="scss" scoped></style>
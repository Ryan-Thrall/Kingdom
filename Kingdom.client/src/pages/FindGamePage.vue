<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <div class="card mt-5">
          <div class="card-body bg-dark p-5 rounded">
            <h1 class="text-center">Host a Game</h1>
            <div class="mt-4 d-flex flex-column">
              <input type="text" class="form-control my-1" id="gameName" placeholder="Game Name (optional)">
              <div class="my-1">
                <input type="checkbox" class="me-2" id="isRanked">
                <label for="isRanked">Ranked</label>
              </div>
              <select name="map" id="map" class="my-1">
                <option value="" disabled selected>Select a map</option>
                <option value="Map1">Map1</option>
              </select>
              <div>
                <input type="radio" class="me-2" id="faction" >
                <label for="faction">King</label>
              </div>
              <div>
                <input type="radio" class="me-2" id="faction" >
                <label for="faction">Rebel</label>
              </div>
            </div>

            <div>
              <button type="submit" class="btn btn-lg bg-secondary " @click="createGame">Create Game</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
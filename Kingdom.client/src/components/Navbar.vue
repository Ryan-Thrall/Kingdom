<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <!-- <img alt="logo" src="../assets/img/cw-logo.png" height="45" /> -->
        <h1 class="text-yellow">Kingdom</h1>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto me-3">
        <li>
          <router-link :to="{ name: 'FindGame' }" class="btn text-platinum lighten-30 selectable">
            Find a game
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MyGames' }" class="btn text-platinum lighten-30 selectable">
            My games
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Leaderboard' }" class="btn text-platinum lighten-30 selectable">
            Leaderboard
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-platinum lighten-30 selectable">
            About
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'HowToPlay' }" class="btn text-platinum lighten-30 selectable">
            How to play
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Playground' }" class="btn text-platinum lighten-30 selectable">
            Playground
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>

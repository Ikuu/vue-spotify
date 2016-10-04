<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png" alt="Vue.js">
    <artist :artist='artistData'></artist>

    <div v-for="track in topTracksData">
      <top-track :track="track"></top-track>
    </div>
  </div>
</template>

<script>
import Artist from './components/Artist';
import TopTrack from './components/TopTrack';
import artistData from './data/artist';
import topTracksData from './data/topTracks';

export default {
  components: {
    Artist,
    TopTrack
  },
  data() {
    return {
      artistData,
      topTracksData,
    };
  },
};
</script>

<style scoped>
.logo {
  width: 100px;
  height: 100px
}
</style>

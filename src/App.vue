<template>
  <div id="app">
    <nav-bar></nav-bar>
    <artist :artist='artistData'></artist>

    <div id="top-tracks">
      <top-track v-for="track in topTracksData" :track="track"></top-track>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Artist from './components/Artist';
import TopTrack from './components/TopTrack';

export default {
  components: {
    NavBar,
    Artist,
    TopTrack,
  },
  data() {
    return {
      artistData: {
        name: 'Placeholder',
        images: [{
          url: 'http://placehold.it/200x200',
        }],
      },
      topTracksData: null,
    };
  },
  methods: {
    fetchData() {
      const self = this;
      const spotifyUrl = 'https://api.spotify.com/v1';
      const artist = this.$route.params.artist || 'Drake';

      fetch(`${spotifyUrl}/search?q=${artist}&type=artist&limit=5`)
        .then(response => response.json())
        .then(json => (self.artistData = json.artists.items[0]))
        .then((data) => {
          fetch(`${spotifyUrl}/artists/${data.id}/top-tracks?country=GB`)
            .then(response => response.json())
            .then(json => (self.topTracksData = json.tracks));
        });
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}
</style>

<template>
  <div>
    <h2>{{ track.name }}</h2>
    <img :src="track.album.images[0].url" :alt="track.album.name" @click="onClick(track.id)"/>
    <audio :id="track.id">
      <source :src="track.preview_url" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
export default {
  props: ['track'],
  methods: {
    onClick: (id) => {
      const player = document.getElementById(id);
      const currentState = player.paused;
      currentState ? player.play() : player.pause();
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}

div {
  float: left;
  padding: 20px;
}
</style>

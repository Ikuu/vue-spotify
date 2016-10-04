<template>
  <div>
    <h1>{{ artist.name }}</h1>
    <artist-image :image='artist.images'></artist-image>
  </div>
</template>

<script>
import ArtistImage from './ArtistImage';
export default {
  props: ['artist'],
  components: { ArtistImage },
};
</script>

<style scoped>
</style>

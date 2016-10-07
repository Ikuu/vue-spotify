<template>
  <div id="artist">
    <h1>{{ artist.name }}</h1>
    <artist-image :image='artist.images' :name='artist.name'></artist-image>
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
h1 {
  color: #41b883;
}
</style>

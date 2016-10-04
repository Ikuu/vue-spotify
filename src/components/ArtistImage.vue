<template>
  <img :src='image[0].url' />
</template>

<script>
export default {
  props: ['image'],
};
</script>

<style scoped>
img {
  border-radius: 200px;
  height: 200px;
  width: auto;
}
</style>

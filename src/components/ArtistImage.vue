<template>
  <img :src='image[0].url' :alt='name'/>
</template>

<script>
export default {
  props: ['image', 'name'],
};
</script>

<style scoped>
img {
  border-radius: 200px;
  height: 200px;
  width: auto;
}
</style>

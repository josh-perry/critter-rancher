<template>
  <div class="bar-button">
    <img :src="image">
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.bar-button {
  flex: 0 1 25%;
}

img {
  image-rendering: pixelated;
  max-width: 100%;
  max-height: 100%;

  top: 0;
  left: 0;
  display: block;
}
</style>

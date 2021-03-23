<template>
  <img :src="sprite">
</template>

<script>
import Critter from '../models/critter'

export default {
  props: {
    critter: {
      type: Object,
      default: () => {
        return new Critter()
      }
    }
  },
  computed: {
    sprite () {
      return `/img/${this.$store.state.critter.critter.sprite}.png`
    }
  },
  mounted () {
    window.setInterval(() => {
      this.$store.dispatch('critter/tick')
    }, 3000)
  }
}
</script>

<style scoped>
img {
  image-rendering: pixelated;
  margin: auto;
}
</style>

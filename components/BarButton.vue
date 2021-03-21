<template>
  <div class="bar-button">
    <FontAwesomeIcon class="icon" :icon="fa_icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  computed: {
    fa_icon () {
      return ['fas', this.icon]
    }
  }
}
</script>

<style scoped>
.bar-button {
  flex: 0 1 25%;
}

.icon {
  max-width: 100%;
  max-height: 100%;
  padding: 10%;

  display: block;
}
</style>

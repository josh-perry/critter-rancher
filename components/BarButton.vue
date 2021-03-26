<template>
  <div class="bar-button">
    <a href="#" @click="button_press">
      <FontAwesomeIcon class="icon" :icon="fa_icon" />
    </a>
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
    },
    action: {
      type: String,
      default: () => {
        return null
      }
    }
  },
  computed: {
    fa_icon () {
      return ['fas', this.icon]
    }
  },
  methods: {
    button_press () {
      switch (this.action) {
        case 'feed': {
          this.$store.dispatch('critter/feed')
          break
        }
        default: {
          break
        }
      }
    }
  }
}
</script>

<style scoped>
.bar-button {
  flex: 0 1 25%;
  color: #868686;
}

.bar-button:hover {
  color: black;
}

.bar-button>a {
  text-decoration: none;
  color: inherit;
}

.icon {
  max-width: 100%;
  max-height: 100%;
  padding: 10%;

  display: block;
}
</style>

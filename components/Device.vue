<template>
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" :style="device_style">
    <ellipse cx="100" cy="75" rx="45" ry="60" />

    <foreignObject x="75" y="50" width="50" height="50">
      <div class="screen">
        <div class="button-bar">
          <BarButton icon="utensils" />
          <BarButton icon="lightbulb" />
          <BarButton icon="dice-six" />
          <BarButton icon="clinic-medical" />
        </div>

        <img src="/img/test_critter.png">

        <div class="button-bar">
          <BarButton icon="bath" />
          <BarButton icon="weight" />
          <BarButton icon="comment" />
          <BarButton icon="smile-beam" />
        </div>
      </div>
    </foreignObject>

    <foreignObject x="75" y="105" width="50" height="16">
      <div class="buttons">
        <div class="button-space">
          <div class="button" />
        </div>

        <div class="button-space">
          <div class="button" />
        </div>

        <div class="button-space">
          <div class="button" />
        </div>
      </div>
    </foreignObject>
  </svg>
</template>

<script>
export default {
  computed: {
    device_style () {
      return 'fill:#080231'
    }
  }
}
</script>

<style scoped>
svg {
  height: 100vh;
  display: block;
}

.screen {
  background: #a9ffbf;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
}

.screen>img {
  margin: auto;

  image-rendering: pixelated;

  flex: 0 0 auto;
}

.button-bar {
  flex: 0 0 15%;
  display: flex;
  background: #91ff81;

  min-height: 0;
}

.buttons {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
}

.button-space {
  height: 100%;
  padding: 10%;
  flex: 33%;
}

.button {
  border-radius: 50%;
  background: white;
  margin: auto;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="75" rx="45" ry="60" />

    <foreignObject x="75" y="50" width="50" height="50">
      <div class="screen">
        <div class="top-bar">
        </div>

        <img src="/img/test_critter.png" />

        <div class="bottom-bar">
        </div>
      </div>
    </foreignObject>

    <foreignObject x="75" y="105" width="50" height="16">
      <div class="buttons">
        <div class="button-space">
          <div class="button">
          </div>
        </div>

        <div class="button-space">
          <div class="button">
          </div>
        </div>

        <div class="button-space">
          <div class="button">
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>
</template>

<style scoped>
svg {
  height: 100vh;
  display: block;
}

.screen {
  background: white;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
}

.screen>img {
  width: 50%;
  height: 100%;
  margin: auto;

  image-rendering: pixelated;

  flex: 50%;
}

.top-bar {
  flex: 25%;
}

.bottom-bar {
  flex: 25%;
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

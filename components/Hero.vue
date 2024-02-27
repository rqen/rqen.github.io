<script setup>
const props = defineProps({
  doIntro: Boolean,
})
</script>

<template>
  <div class="hero" :class="{'-intro': !doIntro}">
    <div class="light">
      <div class="omni"></div>
      <div class="conic"></div>
      <div class="bottom"></div>
    </div>
    <div class="title">
      <div class="upper">
        <div class="light-target" data-text="RQEN">RQEN</div>
        <div class="light-target" data-text=".COM">.COM</div>
      </div>
      <div class="spacer"></div>
      <div class="lower">
        <div>CHRISTIAN</div>
        <div>RØEN</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">

.hero {
  --background-color: transparent;
  --light-color: rgba(6, 182, 212, 1); /* #06b6d4 */
  --light-color-7: rgba(6, 182, 212, .7); /* #06b6d4 */

  &.-intro { /* "to" animation */
    .upper {
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    .lower {
      clip-path: polygon(0 0%, 100% 0%, 100% 0%, 0% 0%);
    }
  }
}

.light {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  animation: blink forwards 2s;
  overflow: hidden;

  .conic {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 10vh;
    /* background-image: conic-gradient(from 90deg at 50% 10%, #06b6d4 30%, var(--background-color) 40%),
        conic-gradient(from 270deg at 50% 10%, var(--background-color) 60%, #06b6d4 70%),
        linear-gradient(to top, var(--background-color), transparent); */

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-image: conic-gradient(from 90deg at 50% 10%, var(--light-color) 30%, var(--background-color) 40%);
    }
    &:after {
      left: auto;
      right: 0;
      background-image: conic-gradient(from 270deg at 50% 10%, var(--background-color) 60%, var(--light-color) 70%);
    }
  }

  .omni {
    position: absolute;
    width: 200%;
    height: 350%;
    left: -50%;
    top: -260%;
    background-image: radial-gradient(var(--light-color-7), transparent 60%);
    z-index: 3;
    /* mix-blend-mode: color-burn; */
  }

  .bottom {
    position: absolute;
    width: 100%;
    height: 10vh;
    left: 0;
    top: 0;
    /* background-image: linear-gradient(to top, var(--background-color), transparent); */
    background-image: linear-gradient(to top, black, transparent);
    mix-blend-mode: darken;
    z-index: 2;
  }
}

.title {
  position: relative;
  z-index: 2;
  width: 90vw;
  height: 30vh;
  margin: 0 auto;
  padding-top: 5vh;
  font-size: 60px;
  font-weight: bold;
  font-family: system-ui, serif;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, max-content));
  place-content: center;

  .light-target {
    position: relative;
    color: rgba(0, 80, 90, 1);
    
    &:after {
      content: attr(data-text);
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      text-shadow: 0px -1px rgba(0, 190, 200, 1);
      color: rgba(0, 80, 90, 1);
      height: 0.68em;
      overflow: hidden;
    }
  }

  .upper,
  .lower {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
  }

  .upper {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 2 / -1;
    margin-left: auto;
    margin-right: 0;
    /* clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%); */
    /* transition: clip-path 2.5s ease-out; */
    animation: blink forwards 2s;
  }

  .lower {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: clip-path 2.5s .5s ease-out;

    div:first-child {
      padding-right: .4em;
    }
  }

  .spacer {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    height: 1px;
    background-color: black;
    transition: clip-path 1.5s .5s ease;
  }
}

@keyframes blink {
  0%, 9%, 12%, 32%, 62% {
    opacity: 0;
  }

  10%, 30%, 60%, 70% {
    opacity: 1;
  }
}
</style>
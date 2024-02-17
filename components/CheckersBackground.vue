<script setup>

// import gsap from 'gsap'
const props = defineProps({
  checkersBgColor: {
    type: String,
    default: 'red',
  },
  showGrid: {
    type: Boolean,
    default: true,
  },
  gradientBg: {
    type: Boolean,
    default: true,
  }
})

const bgcolor = computed(()=>{
  return props.checkersBgColor
})
watch(bgcolor, ()=>{
  console.log('component bgcolor: ', bgcolor.value)
})
const showG = ref(props.showGrid)
const bg = ref(null)
const gridColors = ref([])
const grid = ref([])
const { generateNewGrid, getColors, calculateDistance } = useGenerativeGridSquare()

const gbgx = ref(0)
const gbgy = ref(0)

onMounted(async ()=>{
  if (process.client) {
    gridColors.value = await getColors()
    grid.value = generateNewGrid(gridColors.value)

    document.addEventListener('mousemove', (event)=>{
      let pointerX = event.pageX
      let pointerY = event.pageY
      gbgx.value = pointerX
      gbgy.value = pointerY
      console.log("🚀 ~ document.addEventListener ~ pointerY:", pointerY)

      // requestAnimationFrame(() => {
      //   grid.value.forEach((elm, idx) => {
      //     elm.rotation = calculateDistance(elm, idx, pointerX, pointerY)
      //   })
      // })
    })
  }
})

</script>

<template>
  <div class="bg-container" :class="{'-gradient': gradientBg}" ref="bg" :style="{'background-color': showG ? bgcolor : null, '--gbgx': gbgx + 'px', '--gbgy': gbgy + 'px' }">
    <div
      v-for="(square, index) in grid" :key="`square-${index}`"
      class="square"
      :style="{...square.style, '--rotate': square.rotation}"
      >
      <div v-if="square.child" :style="{...square.child.style}" class="square-inner"></div>
    </div>

  </div>
</template>

<style lang="postcss">
.bg-container {
  display: block;
  height: 100dvh;
  width: 100dvw;
  /* padding: 2em; */
  background-color: var(--background, #fff);
  transition: background-color .5s ease;
  overflow: hidden;

  &.-gradient {
    background-image: radial-gradient(red, transparent);
    background-size: 50% 50%;
    background-position: var(--gbgx, 50%) var(--gbgy, 50%);
    background-repeat: no-repeat;
  }
  
  .square {
    position: absolute;
    top: 2em;
    left: 2em;
    rotate: var(--rotate, 0deg);
    background-color: var(--square-background, #fff) !important;
    
    .square-inner {
      position: absolute;
      /*top: .5em;
      left: .5em;
      width: calc(100% - 1em);
      height: calc(100% - 1em);*/
      inset: .5em;
      border-top: 1.3em solid var(--bdrtop);
      border-bottom: 1.3em solid var(--bdrbtm);
    }
    .square-inner:nth-child(1) {
      transform: scale(1, .5);
      width: calc(100% - 1em);
      height: calc(100% - 1em);
      top: -.5em;
      right: auto;
      bottom: auto;
    }
    .square-inner:nth-child(2) {
      top: 2em;
      bottom: auto;
      right: .5em;
      left: auto;
      width: 50%;
      height: 50%;
      border-width: .8em 0;
      transform: rotate(90deg);
      z-index: 1;
      
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        clip-path: circle(60px at center);
      }
    }
    .square-inner:nth-child(3) {
      bottom: .5em;
      right: .5em;
      width: 50%;
      height: 50%;
      border-width: .8em 0;
      transform: rotate(-90deg);
      z-index: 3;
    }
  }

  /* svg {
    width: 100%;
    height: 100%;
  }
  svg * {
    /*    Removes little gaps between the shapes * /
    shape-rendering: geometricPrecision;
  } */
}

</style>
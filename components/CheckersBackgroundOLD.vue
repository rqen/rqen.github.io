<script setup>

import gsap from 'gsap'

const vw = ref(0)
const vh = ref(0)
const innerHtml = ref('')
const squares = ref('')

const state = {
  gap: 9,
  itemWidth: 100,
  itemHeight: 86.6,
  // hexagonPath: "M100 43.3013L75 86.6026H25L0 43.3013L25 0L75 2.18557e-06L100 43.3013Z",
  showItemCount: false,
  // proximity: 500,
  // proximity: window.innerWidth / 8,
  proximity: 500,
}


onMounted(()=>{
  vw.value = window.innerWidth
  console.log("🚀 ~ vw:", vw)
  vh.value = window.innerHeight
  console.log("🚀 ~ vh:", vh)

  generateNewGrid()
  // document.addEventListener('click', this.generateNewGrid.bind(this))
  document.addEventListener('mousemove', (event) => {
    handleMouseMove(event)
  })
})


// Highly inspired by Alex Trost aka. frontend.horse, "Generative grid" live stream 👏👏🥳

// import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js@3.1.1"
import tinycolor from "https://cdn.skypack.dev/tinycolor2@1.4.2"
// import gsap from "https://cdn.skypack.dev/gsap@3.9.1"
// import "https://cdn.skypack.dev/@svgdotjs/svg.filter.js@3.0.8";


  // constructor(args) {
  //   const self = super(args)
  //   this.state = {
  //     gap: 9,
  //     itemWidth: 100,
  //     itemHeight: 86.6,
  //     // hexagonPath: "M100 43.3013L75 86.6026H25L0 43.3013L25 0L75 2.18557e-06L100 43.3013Z",
  //     showItemCount: false,
  //     // proximity: 500,
  //     // proximity: window.innerWidth / 8,
  //     proximity: 500,
  //   }
  //   this.colors = []
  //   this.rnd = gsap.utils.random
  //   this.colorPalette = null

  //   return self
  // }

  // connectedCallback() {
  //   this.getColors()
  // }


const drawGrid = () => {
  // const { itemHeight, itemWidth, gap } = this.state
  const xAmount = Math.ceil(vw.value / (state.itemWidth + (state.gap * 2)))
  const yAmount = Math.ceil(vh.value / (state.itemHeight + (state.gap * 2)))
  let rotate;
  let itemCount = 0
  for (let i = -1; i < yAmount; i++) {
    for (let j = -1; j < xAmount; j++) {
      const offset = i % 2 === 0 ? 0 : 83
      const xPos = j * (state.itemWidth + state.itemWidth / 2 + state.gap * 2) + offset
      const yPos = i * (state.itemHeight / 2 + state.gap)
      itemCount++
      drawSquare(xPos, yPos, rotate, itemCount)
    }
  }
}

const drawSquare = (x, y, rotate, itemCount) => {
  // console.log(x)
  const elm = document.createElement('div')
  elm.style.top = y * 2 + 'px'
  elm.style.left = x + 'px'
  elm.style.width = this.state.itemWidth + 'px'
  elm.style.height = this.state.itemHeight + 'px'
  // elm.style.transform = 'translate('+ x +'px, '+ (y * 2) +'px) rotate(var(--rotate, 0)) scale(var(--scale, 0))'
  elm.style.transform = 'rotate(var(--rotate, 0)) scale(var(--scale, .2))' // for scaling
  elm.style.transform = 'rotate(var(--rotate, 0)) scale(var(--scale, 1))' // for rotating
  elm.classList.add('square')

  elm.innerText = this.state.showItemCount ? itemCount : ''
  elm.style.backgroundColor = gsap.utils.random(this.colorPalette)
  elm.appendChild(this.drawSquareInner())
  elm.appendChild(this.drawSquareInner())
  elm.appendChild(this.drawSquareInner())
  this.appendChild(elm)
  // console.log(elm)
}

const drawSquareInner = () => {
  const elm = document.createElement('div')
  const bdrtopc = gsap.utils.random(this.colorPalette)
  const bdrbtmc = gsap.utils.random(this.colorPalette)
  const bgc = gsap.utils.random(this.colorPalette)
  elm.classList.add('square-inner')
  elm.style.setProperty('--bdrtop', bdrtopc)
  elm.style.setProperty('--bdrbtm', bdrbtmc)
  elm.style.backgroundColor = bgc
  return elm
}

  
const handleMouseMove = (event) => {
  // console.log('mousemove')
  this.pointerX = event.pageX
  this.pointerY = event.pageY

  /*
  // Testing on a single .square
  // const elm = document.querySelector('.square')
  document.querySelectorAll('.square')[0].forEach(elm=>{
    this.calculateDistance(elm, this.pointerX, this.pointerY)
  })
  */

  requestAnimationFrame(() => {
    this.squares.forEach((elm) => {
      this.calculateDistance(elm, this.pointerX, this.pointerY)

    })
  })
}
const calculateDistance = (elem, mouseX, mouseY) => {
  const {
    width: elmWidth,
    height: elmHeight,
    x,
    y
  } = elem.getBoundingClientRect()
  const { proximity: prox } = this.state

  const distance = Math.floor(
    Math.sqrt(
      Math.pow(mouseX - (elem.offsetLeft + (elmWidth / 2)), 2) +
      Math.pow(mouseY - (elem.offsetTop + (elmHeight / 2)), 2)
    )
  ) - Math.round(elmWidth)

  let rotate;
  if (distance < prox) {
    // rotate = ((prox - distance) / 1000) // for scaling
    rotate = ((prox - distance) / 100) * 15 // for rotating
    console.log(rotate)
  } else {
    rotate = 0;
  }

  // if (elem.offsetLeft < (window.innerWidth / 2)) {
  if (elem.offsetLeft < mouseX) {
    rotate = rotate * -1
  }
  // elem.style.setProperty('--scale', rotate)
  elem.style.setProperty('--rotate', rotate + 'deg')
}

// async getColors() {
//   this.colors = await fetch(
//     "https://unpkg.com/nice-color-palettes@3.0.0/100.json"
//   ).then((response) => {
//     return response.json()
//   })
//   // this.colors = colors 
//   this.init()
//   // console.log(colorOutput)
//   // console.log(colors)
// }


const generateNewGrid = () => {
  console.log('generate2')
  colorPalette = gsap.utils.random(state.colors)
  const bg = this.makeBackgroundColor()
  console.log('bg: ', bg)
  gsap.to('body', {
    '--background': bg,
    duration: 0.3
  })
  /* gsap.to(".container > svg > g > g, .texture", {
    opacity: 0,
    scale: 0.8,
    y: "-=50",
    ease: "power2.out",
    // rotate: 130,
    // transformOrigin:'center',
    duration: 0.5,
    stagger: { amount: 0.5, from: "start" },
    onComplete: () => {
      console.log('onComplete')
      // Remove previous SVG from DOM
      document.querySelector(".container").innerHTML = ''
      // Start new SVG creation
      // drawGrid()
    }
  }) */
  innerHTML = ''
  drawGrid()
  squares.value = document.querySelectorAll('.square')
}

const makeBackgroundColor = () => {
  return tinycolor
    .mix(this.colorPalette[0], this.colorPalette[1], 50)
    .desaturate(10)
    .toString();
}
const getTwoUniqueInRange = (min, max) => {
  let first, second;
  first = this.rnd(min, max, 1);
  do {
    second = this.rnd(min, max, 1);
  } while (first === second);
  return [first, second];
}


console.clear()

// let colors, colorPalette, draw, hexagonGroup, hexagonDef, rotation;


</script>

<template>
  <div>
    vw: {{ vw }}
    <br>
    vh: {{ vh }}

  </div>
</template>

<style lang="postcss">
.container {
  display: block;
  height: 100vh;
  width: 100vw;
  padding: 2em;
  background: var(--background, #ccc);
  
  .square {
    position: absolute;
    top: 2em;
    left: 2em;
    
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

  svg {
    width: 100%;
    height: 100%;
  }
  svg * {
    /*    Removes little gaps between the shapes */
    shape-rendering: geometricPrecision;
  }
}

</style>
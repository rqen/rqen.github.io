import gsap from 'gsap'
import tinycolor from 'tinycolor2'


const state = {
  gap: 9,
  itemWidth: 100,
  itemHeight: 86.6,
  // hexagonPath: "M100 43.3013L75 86.6026H25L0 43.3013L25 0L75 2.18557e-06L100 43.3013Z",
  showItemCount: false,
  // proximity: 500,
  // proximity: window.innerWidth / 8,
  proximity: 500,
  rnd: gsap.utils.random,
  // colorPalette: null,
}
const allColors = ref([])
const colorPalette = ref([])
const squares = ref([])
let squaresDom = ''


const drawGrid = () => {
  if (process.client) {
    const { itemHeight, itemWidth, gap } = state
    const xAmount = Math.ceil(window.innerWidth / (itemWidth + (gap * 2)))
    const yAmount = Math.ceil(window.innerHeight / (itemHeight + (gap * 2)))
    let rotate;
    let itemCount = 0
    for (let i = -1; i < yAmount; i++) {
      for (let j = -1; j < xAmount; j++) {
        const offset = i % 2 === 0 ? 0 : 83
        const xPos = j * (itemWidth + itemWidth / 2 + gap * 2) + offset
        const yPos = i * (itemHeight / 2 + gap)
        itemCount++
        squares.value.push(makeSquare(xPos, yPos, rotate, itemCount))
      }
    }
    console.log('squares: ', squares.value)
  }
  return squares.value
}

const makeSquare = (x, y, rotate, itemCount) => {
  // console.log(x)
  // const elm = document.createElement('div')
  const elm = {
    style: {
      top: undefined,
      left: undefined,
      width: undefined,
      height: undefined,
      backgroundColor: '',
    },
    rotation: 0, // gets set by mousemove
    classList: undefined,
    child: undefined,
  }
  elm.style.top = y * 2 + 'px'
  elm.style.topRaw = y * 2
  elm.style.left = x + 'px'
  elm.style.leftRaw = x
  elm.style.width = state.itemWidth + 'px'
  elm.style.widthRaw = state.itemWidth
  elm.style.height = state.itemHeight + 'px'
  elm.style.heightRaw = state.itemHeight
  // elm.style.transform = 'translate('+ x +'px, '+ (y * 2) +'px) rotate(var(--rotate, 0)) scale(var(--scale, 0))'
  // elm.style.transform = 'rotate(var(--rotate, 0)) scale(var(--scale, .2))' // for scaling
  // elm.style.transform = 'rotate(var(--rotate, 0)) scale(var(--scale, 1))' // for rotating
  elm.style.transform = 'scale(var(--scale, 1))' // for rotating
  elm.classList = 'square'

  // elm.innerText = this.state.showItemCount ? itemCount : ''
  elm.style.backgroundColor = gsap.utils.random(colorPalette.value)
  elm.child = drawSquareInner()
  // console.log("🚀 ~ makeSquare ~ elm.child:", elm.child)
  
  // elm.child = drawSquareInner()

  return elm
}

const drawSquareInner = () => {
  const bdrtopc = gsap.utils.random(colorPalette.value)
  // console.log("🚀 ~ drawSquareInner ~ colorPalette.value:", colorPalette.value)
  const bdrbtmc = gsap.utils.random(colorPalette.value)
  const bgc = gsap.utils.random(colorPalette.value)
  return {
    classList: 'square-inner',
    style: {
      borderTop: bdrtopc,
      borderBottom: bdrbtmc,
      backgroundColor: bgc,
    }
  }
}

// export const handleMouseMove = (event) => {
//   // console.log('mousemove')
//   let pointerX = event.pageX
//   let pointerY = event.pageY

//   /*
//   // Testing on a single .square
//   // const elm = document.querySelector('.square')
//   document.querySelectorAll('.square')[0].forEach(elm=>{
//     this.calculateDistance(elm, this.pointerX, this.pointerY)
//   })
//   */

//   requestAnimationFrame(() => {
//     squaresDom.forEach((elm) => {
//       calculateDistance(elm, pointerX, pointerY)
//     })
//   })
// }

export const calculateDistance = (elem, mouseX, mouseY) => {
  const {
    widthRaw: elmWidth,
    heightRaw: elmHeight,
    leftRaw: x,
    topRaw: y
  } = elem.style

  const { proximity: prox } = state
  // console.log('rotate prox: ', prox)

  const distance = Math.floor(
    Math.sqrt(
      Math.pow(mouseX - (x + (elmWidth / 2)), 2) +
      Math.pow(mouseY - (y + (elmHeight / 2)), 2)
    )
  ) - Math.round(elmWidth)
  // console.log("🚀 ~ Math.pow(mouseX - (x + (elmWidth / 2)), 2):", Math.pow(mouseX - (x + (elmWidth / 2)), 2))
  // console.log('Math.sqrt', Math.sqrt(
  // Math.pow(mouseX - (x + (elmWidth / 2)), 2) +
  //   Math.pow(mouseY - (y + (elmHeight / 2)), 2)
  //   ))

  let rotate;
  if (distance < prox) {
    // rotate = ((prox - distance) / 10000) // for scaling
    rotate = ((prox - distance) / 100) * 3 // for rotating
    console.log(rotate)
  } else {
    rotate = 0;
  }

  // if (x < (window.innerWidth / 2)) {
  if (x < mouseX) {
    rotate = rotate * -1
  }
  // elem.style.setProperty('--scale', rotate)
  // elem.style.setProperty('--rotate', rotate + 'deg')
  console.log("🚀 ~ rotate:", rotate)
  return `${rotate}deg`
}

const generateNewGrid = (colors) => {
  console.log('generate2 - colors: ', colors)
  colorPalette.value = gsap.utils.random(colors)
  
  // const bg = makeBackgroundColor()
  // console.log('bg: ', bg)
  // gsap.to('body', {
  //   '--background': bg,
  //   duration: 0.3
  // })
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
  // innerHTML = ''
  const grid = drawGrid(colorPalette)
  // console.log("🚀 ~ generateNewGrid ~ grid:", grid)
  
  return grid
}

// const makeBackgroundColor = () => {
//   return tinycolor
//     .mix(colorPalette[0], colorPalette[1], 50)
//     .desaturate(10)
//     .toString()
// }
const getTwoUniqueInRange = (min, max) => {
  let first, second
  first = state.rnd(min, max, 1)
  do {
    second = state.rnd(min, max, 1)
  } while (first === second)

  return [first, second]
}


export const getColors = async () => {
  const colors = await fetch(
    'https://unpkg.com/nice-color-palettes@3.0.0/100.json'
  ).then((response) => {
    return response.json()
  })
  // console.log("🚀 ~ getColors ~ colors:", colors)
  return colors
}

export default () => {
  return {
    getColors,
    generateNewGrid,
    calculateDistance,
  }
}

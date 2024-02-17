import { breakpoints } from './utils/breakpoints.js'

export const DEFAULT_ZOOM = 0.6

const functions = {
  units: multiplier => `${multiplier / 2}rem`,
  cols: i => `calc(var(--cols) * ${i} - var(--gutter))`,
  push: i => `calc(var(--cols) * ${i})`,
  'page-width': () => `${breakpoints['page-max']}px`,
  // increase given value when screen is large
  // creates a fluid typography on large screens
  zoomable: (px, zoom = DEFAULT_ZOOM, from = breakpoints['page-max']) =>
    `max(${px}, calc(${px} + ${parseInt(px) * zoom
    } * (100vw - ${from}px) / ${from}))`,
  'cols-amount': cols => `(min(var(--grid-cols), ${cols}))`
}

// const customMedia = Object.entries(breakpoints).reduce(
//   (acc, [key, val]) => ({
//     ...acc,
//     [`--until-${key}`]: `(max-width: ${val - 1}px)`,
//     [`--${key}`]: `(min-width: ${val}px)`,
//   }),
//   {}
// )

export default {
  plugins: {
    // 'postcss-for': {},
    'postcss-nested': {},
    'postcss-functions': { functions },
    // 'postcss-custom-media': {
    //   importFrom: [{ customMedia }],
    // },
    // 'postcss-easings': {},
  },
}


import { breakpoints } from '~/utils/breakpoints'
import { DEFAULT_ZOOM } from '~/postcss.config'

const { width } = useScreen()

const zoom = DEFAULT_ZOOM
const from = breakpoints['page-max']

/**
 * the css value for 1em increases on bid screens,
 * this computed value always returns 1 css-em
 *
 * f.ex. '3.4 * em.value'
 */

/**
 * note: fucked on first page load..
 * todo: fix that............
 */

export default computed(() => {
  const innerWidth = process.client ? width.value : 0
  const zoomedValue = 10 + (10 * zoom * (innerWidth - from)) / from
  return Math.max(10, zoomedValue)
})

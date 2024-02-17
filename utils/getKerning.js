import { kerning } from '~/utils/kerning.js'

export const getKerning = string => {
  const chars = string.split('')
  return chars.map((letter, idx) => {
    const marginLeft = kerning['' + chars[idx - 1] + letter]

    return {
      letter: letter,
      marginLeft: idx === 0 || !marginLeft ? 0 : marginLeft,
    }
  })
}

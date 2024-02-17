export default (margin, suffix = '') => {
  const asEms = val => val / 20 + 'rem'

  const getCSSVar = (value, size, side) => {
    return value < 0 ? `--m${side + size + suffix}` : `--p${side + size + suffix}`
  }

  const getEms = value => {
    if (!value || value === 0) return null

    return asEms(value)
  }

  return {
    [getCSSVar(margin.desktop.top, 'd', 't')]: getEms(margin.desktop.top),
    [getCSSVar(margin.desktop.bottom, 'd', 'b')]: getEms(margin.desktop.bottom),
    [getCSSVar(margin.mobile.top, 'm', 't')]: getEms(margin.mobile.top),
    [getCSSVar(margin.mobile.bottom, 'm', 'b')]: getEms(margin.mobile.bottom),
  }
}

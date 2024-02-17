export default data => {
  const columnsClass = computed(() => {
    const { width, widthMobile } = data

    const translatedM = widthMobile === '-1' ? 'auto' : widthMobile
    const translated = width === '-1' ? 'auto' : width

    const mobileClass = 'cols-md-' + translatedM
    const desktopClass = 'cols-' + translated

    return [
      translatedM && translatedM !== 'auto' && mobileClass,
      translated && translated !== 'auto' && desktopClass,
    ]
  })

  return columnsClass
}

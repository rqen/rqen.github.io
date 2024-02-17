const { width } = useScreen()

export const isMobile = computed(() => {
  return process.client && width.value <= 900
})

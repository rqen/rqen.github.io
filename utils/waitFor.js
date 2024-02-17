export async function waitFor(something) {
  return new Promise(resolve => {
    const tick = () =>
      requestAnimationFrame(
        something() ? () => requestAnimationFrame(resolve) : tick
      )
    tick()
  })
}

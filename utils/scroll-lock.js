function preventDefault(e) {
  e.preventDefault()
}



function disableScroll() {
  document.body.addEventListener('touchmove', preventDefault, {
    passive: false,
  })
  document.body.addEventListener('DOMMouseScroll', preventDefault, {
    passive: false,
  });
  document.body.addEventListener('wheel', preventDefault, {
    passive: false,
  });
}

function enableScroll() {
  document.body.removeEventListener('touchmove', preventDefault)
  document.body.removeEventListener('DOMMouseScroll', preventDefault);
  document.body.removeEventListener('wheel', preventDefault);
}

export default lock => {
  if (process.client) {
    if (lock) {
      document.body.style.overflow = 'hidden'
      disableScroll()
    } else {
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('height')
      enableScroll()
    }
  }
}

export const fullscreen = elem => {
  //# for most browsers
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  }

  //# for Safari (older versions)
  else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen()
  }

  //# for Safari (newer versions)
  else if (elem.webkitEnterFullscreen) {
    elem.webkitEnterFullscreen()
  }

  //# for Safari iPhone (where only the Video tag itself can be fullscreen)
  else if (elem.children[0].webkitEnterFullscreen) {
    elem.children[0].webkitEnterFullscreen()
    //toggle_controls(); //# your own function to show/hide iOS media controls
  }

  //# for Internet Explorer 11
  else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen()
  }
}

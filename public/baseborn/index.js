
document.addEventListener('DOMContentLoaded', ()=>{
  console.log('DOM Loaded')
})

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      // entry.target.style.backgroundColor = increasingColor.replace(
      //   "ratio",
      //   entry.intersectionRatio,
      // );
    } else {
      // entry.target.style.backgroundColor = decreasingColor.replace(
      //   "ratio",
      //   entry.intersectionRatio,
      // );
    }

    prevRatio = entry.intersectionRatio;
  });
}




// intersection observer

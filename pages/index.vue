<script setup>
import gsap from 'gsap'

const colors = ['red', 'green', 'blue', '#bada55']
const checkersBgColor = ref('')

const findRandomColor = ()=>{
  let randomColor = gsap.utils.random(colors)
  if (randomColor === checkersBgColor.value) {
    checkersBgColor.value = findRandomColor()
  }
  return randomColor
}

const setBg = ()=>{
  checkersBgColor.value = findRandomColor()
  console.log("🚀 ~ setBg ~ checkersBgColor.value:", checkersBgColor.value)
}
</script>

<template>
  <div @click="setBg">
    <div class="content">

      <div class="projects">
        <h2>Projects worth mentioning</h2>
        <ul class="projects-list">
          <li class="project">
            <h3 class="heading">Implement</h3>
          </li>
          <li class="project">
            <h3 class="heading">One and Only Musicals</h3>
          </li>
          <li class="project">
            <h3 class="heading">BoConcept</h3>
          </li>
          <li class="project">
            <h3 class="heading">Magasin</h3>
          </li>
          <li class="project">
            <h3 class="heading">Tryg</h3>
          </li>
        </ul>
      </div>
    </div>

    <div class="bgs">
      <CheckersBackground :checkersBgColor="checkersBgColor" :showGrid="true" />
      <GlBackground />
    </div>
  </div>
</template>

<style lang="postcss">
.content {
  position: relative;
  z-index: 2;
}
.bgs {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
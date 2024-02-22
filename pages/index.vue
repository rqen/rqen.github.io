<script setup>
import gsap from 'gsap'

const colors = ['#fff', '#fdfdfd', '#ededed', '#bada55']
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
      <div class="outbound">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/christian-r%C3%B8en-hansen-121b696">LinkedIn</a>
          </li>
          <li>
            <a href="https://codepen.io/rqendotcom/">
              <Icon name="codepen" />
            </a>
          </li>
          <li>
            <a href="https://github.com/rqen">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/rqen">Twitter</a>
          </li>
        </ul>
      </div>

      <div class="projects">
        <h2 class="tagline">A few brands i've helped over the years</h2>
        <ul class="projects-list">
          <li class="project">
            <h3 class="heading">Implement Consulting Group</h3>
            <a href="https://implementconsultinggroup.com/" class="link">implementconsultinggroup.com</a>
          </li>
          <li class="project">
            <h3 class="heading">One and Only Musicals</h3>
            <a href="https://oneandonlymusicals.dk/" class="link">oneandonlymusicals.dk</a>
          </li>
          <li class="project">
            <h3 class="heading">WSA</h3>
            <a href="https://www.wsa.com/" class="link">wsa.com</a>
          </li>
          <li class="project">
            <h3 class="heading">BoConcept</h3>
            <a href="https://boconcept.com/" class="link">boconcept.com</a>
          </li>
          <li class="project">
            <h3 class="heading">Muuto</h3>
            <a href="https://muuto.com/" class="link">muuto.com</a>
          </li>
          <li class="project">
            <h3 class="heading">Magasin</h3>
            <a href="https://magasin.dk/" class="link">magasin.dk</a>
          </li>
          <li class="project">
            <h3 class="heading">Tryg</h3>
            <a href="https://tryg.dk/" class="link">tryg.dk</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bgs">
      <!-- <CheckersBackground :checkersBgColor="checkersBgColor" :showGrid="true" /> -->
      <GlBackground />
    </div>
  </div>
</template>

<style lang="postcss">
.content {
  position: relative;
  max-height: 100vh;
  overflow: auto;
  z-index: 2;
}
.bgs {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
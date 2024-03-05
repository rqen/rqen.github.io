<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'

const colors = ['#fff', '#fdfdfd', '#ededed', '#bada55']
const checkersBgColor = ref('')

const doIntro = ref(false)

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

onMounted(()=>{
  setTimeout(()=>{
    doIntro.value = true
  }, 500)
})
</script>

<template>
  <div @click="setBg">
    <div class="content" :class="{'-intro': !doIntro}">
      <div class="title">
        <div class="upper">
          <div>RQEN</div>
          <div>.COM</div>
        </div>
        <div class="spacer"></div>
        <div class="lower">
          <div>CHRISTIAN</div>
          <div>RØEN</div>
        </div>
      </div>
      <div class="outbound page-margin">
        <ul class="outbound-list">
          <li>
            <a class="link" href="https://www.linkedin.com/in/christian-r%C3%B8en-hansen-121b696" title="LinkedIn">LinkedIn</a>
          </li>
          <li>
            <a href="https://codepen.io/rqendotcom/" title="Codepen">
              <Icon name="codepen" />
            </a>
          </li>
          <li>
            <a class="link" href="https://github.com/rqen" title="Github">Github</a>
          </li>
          <li>
            <a class="link" href="https://twitter.com/rqen" title="X or whatever it's currently called">Twitter</a>
          </li>
        </ul>
      </div>

      <div class="projects page-margin mt-4">
        <h2 class="tagline">A few brands i've helped over the years</h2>
        <ul class="projects-list">
          <li class="project">
            <!-- <h3 class="heading">Implement Consulting Group</h3> -->
            <a 
            target="_blank" 
            href="https://implementconsultinggroup.com/"
            class="link"
            rel="noopener noreferrer">Implement Consulting Group</a>
          </li>
          <li class="project">
            <!-- <h3 class="heading">One and Only Musicals</h3> -->
            <a 
            target="_blank" 
            href="https://oneandonlymusicals.dk/"
            class="link"
            rel="noopener noreferrer">One and Only Musicals</a>
          </li>
          <li class="project">
            <!-- <h3 class="heading">WSA</h3> -->
            <a 
            target="_blank" 
            href="https://www.wsa.com
            " class="lin
            rel="noopener noreferrer"k">wsa.com</a>
          </li>
          <li class="project">
            <!-- <h3 class="heading">BoConcept</h3> -->
            <a 
            target="_blank" 
            href="https://boconcept.com/"
            class="link"
            rel="noopener noreferrer">BoConcept</a>
          </li>
          <li class="project">
            <!-- <h3 class="heading">Pandora</h3> -->
            <a 
            href="#nolongeronline"
            class="no-link"
            rel="noopener noreferrer">Pandora - product launch sites</a>
          </li>
          <li class="project">
            <!-- <h3 class="heading">Muuto</h3> -->
            <a 
            target="_blank" 
            href="https://muuto.com/"
            class="link"
            rel="noopener noreferrer">Muuto</a>
          </li>
          <li class="project">
            <!-- <h3 class="heading">Magasin</h3> -->
            <a 
            target="_blank" 
            href="https://magasin.dk/"
            class="link"
            rel="noopener noreferrer">Magasin</a>
          </li>
          <li class="project">
            <!-- <h3 class="heading">Tryg</h3> -->
            <a 
            target="_blank" 
            href="https://tryg.dk/"
            class="link"
            rel="noopener noreferrer">Tryg</a>
          </li>
        </ul>
      </div>
    </div> 

    <div class="bgs">
      <!-- <CheckersBackground :checkersBgColor="checkersBgColor" :showGrid="true" /> -->
      <!-- <GlBackground /> -->
    </div>
  </div>
</template>

<style lang="postcss">
.content {
  position: relative;
  max-height: 100vh;
  z-index: 2;

  &.-intro {
    .upper {
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    .lower {
      clip-path: polygon(0 0%, 100% 0%, 100% 0%, 0% 0%);
    }
  }
}

.page-margin {
  margin-inline: 5vw;
}

.link {
  position: relative;

  &:hover:after {
    scale: 1 1;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 20px;
    height: 1px;
    scale: 0 1;
    background-color: currentColor;
    transform-origin: 0 100%;
    transition: scale .5s ease;
  }
}

.title {
  position: relative;
  width: 90vw;
  height: 30vh;
  margin: 5vh auto 0;
  font-size: 60px;
  font-weight: bold;
  font-family: system-ui, serif;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, max-content));
  place-content: center;
  /* gap: .4em; */

  .upper,
  .lower {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
  }

  .upper {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 2 / -1;
    margin-left: auto;
    margin-right: 0;
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 2.5s ease-out;
  }

  .lower {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: clip-path 2.5s .5s ease-out;

    div:first-child {
      padding-right: .4em;
    }
  }

  .spacer {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    height: 1px;
    background-color: black;
    transition: clip-path 1.5s .5s ease;
  }
}

.outbound {
  text-align: center;
}
.outbound-list {
  margin-inline: auto;

  li {
    display: inline-block;
    padding-right: 1em;
  }
}

.tagline {
  text-transform: uppercase;
  font-weight: lighter;
}
.projects {
  width: max-content;
  margin-inline: auto;
}
.projects-list {
  position: relative;
  height: 7em;
  overflow: scroll;
}

.no-link {
  cursor: default;
}

.bgs {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
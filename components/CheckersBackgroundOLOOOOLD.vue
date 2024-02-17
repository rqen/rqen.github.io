<script setup>

const vw = ref(0)
const vh = ref(0)

onMounted(()=>{
  vw.value = window.innerWidth
  console.log("🚀 ~ vw:", vw)
  vh.value = window.innerHeight
  console.log("🚀 ~ vh:", vh)
})

</script>

<template>
  <div>
    vw: {{ vw }}
    <br>
    vh: {{ vh }}

  </div>
</template>

<style lang="postcss">
  
</style>
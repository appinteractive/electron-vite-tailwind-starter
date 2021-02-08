<template>
  <div class="h-screen w-screen flex flex-col pt-12">
    <TopBar />
    <!-- [ HERE COMES YOUR CONTENT ] -->
    <transition name="fade" appear>
      <div class="flex flex-col items-center justify-center h-full pb-0">
        <img class="h-48 ml-5" src="/logo.png" draggable="false" />
      </div>
    </transition>
  </div>
</template>

<script>
import TopBar from '/~/components/layout/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar,
  },
}
</script>

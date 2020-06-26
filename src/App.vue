<template>
  <div class="h-screen w-screen flex flex-col pt-12">
    <TopBar />
    <!-- [ HERE COMES YOUR CONTENT ] -->
    <transition name="fade" appear>
      <div class="flex flex-col items-center justify-center h-full pb-0">
        <img class="h-32 ml-5" src="/logo.png" draggable="false" />
        <h1
          class="text-3xl tracking-wider text-primary-100 font-semibold items-center justify-center flex"
        >
          Electron <span class="font-semibold text-base px-6">+</span> Vite
          <span class="font-semibold text-base px-6">+</span> Tailwind
        </h1>
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

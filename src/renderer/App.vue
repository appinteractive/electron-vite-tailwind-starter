<template>
  <div class="h-screen w-screen flex flex-col pt-12">
    <atoms-top-bar />
    <!-- [ HERE COMES YOUR CONTENT ] -->
    <transition name="fade" appear>
      <div class="flex flex-col items-center justify-center h-full pb-0">
        <img class="h-48 ml-5" src="/logo.png" draggable="false" />
      </div>
    </transition>
  </div>
</template>

<script>
import AtomsTopBar from './components/atoms/TopBar.vue'

export default {
  components: { AtomsTopBar },
  name: 'App',
}
</script>

<script setup>
import { Toaster, toast } from 'vue-sonner'
import index from './views/dashboard/index.vue'
</script>

<template>
  <Toaster
      richColors position="top-right"
      :toastOptions="{
            class: 'pe-2 ps-2 pt-5 pb-5',
          }"
  />
  <index/>
</template>

<style scoped>

</style>

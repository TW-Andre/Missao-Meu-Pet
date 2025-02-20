<script setup>
import { Toaster, toast } from 'vue-sonner'
import DashboardIndex from './views/dashboard/index.vue'
import {onMounted} from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <Toaster
      richColors position="top-right"
      :toastOptions="{
            class: 'pe-2 ps-2 pt-5 pb-5',
          }"
  />

  <DashboardIndex />
</template>

<style scoped>

</style>

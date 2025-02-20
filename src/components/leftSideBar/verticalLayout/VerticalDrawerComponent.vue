<script setup>
import {ref, watch} from "vue";

let drawer = ref(true);
let rail   = ref(true);

let icon = ref('mdi-chevron-right')

watch(rail, ()=> {
  icon.value = rail.value ? 'mdi-chevron-right' : 'mdi-chevron-left'
})
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
      >
        <v-list-item
            prepend-avatar=""
            title="André"
            nav
        >
          <template v-slot:append>
            <v-btn
                :icon="icon"
                variant="text"
                color="info"
                @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

</template>

<style scoped>

</style>

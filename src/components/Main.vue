<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list nav>
        <v-list-item title="Navigation drawer" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" height="300">
      <v-container>
        <v-sheet
            border="dashed md"
            color="surface-light"
            height="200"
            rounded="lg"
            width="100%"
        ></v-sheet>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { name } = useDisplay()

// const height = computed(() => {
//   // name is reactive and
//   // must use .value
//   switch (name.value) {
//     case 'xs': return 220
//     case 'sm': return 400
//     case 'md': return 500
//     case 'lg': return 600
//     case 'xl': return 800
//     case 'xxl': return 1200
//   }
//
//   return undefined
// })
</script>

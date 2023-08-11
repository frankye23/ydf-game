<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'

import getGameList from '@/api'
import { onMounted, reactive } from 'vue'

const state = reactive<any>({
  gameList: []
})

onMounted(async () => {
  const res = await getGameList()
  state.gameList = res
  // console.log(state.gameList)
})
</script>

<template>
  <Vue3Marquee>
    <img
      v-for="img in state.gameList"
      :key="img"
      :src="`https://ewr1.vultrobjects.com/pic/${img.Key}`"
      class="h-24 w-24 mx-2"
    />
  </Vue3Marquee>
</template>
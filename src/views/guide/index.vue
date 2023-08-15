<template>
  <Renderer>
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box>
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script lang="ts" setup>
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'
</script>
<script setup lang="ts">
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <div
    class="w-full max-h-full min-h-screen sm:max-h-full flex flex-col justify-between bg-gradient-to-br from-[#d6f3ff] from-10% via-[#f4f6ff] via-50% to-[#dbe1ff] to-90%">
    <div>
      <!-- header -->
      <LayoutHeader />

      <!-- main -->
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <main class="px-2 sm:px-0">
          <router-view />
        </main>
      </div>
    </div>

    <!-- footer -->
    <LayoutFooter class="mt-10" />
  </div>
</template>
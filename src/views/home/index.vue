<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
</script>

<template>
  <div class="container mx-auto">
    <div
      class="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/polygon.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('../svg/component/polygon-dark.svg')]">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="flex justify-center">
          <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
            href="#">
            New games ahead - Here to find out
            <span
              class="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </span>
          </a>
        </div>

        <div class="mt-5 max-w-2xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Let's Explore
            <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Game</span>
          </h1>
        </div>

        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-gray-400">A community for game enthusiasts to connect, share, and
            discover exciting games. Here, you can engage with gamers worldwide, exchange experiences, share game reviews,
            and explore unique and innovative game titles.
          </p>
        </div>

        <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
            href="#">
            Get started
            <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </a>
          <a class="relative group inline-flex justify-center items-center gap-x-3.5 text-center bg-white border hover:border-gray-300 shadow-sm font-mono text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition p-2 pl-4 dark:bg-slate-900 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            href="javascript:;">
            Start with trending
            <span
              class="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 dark:bg-gray-700 dark:text-gray-400">
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </span>
          </a>
        </div>

        <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
          <span class="text-sm text-gray-600 dark:text-gray-400">Platform:</span>
          <img src="../../assets/steam.png" alt="" class="w-auto h-8 rounded-full" />
          <svg class="h-5 w-5 text-gray-300 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
          </svg>
          <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
            href="#">
            Discovering Guide
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
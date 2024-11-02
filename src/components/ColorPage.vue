<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden pt-10">
    <header class="flex flex-col gap-4 p-4 h-1/3 overflow-hidden">
      <h1 class="text-4xl text-center">Choose Colour</h1>
      <input class="mt-2 w-full h-16 rounded-lg" type="color" :value="colorInput" @change="(e) => setColor((e.target as HTMLInputElement).value)" />
      <div class="flex flex-row">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4 mr-4 h-16" @click="() => addColor()">Add</button>
        <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4 h-16" @click="clearColors">Clear</button>
      </div>
    </header>
    <main class="flex h-2/3 overflow-y-auto">
      <div class="w-full">
        <div v-for="color in colors" class="w-1/2 h-40 inline-block p-4">
          <ColorBox :key="color.id" :color="color.hex" :colId="color.id" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ColorBox from '@/components/ColorBox.vue'
import { useColors } from '@/composables/useColors'

const { colors, getColors, addColor, clearColors, setColor, colorInput } = useColors()

onMounted(() => {
  getColors()
})
</script>

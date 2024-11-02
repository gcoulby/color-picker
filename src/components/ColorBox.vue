<template>
  <div class="w-full h-full p-4 content-center cursor-pointer" :style="`background: ${color};`" @click="() => tryDeleteColor()">
    <BinIcon v-if="showDelete" color="#fff" class="w-10 h-10 m-auto" />
  </div>
</template>

<script setup lang="ts">
import { useColors } from '@/composables/useColors'
import { ref } from 'vue'
import BinIcon from '@/components/icons/IconBin.vue'
const showDelete = ref(false)
const { removeColor } = useColors()
const props = defineProps<{
  color: string
  colId: string
}>()

const tryDeleteColor = () => {
  if (!showDelete.value) {
    showDelete.value = !showDelete.value
    setTimeout(() => {
      showDelete.value = false
    }, 3000)
  } else {
    removeColor(props.colId)
  }
}
</script>

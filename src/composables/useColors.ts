import { v4 } from 'uuid'
import { ref } from 'vue'

interface Color {
  id: string
  hex: string
}

const colors = ref<Color[]>([])
const colorInput = ref('#000000')

export const useColors = () => {
  const setColor = (color: string) => {
    console.log(color)
    colorInput.value = color
  }

  const addColor = () => {
    colors.value.push({ id: v4(), hex: colorInput.value })
    localStorage.setItem('colors', JSON.stringify(colors.value))
  }

  const getColors = () => {
    const colorsFromStorage = localStorage.getItem('colors')
    if (colorsFromStorage) {
      colors.value = JSON.parse(colorsFromStorage)
    }
  }

  const removeColor = (id: string) => {
    colors.value = colors.value.filter((color) => color.id !== id)
    localStorage.setItem('colors', JSON.stringify(colors.value))
  }

  const clearColors = () => {
    colors.value = []
    localStorage.removeItem('colors')
  }

  return { colors, colorInput, setColor, addColor, getColors, clearColors, removeColor }
}

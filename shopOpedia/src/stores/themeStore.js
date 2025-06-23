import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('themeStore', () => {
  // state
  const theme = ref('dark')
  // action
  function setTheme(newTheme) {
    theme.value = newTheme
    const bodyElement = document.body
    bodyElement.setAttribute('data-bs-theme', newTheme)
  }

  return { theme, setTheme }
})

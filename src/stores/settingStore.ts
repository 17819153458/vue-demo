import { defineStore } from 'pinia'
import { reactive } from 'vue'

export interface setting {
  collapse: boolean
}

export const useSettingStore = defineStore('setting', () => {
  const state = reactive<setting>({
    collapse: false,
  })
  const toggleCollapse = () => {
    state.collapse = !state.collapse
  }
  function updateSetting(setting: Partial<setting>) {
    Object.assign(state, setting)
  }
  return { state, toggleCollapse, updateSetting }
})

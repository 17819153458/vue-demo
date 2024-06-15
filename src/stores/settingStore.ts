import { debounce } from 'lodash-es'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export interface setting {
  collapse: boolean
}

export const useSettingStore = defineStore('setting', () => {
  const state = reactive<setting>({
    collapse: false,
  })
  const toggleCollapse = debounce(() => {
    state.collapse = !state.collapse
  }, 500)
  function updateSetting(setting: Partial<setting>) {
    Object.assign(state, setting)
  }
  return { state, toggleCollapse, updateSetting }
})

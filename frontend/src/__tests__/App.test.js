import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('has the correct structure', () => {
    const wrapper = mount(App)
    expect(wrapper.find('div').exists()).toBe(true)
  })
})

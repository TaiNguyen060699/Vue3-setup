<template>
  <input 
    type="text"
    :placeholder="placeholder"
    :class="classes"
  >
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value as string) !== -1;
    },
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const classes = computed(() => ({
  'storybook-input': true,
  [`storybook-input--${props.size}`]: true,
}))
</script>

<style lang="scss">
@import './Input.scss'
</style>
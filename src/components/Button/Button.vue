<template>
  <button 
    type="button" 
    :class="classes" 
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'primary',
  },
  // eslint-disable-next-line vue/require-default-prop
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value as string) !== -1;
    },
  },
})

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const classes = computed(() => ({
  'storybook-button': true,
  [`storybook-button--${props.variant}`]: true,
  [`storybook-button--${props.size || 'medium'}`]: true,
}))

const onClick = () => {
  emit('click', 1)
}
</script>
<style lang="scss">
@import  './Button.scss'
</style>
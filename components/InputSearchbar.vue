<template>
  <UFormGroup required class="flex-1">
    <UInput
      v-model="q"
      name="q"
      type="url"
      placeholder="https://hmpg.net"
      icon="i-heroicons-computer-desktop-20-solid"
      autocomplete="off"
      required
      :ui="{ icon: { trailing: { pointer: '' } } }"
    >
      <template #trailing>
        <UButton
          v-show="q || q !== null"
          color="gray"
          variant="link"
          icon="i-heroicons-x-mark-20-solid"
          :padded="false"
          @click="q = null"
        />
      </template>
    </UInput>
  </UFormGroup>
</template>

<script setup lang="ts">
const q = defineModel({ type: String, default: null })
</script>

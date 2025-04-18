<template>
  <UFormField required class="w-full flex-1">
    <UInput
      v-model="q"
      name="q"
      type="url"
      placeholder="https://hmpg.net"
      icon="i-heroicons-computer-desktop-20-solid"
      autocomplete="off"
      required
      :ui="{ trailing: 'pe-1' }"
      class="w-full"
    >
      <template v-if="q || q !== null" #trailing>
        <UButton color="neutral" variant="link" icon="i-heroicons-x-mark-20-solid" :padded="false" @click="q = undefined" />
      </template>
    </UInput>
  </UFormField>
</template>

<script setup lang="ts">
const q = defineModel({ type: String, default: null })
</script>

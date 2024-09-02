<template>
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800">
    <UContainer class="space-between flex h-14 items-center">
      <NuxtLink to="http://www.wtfpl.net" target="_blank" external>
        <img class="h-4 mr-2 bg-white rounded-full" src="/img/WTFPL.svg" />
      </NuxtLink>
      <span class="text-sm text-gray-500"> {{ new Date().getFullYear() }} roiLeo.</span>
      <UButton class="ml-auto" color="gray" size="md" label="View on GitHub" icon="i-simple-icons-github" to="https://github.com/roiLeo/open-preview" target="_blank" />
    </UContainer>
  </footer>
</template>

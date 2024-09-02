<template>
  <header class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
    <nav class="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 flex items-center justify-between px-4 mx-auto dark:bg-neutral-900 dark:border-neutral-700">
      <NuxtLink class="font-bold" to="/">OpenPreview</NuxtLink>
      <div class="flex">
        <ColorPicker />
        <ColorModeButton />
      </div>
    </nav>
  </header>
</template>

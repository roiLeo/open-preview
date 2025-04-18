<template>
  <div>
    <form @submit.prevent="fetch">
      <div class="flex gap-2">
        <InputSearchbar v-model="query" />
        <UButton icon="i-heroicons-paper-airplane" square type="submit" />
      </div>
    </form>

    <div class="my-6">
      <h1 class="mb-4 text-2xl font-semibold">Preview</h1>
      <p class="text-xl text-neutral-400">See how your website will look on social media platforms. <br>This live preview ensures your metadata aligns with your content and branding.</p>
    </div>

    <div v-if="metadata" class="p-2 w-full space-y-8">
      <div>
        <h3 class="font-heading mb-2 font-medium">Facebook</h3>
        <div class="w-full max-w-full cursor-pointer">
          <div class="border-[1px] border-b-0 border-[#dadde1] bg-cover bg-center bg-no-repeat">
            <div class="w-full relative h-0" style="padding-top: 52.5%;">
              <img class="h-full w-full absolute top-0 object-cover block" :src="metadata.image">
            </div>
          </div>
          <div class="break-words border-[1px] border-[#dadde1] bg-[#f2f3f5] px-[12px] py-[10px] antialiased">
            <div class="overflow-hidden truncate whitespace-nowrap text-[12px] uppercase leading-[11px] text-[#606770]">
              {{ metadata.url?.replace(/(^\w+:|^)\/\//, '') }}
            </div>
            <div class="block h-[46px] max-h-[46px] border-separate select-none overflow-hidden break-words text-left">
              <div class="mt-[3px] truncate pt-[2px] text-[16px] font-semibold leading-[20px] text-[#1d2129]">
                {{ metadata.title }}
              </div>
              <div class="mt-[3px] block h-[18px] max-h-[80px] border-separate select-none overflow-hidden truncate whitespace-nowrap break-words text-left text-[14px] leading-[20px] text-[#606770]">
                {{ metadata.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 class="font-heading mb-2 font-medium">X</h3>
        <div class="-outline-offset-1 relative w-full max-w-full cursor-pointer overflow-hidden rounded-[0.85714em] border-[1px] border-[#e1e8ed] leading-[1.3em] text-black">
          <div class="bg-cover bg-center bg-no-repeat">
            <div class="w-full relative h-0" style="padding-top: 52.33%;">
              <img class="h-full w-full absolute top-0 object-cover block" :src="metadata.image">
            </div>
          </div>
          <div class="absolute bottom-2 left-2 text-xs text-white bg-black bg-opacity-40 px-[4px] py-[2px] rounded">
            {{ metadata.url?.replace(/(^\w+:|^)\/\//, '') }}
          </div>
        </div>
      </div>
      <div>
        <h3 class="font-heading mb-2 font-medium">Discord</h3>
        <div class="grid w-full max-w-full cursor-pointer items-start justify-self-start overflow-hidden rounded-[4px] border-l-[4px] border-[#202225] bg-[#2f3136]">
          <div class="inline-grid grid-cols-[auto] grid-rows-[auto] overflow-hidden pt-2 pr-4 pb-4 pl-3">
            <div class="mt-2 text-xs font-normal leading-4 text-white col-[1_/_1]"></div>
            <div class="mt-2 inline-block break-words text-base font-semibold text-[#00b0f4] col-[1_/_1]">
              {{ metadata.title }}
            </div>
            <div class="mt-2 whitespace-pre-line break-words border-0 p-0 text-sm font-normal text-[#dcddde] col-[1_/_1]">
              {{ metadata.description }}
            </div>
            <div class="mt-4 overflow-hidden rounded">
              <div class="relative block">
                <img :src="metadata.image" :alt="metadata.title">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Open-Preview | Preview Website Metadata',
  ogTitle: 'Open-Preview | Preview Website Metadata',
  description: 'Open-Preview is an advanced online tool designed to provide instant, comprehensive insights into any website\'s metadata and SEO characteristics',
  ogDescription: 'Open-Preview is an advanced online tool designed to provide instant, comprehensive insights into any website\'s metadata and SEO characteristics',
  ogImage: '/img/Open-Preview.png',
  twitterCard: 'summary_large_image',
})

const query = defineModel({ type: String })

const metadata = ref()

const fetch = async () => {
  metadata.value = await $fetch('/api/metadata', { query: { url: query.value } })
}
</script>

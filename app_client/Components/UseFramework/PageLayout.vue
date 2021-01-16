<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-white px-4 py-2 flex space-x-8">
      <XLink v-if="back" :href="back">Back</XLink>
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <XLink v-if="next" :href="next">Next</XLink>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "PageLayout",
  props: {
    title: {
      type: String,
      default: "Page Title",
    },
    back: {
      type: String,
      default: "",
    },
    next: {
      type: String,
      default: "",
    },
  },
};
</script>

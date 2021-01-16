<template>
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
    <div class="p-6">
      <p class="font-bold">{{ title }}</p>
      <p class="uppercase text-sm mt-2">Contact</p>
      <a class="underline text-sm hover:text-blue-500" :href="link">
        {{ linkText }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactBox",
  props: {
    title: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    linkText: {
      type: String,
      default: "",
    },
  },
};
</script>

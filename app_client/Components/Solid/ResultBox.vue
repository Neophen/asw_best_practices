<template>
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 text-center">
    <p class=""><span class="font-bold">Expected:</span> {{ title }}</p>
    <p class="mt-2"><span class="font-bold">Actual:</span> {{ result }}</p>
  </div>
</template>

<script>
export default {
  name: "ResultBox",
  props: {
    title: {
      type: String,
      default: "",
    },
    result: {
      type: String,
      default: "",
    },
  },
};
</script>

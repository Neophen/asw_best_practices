<template>
  <a :href="link" class="hover:text-blue-500">
    <span class="underline">{{ title }}</span>
    <XIcon icon="arrow-right" class="ml-2 w-3 h-2" />
  </a>
</template>

<script>
import XIcon from "../../Apex/Icons/XIcon.vue";

export default {
  name: "LegalLink",
  components: {
    XIcon,
  },
  props: {
      title: {
          type: String,
          default: ""
      },
      link: {
          type: String,
          default: ""
      },
  },
};
</script>

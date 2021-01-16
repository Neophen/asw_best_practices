<template>
  <svg class="inline-block fill-current">
    <use :href="iconPath" :xlink:href="iconPath" />
  </svg>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'XIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const iconPath = computed(
      // cache query is used for busting cache when you update the icons file, you need to increase this
      () => `/icons/dashboard.svg?cache="01"#${props.icon}`
    );

    return { iconPath };
  },
};
</script>

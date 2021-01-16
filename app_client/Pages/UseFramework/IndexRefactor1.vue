<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-white px-4 py-2 flex space-x-8">
      <XLink v-if="page.back" :href="page.back">Back</XLink>
      <h1 class="text-4xl font-bold">{{ page.title }}</h1>
      <XLink v-if="page.next" :href="page.next">Next</XLink>
    </div>
    <div class="p-12 md:flex items-start">
      <div class="flex-1 space-y-4">
        <div
          v-for="({ title, link, linkText }, i) in contactItems"
          :key="i"
          class="bg-white overflow-hidden shadow-sm sm:rounded-lg"
        >
          <div class="p-6">
            <p class="font-bold">{{ title }}</p>
            <p class="uppercase text-sm mt-2">Contact</p>
            <a class="underline text-sm hover:text-blue-500" :href="link">
              {{ linkText }}
            </a>
          </div>
        </div>
      </div>
      <div
        class="mt-8 md:mt-0 md:ml-8 bg-white overflow-hidden shadow-sm sm:rounded-lg p-6"
      >
        <div class="font-bold">Legal information</div>
        <ul class="mt-4">
          <li v-for="({ title, link }, i) in legalInformationItems" :key="i">
            <a :href="link" class="hover:text-blue-500">
              <span class="underline">{{ title }}</span>
              <XIcon icon="arrow-right" class="ml-2 w-3 h-2" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import XLink from "../../Apex/Buttons/XLink.vue";
import XIcon from "../../Apex/Icons/XIcon.vue";

export default {
  name: "UseFrameworkIndex",
  components: {
    XIcon,
    XLink,
  },
  setup() {
    const state = reactive({
      page: {
        title: "Use the framework",
        back: "/",
        next: "/framework/step2",
      },
      contactItems: [
        {
          title: "I need help or want to report a defect",
          link: "#support@some.com",
          linkText: "support@some.com",
        },
        {
          title: "I want to give feedback to the team",
          link: "#feedback@some.com",
          linkText: "feedback@some.com",
        },
        {
          title: "I want to donate to your cause",
          link: "#donate@some.com",
          linkText: "donate@some.com",
        },
      ],
      legalInformationItems: [
        {
          title: "Privacy Policy",
          link: "#privacy-policy",
        },
        {
          title: "Terms of Service",
          link: "#terms-of-services",
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

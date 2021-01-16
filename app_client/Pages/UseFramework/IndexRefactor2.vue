<template>
  <PageLayout v-bind="page">
    <div class="p-12 md:flex items-start">
      <div class="flex-1 space-y-4">
        <ContactBox v-for="(item, i) in contactItems" :key="i" v-bind="item" />
      </div>
      <div
        class="mt-8 md:mt-0 md:ml-8 bg-white overflow-hidden shadow-sm sm:rounded-lg p-6"
      >
        <div class="font-bold">Legal information</div>
        <ul class="mt-4">
          <li v-for="(item, i) in legalInformationItems" :key="i">
            <LegalLink v-bind="item" />
          </li>
        </ul>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import { reactive, toRefs } from "vue";
import PageLayout from "../../Components/UseFramework/PageLayout.vue";
import LegalLink from "../../Components/UseFramework/LegalLink.vue";
import ContactBox from "../../Components/UseFramework/ContactBox.vue";

export default {
  name: "UseFrameworkIndex",
  components: {
    // New
    PageLayout,
    LegalLink,
    ContactBox,
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

<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-white px-4 py-2 flex space-x-8">
      <XLink href="/">Back</XLink>
      <h1 class="text-4xl font-bold">Use the framework</h1>
      <XLink href="/framework/step2">Next</XLink>
    </div>
    <div class="p-12 md:flex items-start">
      <div class="flex-1 space-y-4">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6">
            <p class="font-bold">I need help or want to report a defect</p>
            <p class="uppercase text-sm mt-2">Contact</p>
            <a
              class="underline text-sm hover:text-blue-500"
              href="#support@some.com"
              >support@some.com</a
            >
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6">
            <p class="font-bold">I want to give feedback to the team</p>
            <p class="uppercase text-sm mt-2">Contact</p>
            <a
              class="underline text-sm hover:text-blue-500"
              href="#feedback@some.com"
              >feedback@some.com</a
            >
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6">
            <p class="font-bold">I want to donate to your cause</p>
            <p class="uppercase text-sm mt-2">Contact</p>
            <a
              class="underline text-sm hover:text-blue-500"
              href="#donate@some.com"
              >donate@some.com</a
            >
          </div>
        </div>
      </div>
      <div
        class="mt-8 md:mt-0 md:ml-8 bg-white overflow-hidden shadow-sm sm:rounded-lg p-6"
      >
        <div class="font-bold">Legal information</div>
        <ul class="mt-4">
          <li>
            <a href="#privacy-policy" class="hover:text-blue-500">
              <span class="underline">Privacy Policy</span>
              <XIcon icon="arrow-right" class="ml-2 w-3 h-2" />
            </a>
          </li>
          <li>
            <a href="#terms-of-services" class="hover:text-blue-500">
              <span class="underline">Terms of Service</span>
              <XIcon icon="arrow-right" class="ml-2 w-3 h-2" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import XLink from "../../Apex/Buttons/XLink.vue";
import XIcon from "../../Apex/Icons/XIcon.vue";

export default {
  name: "UseFrameworkIndex",
  components: {
    XIcon,
    XLink,
  },
};
</script>

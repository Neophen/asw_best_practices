<template>
  <PageLayout v-bind="page">
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            {{ __("You're logged in!") }}
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../../Layouts/PageLayout.vue";

export default {
  name: "DashboardIndex",
  components: {
    PageLayout,
  },
  setup() {
    return {
      page: {
        title: "Dashboard",
      },
    };
  },
};
</script>

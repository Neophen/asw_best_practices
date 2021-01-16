<template>
  <PageLayout v-bind="page">
    <div class="p-12 space-y-8">
      <ResultBox title="proceed" :result="proceed" />
      <ResultBox title="/login" :result="login" />
      <ResultBox title="/home" :result="home" />
      <ResultBox title="retry with: 1" :result="retry" />
    </div>
  </PageLayout>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "../../composables/useStore.js";

// import { useRouterCheck } from "../../composables/useRouterCheck.js";
import { useRouterCheck } from "../../composables/useRouterCheckRefactored.js";

import PageLayout from "../../Components/UseFramework/PageLayout.vue";
import ResultBox from "../../Components/Solid/ResultBox.vue";

export default {
  name: "SolidStep1",
  components: {
    PageLayout,
    ResultBox,
  },
  setup() {
    const state = reactive({
      page: {
        title: "Solid principles",
        back: "/",
      },
      proceed: "null",
      login: "null",
      home: "null",
      retry: "null",
    });

    const guard = async (to, next, store) => {
      await useRouterCheck(to, next, store);
    };

    guard(
      {
        path: "/goto-proceed",
        meta: {
          requiresAuth: true,
          permission: "can_do_x",
        },
        query: {
          orgId: 1,
        },
      },
      (result) => {
        state.proceed = result;
      },
      useStore()
    );

    guard(
      {
        path: "/goto-login",
        meta: {
          requiresAuth: true,
          permission: "can_do_x",
        },
        query: {
          orgId: 1,
        },
      },
      (result) => {
        state.login = result;
      },
      useStore(false)
    );

    guard(
      {
        path: "/goto-home",
        meta: {
          requiresAuth: true,
          permission: "can_do_z",
        },
        query: {
          orgId: 1,
        },
      },
      (result) => {
        state.home = result;
      },
      useStore()
    );

    guard(
      {
        path: "/goto-retry",
        meta: {
          requiresAuth: true,
          permission: "can_do_z",
        },
        query: {},
      },
      (result) => {
        state.retry = result;
      },
      useStore()
    );

    return {
      ...toRefs(state),
    };
  },
};
</script>

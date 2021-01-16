import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";
import "./index.css";

import StaticLayout from "./Layouts/StaticLayout.vue";
import { applyDirectivesToApp } from "./composables/useDirectives";

const el = document.getElementById("app");

const setDefaultLayout = ({ default: page }) => {
  page.layout = page.layout === undefined ? StaticLayout : page.layout;
  return page;
};

const app = createApp({
  render: () =>
    h(App, {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: (path) => {
        // To make dynamic imports work we need you to always use 'Folder/Component' paths
        const [folder, name] = path.split("/");
        return import(`./Pages/${folder}/${name}.vue`).then(setDefaultLayout);
      },
    }),
});

app.config.globalProperties.__ = (key) => key;

applyDirectivesToApp(app);
app.use(plugin);
app.mount(el);

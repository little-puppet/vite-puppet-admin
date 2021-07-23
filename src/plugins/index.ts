import router from "@/router";
import store from "@/store";
import {createApp} from "vue";
import config from '@/config'

export function init(app: ReturnType<typeof createApp>) {
  document.title = config.app.title
  app.use(store)
  app.use(router)

  const files: Record<string, { [key: string]: any }> = import.meta.globEager(
    "./modules/*.ts"
  );
  Object.keys(files).forEach((c: string) => {
    if (typeof files[c].default === "function") {
      files[c].default(app);
    }
  });
}

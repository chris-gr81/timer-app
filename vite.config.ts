import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/timer-app",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "/src/styles/variables.scss";',
      },
    },
  },
});

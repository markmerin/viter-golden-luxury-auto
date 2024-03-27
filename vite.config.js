import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gla",
  build: {
    chunkSizeWarningLimit: 4000,
  },
});

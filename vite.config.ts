import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/userAPI": "http://localhost:3000",
      "/todoAPI": "http://localhost:3000",
    },
  },
});

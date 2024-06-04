import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MadamRoche/",
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@/components": path.resolve("src/components/*"),
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./Class7/cara-watch-react",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "./",
    emptyOutDir: true,
    manifest: true,
  },
});

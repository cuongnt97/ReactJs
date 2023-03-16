export default defineConfig({
  base: "",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "./",
    emptyOutDir: true,
    manifest: true,
  },
});

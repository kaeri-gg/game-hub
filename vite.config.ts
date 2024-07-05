import { defineConfig, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";
import { cwd } from "node:process";

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const getBase = () => {
    if (env.mode === "github") return "/game-hub";

    return "./";
  };

  return {
    plugins: [react()],
    publicDir: "public",
    envPrefix: "KATH_",
    outDir: "dist",
    envDir: cwd(),
    server: {
      open: true,
      port: 4096,
      host: "0.0.0.0",
    },
    base: getBase(),
    build: {
      chunkSizeWarningLimit: 700,
      sourcemap: true,
      assetsDir: ".",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: "index.html",
        },
      },
    },
  };
});

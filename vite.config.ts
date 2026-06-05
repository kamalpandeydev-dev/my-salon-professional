import { defineConfig } from "vite"; // 🟢 Use standard Vite config
import { tanstackStart } from "@tanstack/react-start/plugin/vite"; // 🟢 Import the unified plugin
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite"; // 🟢 Explicit server presets use nitro directly now

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    // 1. Core Framework Configurations
    tailwindcss(),
    tanstackStart({
      // Your former 'tsr' block moves here natively
      srcDirectory: "./src",
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),

    // 2. Server deployment runtime configuration
    nitro({
      preset: "vercel", // Formerly server.preset
    }),
  ],
});

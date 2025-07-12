import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer())]
      : []),
    // Plugin pour copier les assets depuis attached_assets
    {
      name: "copy-assets",
      generateBundle() {
        const assetsDir = path.resolve(import.meta.dirname, "attached_assets");
        const publicDir = path.resolve(import.meta.dirname, "client", "public");
        
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir);
          files.forEach(file => {
            if (file.match(/\.(png|jpg|jpeg|webp|svg)$/)) {
              try {
                fs.copyFileSync(
                  path.join(assetsDir, file),
                  path.join(publicDir, file)
                );
              } catch (err) {
                console.warn(`Failed to copy ${file}:`, err);
              }
            }
          });
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": ["@radix-ui/react-slot", "@radix-ui/react-tooltip", "framer-motion"],
          utils: ["clsx", "tailwind-merge", "class-variance-authority"],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // Optimisation pour le déploiement statique
    assetsDir: "assets",
    copyPublicDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

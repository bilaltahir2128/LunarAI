import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ----------------------------------------------------------------------
  // NEW: Build Optimizations
  // ----------------------------------------------------------------------
  build: {
    // 1. Increase the warning limit so Vite doesn't complain about 500kb chunks
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        // 2. Manual Chunks: Split heavy libraries into their own files
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'], // Isolate the animation library
        },
      },
    },
  },
}));
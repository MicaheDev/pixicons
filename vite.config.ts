import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts'; 


import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/**/*"], // Incluye todos los archivos en src
      outDir: "dist"
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // Entry point for your library
      name: "Pixicons", // Name of the library
      fileName: (format) => `pixicons.${format}.js`, // Output file name
    },
    rollupOptions: {
      // External dependencies that should not be bundled
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

import { defineConfig } from "vite";
const { resolve } = require('path')
const env = process.env;
env.mode = env.mode || "production";
export default defineConfig({
  root: "./",
  //:home: En esta linea se cambia la frase /eventos-app/ por el nombre de su repositorio
  base: env.mode === "production" ? "/Eventos/" : "/",
  build: {
    outDir: "docs",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detalles: resolve(_dirname, 'detalles.html'),
        informacion: resolve(_dirname,'informaion.html'),
        location: resolve(_dirname, 'locations.html')
        timeline: resolve(_dirname, 'timeline.html')
      }
    }
  },
  plugins: []
});

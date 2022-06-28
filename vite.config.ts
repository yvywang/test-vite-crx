import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
const { resolve } = path

export default defineConfig({
  // root: "src",
  plugins: [
    vue(),
    Components({ resolvers: [AntDesignVueResolver()] }),
    createStyleImportPlugin({ resolves: [AndDesignVueResolve()] }),
    crx({ manifest }),
  ],
  build: {
    outDir: 'extension',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 8088,
    cors: true,
  },
})

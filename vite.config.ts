import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPathsPlugin(),
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vue-router'],
      dts: 'src/auto-imports.d.ts', // This plugin will automatically generate the components.d.ts file in the source src
      dirs: ['src'],
      vueTemplate: true,
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts', // This plugin will automatically generate the components.d.ts file in the source src
    }),
  ],
})

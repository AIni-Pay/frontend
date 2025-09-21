import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          wagmi: ['wagmi', '@reown/appkit', '@reown/appkit-adapter-wagmi'],
          utils: ['viem', '@tanstack/react-query']
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'wagmi',
      '@reown/appkit',
      '@reown/appkit-adapter-wagmi',
      'viem',
      '@tanstack/react-query',
      'framer-motion',
      'react-just-parallax',
      'scroll-lock',
      'typewriter-effect'
    ],
    exclude: ['@rollup/rollup-linux-x64-gnu', '@rollup/rollup-darwin-x64']
  },
  define: {
    global: 'globalThis',
  }
})

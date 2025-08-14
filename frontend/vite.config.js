import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  // Get API URL from environment or use default
  const apiUrl = env.VITE_API_URL || 'http://127.0.0.1:8000'
  
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      watch: {
        usePolling: true
      },
      proxy: {
        '/api': {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
          configure: (proxy, options) => {
            // Force IPv4 instead of IPv6
            proxy.on('proxyReq', (proxyReq, req, res) => {
              proxyReq.setHeader('host', '127.0.0.1:8000')
            })
          }
        }
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  }
})

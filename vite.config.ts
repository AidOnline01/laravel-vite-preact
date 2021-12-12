import { defineConfig } from 'laravel-vite';
import preact from '@preact/preset-vite';

export default defineConfig()
	.merge({
    plugins: [preact()],
    resolve: {
      alias: {
        "react": "preact-compat",
        "react-dom": "preact-dom",
        "@": __dirname + '/resources/scripts'
      }
    }
  });
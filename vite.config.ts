import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import withReactRouter from 'vite-plugin-next-react-router';
const ReactCompilerConfig = { /* ... */ };

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      withReactRouter()
    ],
    // ...
  };
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const ReactCompilerConfig = { /* ... */ };

export default defineConfig(() => {
  return {
    plugins: [
      react(),
    ],
    // ...
  };
});
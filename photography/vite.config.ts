import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslintPlugin({
    //   include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx'], // include files to lint
    //   exclude: ['node_modules', 'dist'], // exclude files from linting
    //   fix: true, // enable auto-fixing
    //   extensions: ['.js', '.ts', '.tsx'], // file extensions to lint
    //   emitError: true, // emit errors instead of warnings
    //   failOnError: true, // throw an error when there are lint errors
    //   lintOnStart: true, // lint on start-up
    // }),
    // stylelintPlugin({
    //   fix: true,
    //   include: ['src/**/*.css'],
    //   exclude: ['node_modules', 'dist'],
    //   emitError: true,
    //   emitWarning: true,
    // }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts', // Specify the entry point for your library
      name: '***YOUR_PROJECT***', // Specify the name of your library (will be available as a global variable)
      fileName: 'index', // Specify the desired file name for the output library file
      formats: ['es', 'umd'], // Specify formats of output library
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
});

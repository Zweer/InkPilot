import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/**/*.ts'],
  outDir: 'dist',
  dts: true,
  sourcemap: true,
  format: 'esm',
});

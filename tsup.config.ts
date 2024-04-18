import { defineConfig } from 'tsup';

export default defineConfig([
  {
    clean: true,
    dts: true,
    entry: ['src/lib.ts'],
    format: ['cjs', 'esm'],
    target: 'esnext',
    outDir: 'dist',
  },
  {
    clean: true,
    entry: ['src/cli.ts'],
    format: ['esm'],
    target: 'esnext',
    outDir: 'dist',
  },
]);

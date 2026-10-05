import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({build:{rollupOptions:{input:Object.fromEntries(['index','cooling','heating','maintenance','about','contact'].map(p=>[p,resolve(import.meta.dirname,`${p}.html`)]))}}});

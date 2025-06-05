import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// Resolve __dirname since we're in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define constants
const ESLINT_CONFIG_PATH = path.resolve(__dirname, 'eslint.config.cjs');

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
        svgr(),
        envCompatible(),
        eslint({
            overrideConfigFile: ESLINT_CONFIG_PATH,
            include: ['src/**/*.ts', 'src/**/*.tsx'],
            cacheLocation: 'node_modules/.cache/eslint',
            cache: true,
            exclude: ['/virtual:/**', 'node_modules/**'],
        }),
        tsconfigPaths(),
    ],
});

import { defineConfig } from 'cspell';

export default defineConfig({
    $schema: "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",
    version: '0.2',
    language: "en",
    name: "Project CSpell Configuration",
    description: "CSpell configuration for the project",
    enabled: true,
    allowCompoundWords: false,
    caseSensitive: false,
    userWords: ["cspell"],
    globRoot: '.',
    files: [
        "src/**/*.{ts,tsx,js,jsx,vue}",      // Frontend source
        "scripts/**/*.{ts,js,sh}",           // Utility scripts
        "tests/**/*.{ts,tsx,js,jsx}",        // Tests
        "**/*.{md,markdown}",                // Markdown
        "**/*.{json,yaml,yml}",              // Config files
        "**/*.{html,css,scss,less}",         // Web styles/templates
        ".github/**/*.{yml,yaml}",           // GitHub Actions
        "*.{md,json,yml}",                   // Root files
    ],
    enableGlobDot: true,
    ignorePaths: [
        '/project-words.txt',
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/.next/**',
        '**/.vercel/**',
        '**/.turbo/**',
        '**/coverage/**',
        '**/out/**',
        '**/tmp/**',
        '**/temp/**',
        '**/logs/**',
        '**/log/**',
        '**/vendor/**',
        '**/bower_components/**',
        "**/pnpm-lock.yaml"
    ],
    noConfigSearch: true,
    readonly: false,
    reporters: [

    ],
    useGitignore: true,
    gitignoreRoot: [],
    validateDirectives: true,
    dictionaryDefinitions: [
        {
            name: "project-words",
            path: ".vscode/dictionaries/project-words.txt",
            addWords: true,
        },
    ],
    dictionaries: ["project-words"],
    cache: {
        useCache: true,
        cacheLocation: "./.cache/cspell",
        cacheStrategy: "content",
        cacheFormat: "universal"
    },
    failFast: true,
    loadDefaultConfiguration: true,
});

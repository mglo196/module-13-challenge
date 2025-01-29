/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GITHUB_TOKEN: string;
  // Add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


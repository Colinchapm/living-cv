/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EBW_PUBLIC_URL?: string;
  readonly VITE_CHEER_UP_GOTH_PUBLIC_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

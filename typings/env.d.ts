/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const SERVER_PORT: number
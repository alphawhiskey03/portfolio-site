// src/env.d.ts
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
    readonly SANITY_PROJECT_ID: string;
    readonly SANITY_DATASET: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
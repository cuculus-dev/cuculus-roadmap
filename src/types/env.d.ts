declare namespace NodeJS {
  interface ProcessEnv {
    readonly META_ROBOTS?: string;
    readonly NEXT_PUBLIC_GITHUB_API_URL: string;
  }
}

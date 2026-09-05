declare global {
  interface Window {
    gtag(
      command: 'event',
      eventName: string,
      params?: Record<string, string | number | boolean | null | undefined>,
    ): void
    gtag(command: string, ...args: unknown[]): void
  }
}

// Required to make this a module and enable `declare global`
export {}

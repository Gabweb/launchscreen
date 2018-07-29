export enum AuthProviders {
  GitHub,
}

export function getAuthProvider(provider: string | null | undefined): AuthProviders | null {
  if (provider === null || provider === undefined) {
    return null;
  }

  switch (provider.toLowerCase()) {
    case 'github':
      return AuthProviders.GitHub;

    default:
      return null;
  }
}

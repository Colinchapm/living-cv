// Top-level destinations are intentionally centralised. When a brand earns its
// own live site, set the corresponding HTTPS URL in the deployment configuration.
// Until then, each area has a working landing page under the Living CV domain.
function approvedExternalUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.toString() : null;
  } catch {
    return null;
  }
}

export const siteAreas = [
  { id: 'cv', label: 'Living CV', path: '/', externalUrl: null },
  {
    id: 'ebw',
    label: 'EBW',
    path: '/ebw',
    externalUrl: approvedExternalUrl(import.meta.env.VITE_EBW_PUBLIC_URL),
  },
  {
    id: 'comedy',
    label: 'Cheer Up Goth',
    path: '/cheer-up-goth',
    externalUrl: approvedExternalUrl(import.meta.env.VITE_CHEER_UP_GOTH_PUBLIC_URL),
  },
] as const;

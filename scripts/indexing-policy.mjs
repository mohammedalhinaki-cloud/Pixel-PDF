export const OFFICIAL_SITE_URL = 'https://pixelpdf.maaoun.com';

export function resolveSiteUrl() {
  return (process.env.SITE_URL || OFFICIAL_SITE_URL).replace(/\/+$/, '');
}

export function isOfficialSiteUrl(url = resolveSiteUrl()) {
  try {
    const { hostname } = new URL(url);
    return (
      hostname === 'www.pixelpdf.com' ||
      hostname === 'pixelpdf.com' ||
      hostname === 'pixelpdf.maaoun.com'
    );
  } catch {
    return false;
  }
}

export function canonicalBasePath() {
  if (isOfficialSiteUrl()) return '';
  return (process.env.BASE_URL || '/').replace(/\/$/, '');
}

export function isIndexingBlocked() {
  return !isOfficialSiteUrl() && process.env.ALLOW_INDEXING !== 'true';
}

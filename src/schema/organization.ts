import { SITE, SITE_NAME, PHONE_SCHEMA, EMAIL, ADDRESS } from '../config/site';

/**
 * Site-wide JSON-LD for the full (post-licensing) site.
 * Only facts that are verified in the repo (STATUS.md, live pages) are stated here.
 * Removed on purpose (2026-11-25) because they could not be confirmed:
 *   - parentOrganization (Parish Health and Wellness): Sunbright is its own 501(c)(3), EIN 42-2737546
 *   - geo coordinates and opening hours
 *   - PHP / IOP / sober living as Sunbright services (pending Linda's confirmation of licensed scope)
 *   - medicalSpecialty "Psychiatry", priceRange
 * Add services back here only once Linda confirms what the DHCS license covers.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['NGO', 'MedicalBusiness'],
        '@id': `${SITE}/#organization`,
        name: SITE_NAME,
        alternateName: 'Sunbright Recovery',
        url: `${SITE}/`,
        logo: `${SITE}/logo.png`,
        image: `${SITE}/images/facility-wide.jpg`,
        description:
          'A 16-bed nonprofit residential addiction recovery center in Red Bluff, California, serving Northern California and the rest of the state.',
        telephone: PHONE_SCHEMA,
        email: EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        areaServed: [
          { '@type': 'State', name: 'California' },
          { '@type': 'AdministrativeArea', name: 'Northern California' },
          { '@type': 'AdministrativeArea', name: 'Tehama County' },
        ],
        nonprofitStatus: 'Nonprofit501c3',
        taxID: '42-2737546',
        founder: {
          '@type': 'Person',
          name: 'Linda Spyres',
          honorificSuffix: 'LCSW, LAADC-CA',
          jobTitle: 'Founder',
        },
        sameAs: [
          'https://www.facebook.com/profile.php?id=61590180493030',
          'https://www.instagram.com/sunbrightrecovery',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: SITE_NAME,
        publisher: { '@id': `${SITE}/#organization` },
      },
    ],
  };
}

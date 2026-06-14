const SITE = 'https://sunbrightrecovery.org';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'NGO', 'MedicalBusiness', 'LocalBusiness'],
        '@id': `${SITE}/#organization`,
        name: 'Sunbright Recovery Center',
        alternateName: 'Sunbright Recovery',
        url: SITE,
        logo: `${SITE}/logo.png`,
        image: `${SITE}/images/og-default.jpg`,
        description:
          'Faith-integrated, evidence-based addiction recovery in Northern California. A 16-bed nonprofit residential center in Red Bluff, CA offering residential, outpatient, and sober living programs.',
        nonprofitStatus: 'Nonprofit501c3',
        parentOrganization: {
          '@type': 'Organization',
          name: 'Parish Health and Wellness',
          url: 'https://www.phwcare.com',
        },
        founder: {
          '@type': 'Person',
          name: 'Linda Spyres',
          jobTitle: 'Founder & Clinical Director, LCSW, LAADC-CA',
        },
        telephone: '+1-530-528-2342',
        email: 'info@sunbrightrecovery.org',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '22425 Sunbright Ave',
          addressLocality: 'Red Bluff',
          addressRegion: 'CA',
          postalCode: '96080',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.1785,
          longitude: -122.2358,
        },
        areaServed: [
          { '@type': 'State', name: 'California' },
          { '@type': 'City', name: 'Red Bluff' },
          { '@type': 'City', name: 'Redding' },
          { '@type': 'City', name: 'Chico' },
          { '@type': 'City', name: 'Sacramento' },
          { '@type': 'AdministrativeArea', name: 'Tehama County' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
        ],
        medicalSpecialty: ['Addiction Medicine', 'Psychiatry'],
        availableService: [
          { '@type': 'MedicalTherapy', name: 'Residential / Inpatient Rehabilitation', url: `${SITE}/programs/residential` },
          { '@type': 'MedicalTherapy', name: 'Intensive Outpatient Program (IOP)', url: `${SITE}/programs/outpatient` },
          { '@type': 'MedicalTherapy', name: 'Partial Hospitalization Program (PHP)', url: `${SITE}/programs/outpatient` },
          { '@type': 'MedicalTherapy', name: 'Sober Living / Aftercare', url: `${SITE}/programs/sober-living` },
        ],
        // Insurance network is still expanding — do NOT claim specific payers as accepted.
        acceptedPaymentMethod: ['Cash', 'Credit Card', 'Private Pay'],
        priceRange: '$$',
        sameAs: [
          'https://www.facebook.com/sunbrightrecovery',
          'https://www.instagram.com/sunbrightrecovery',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: 'Sunbright Recovery Center',
        publisher: { '@id': `${SITE}/#organization` },
      },
    ],
  };
}

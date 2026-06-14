const SITE = 'https://sunbrightrecovery.org';

interface TherapyInput {
  name: string;
  description: string;
  path: string; // e.g. /programs/residential
  alternateName?: string;
}

/** MedicalTherapy / MedicalProcedure schema for /programs/* pages. */
export function medicalTherapySchema({ name, description, path, alternateName }: TherapyInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name,
    ...(alternateName ? { alternateName } : {}),
    description,
    url: SITE + path,
    medicineSystem: 'https://schema.org/WesternConventional',
    relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Addiction Medicine' },
    provider: { '@id': `${SITE}/#organization` },
    availableService: {
      '@type': 'MedicalProcedure',
      name,
      howPerformed: description,
    },
  };
}

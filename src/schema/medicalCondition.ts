const SITE = 'https://sunbrightrecovery.org';

interface ConditionInput {
  name: string;
  description: string;
  path: string; // e.g. /what-we-treat/alcohol
  alternateName?: string[];
  signs?: string[];
}

/** MedicalCondition schema for /what-we-treat/* pages. */
export function medicalConditionSchema({ name, description, path, alternateName, signs }: ConditionInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name,
    ...(alternateName ? { alternateName } : {}),
    description,
    url: SITE + path,
    ...(signs
      ? { signOrSymptom: signs.map((s) => ({ '@type': 'MedicalSignOrSymptom', name: s })) }
      : {}),
    possibleTreatment: {
      '@type': 'MedicalTherapy',
      name: 'Addiction treatment',
      provider: { '@id': `${SITE}/#organization` },
    },
    associatedAnatomy: { '@type': 'AnatomicalSystem', name: 'Central nervous system' },
  };
}

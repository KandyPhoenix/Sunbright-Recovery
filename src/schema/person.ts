const SITE = 'https://sunbrightrecovery.org';

interface PersonInput {
  name: string;
  jobTitle: string;
  description?: string;
  credentials?: string[];
  image?: string;
}

/** Person schema for /team staff bios. */
export function personSchema({ name, jobTitle, description, credentials, image }: PersonInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    ...(description ? { description } : {}),
    ...(image ? { image: new URL(image, SITE).href } : {}),
    ...(credentials
      ? { hasCredential: credentials.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c })) }
      : {}),
    worksFor: { '@id': `${SITE}/#organization` },
  };
}

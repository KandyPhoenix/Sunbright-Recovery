// Counts contact-form sends so they can be compared with what reaches info@
// (Google Admin > Reporting > Email log search). Stores ONLY the time a form
// was sent: no names, emails, messages, IP addresses or browser details.
// The form itself still goes straight to Web3Forms; this never touches it.
// D1 database: sunbright-form-count, bound as FORM_COUNT (Production + Preview).

const ALLOWED_HOSTS = new Set([
  'www.sunbrightrecovery.org',
  'sunbrightrecovery.org',
]);

function allowedOrigin(request) {
  const origin = request.headers.get('Origin') || request.headers.get('Referer') || '';
  try {
    const host = new URL(origin).hostname;
    return ALLOWED_HOSTS.has(host) || host.endsWith('.sunbright-recovery.pages.dev') || host === 'sunbright-recovery.pages.dev';
  } catch {
    return false;
  }
}

export async function onRequestPost({ request, env }) {
  // Always answer 204 so this can never get in the way of the form.
  try {
    if (allowedOrigin(request) && env.FORM_COUNT) {
      await env.FORM_COUNT
        .prepare('INSERT INTO form_sends (at) VALUES (?)')
        .bind(new Date().toISOString())
        .run();
    }
  } catch {
    // ignore: counting is best-effort
  }
  return new Response(null, { status: 204 });
}

export function onRequest() {
  return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
}

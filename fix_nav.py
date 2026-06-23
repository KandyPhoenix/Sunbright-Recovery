import os

pages_dir = r'C:\Users\kandy\Projects\Sunbright-Recovery\src\pages'
files = ['community.astro', 'get-involved.astro', 'events.astro', 'contact.astro', 'thank-you.astro']

for fname in files:
    path = os.path.join(pages_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Move links close to logo: drop space-between, let CTA push itself right
    content = content.replace(
        'display:flex;align-items:center;justify-content:space-between;height:110px;overflow:hidden}',
        'display:flex;align-items:center;height:110px;overflow:hidden;gap:0}'
    )
    # Add left margin to nav-links to create a small gap from logo
    content = content.replace(
        '.nav-links{display:flex;align-items:center;gap:4px}',
        '.nav-links{display:flex;align-items:center;gap:4px;margin-left:20px}'
    )
    # Push CTA to the far right
    # community.astro nav-cta is different from other pages, handle both
    content = content.replace(
        '.nav-cta{display:flex;align-items:center;gap:7px;background:#fff;color:var(--navy);padding:11px 20px;border-radius:8px;font-size:14px;font-weight:700;border:none;box-shadow:none;transition:all .25s}',
        '.nav-cta{display:flex;align-items:center;gap:7px;background:#fff;color:var(--navy);padding:11px 20px;border-radius:8px;font-size:14px;font-weight:700;border:none;box-shadow:none;transition:all .25s;margin-left:auto}'
    )
    content = content.replace(
        '.nav-cta{display:flex;align-items:center;gap:7px;background:var(--gold);color:#fff;padding:11px 20px;border-radius:8px;font-size:14px;font-weight:700;box-shadow:0 2px 12px rgba(200,144,10,.35);transition:all .25s}',
        '.nav-cta{display:flex;align-items:center;gap:7px;background:var(--gold);color:#fff;padding:11px 20px;border-radius:8px;font-size:14px;font-weight:700;box-shadow:0 2px 12px rgba(200,144,10,.35);transition:all .25s;margin-left:auto}'
    )

    with open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(content)
    print('Updated: ' + fname)

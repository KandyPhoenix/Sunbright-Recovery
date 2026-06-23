import os

pages_dir = r'C:\Users\kandy\Projects\Sunbright-Recovery\src\pages'
files = ['give.astro', 'events.astro', 'thank-you.astro', 'contact.astro']

# Build bad sequences from code points — no curly chars in source
bad_em  = chr(0x00E2) + chr(0x20AC) + chr(0x201D)  # was em dash U+2014
bad_en  = chr(0x00E2) + chr(0x20AC) + chr(0x201C)  # was en dash U+2013
bad_rsq = chr(0x00E2) + chr(0x20AC) + chr(0x2122)  # was right single-quote U+2019

repairs = [
    (bad_em,  chr(0x2014)),
    (bad_en,  chr(0x2013)),
    (bad_rsq, chr(0x2019)),
]

for fname in files:
    path = os.path.join(pages_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    total = 0
    for bad, good in repairs:
        n = content.count(bad)
        content = content.replace(bad, good)
        total += n
    with open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(content)
    print('Fixed ' + str(total) + ' in ' + fname)

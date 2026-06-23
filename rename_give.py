import os, shutil

base = r'C:\Users\kandy\Projects\Sunbright-Recovery'
pages = os.path.join(base, 'src', 'pages')

files = [
    'community.astro', 'events.astro',
    'contact.astro', 'thank-you.astro', 'give.astro'
]

for fname in files:
    path = os.path.join(pages, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('href="/give"', 'href="/get-involved"')
    content = content.replace('href="/give#', 'href="/get-involved#')
    # Nav label: change ">Give</a>" to ">Get Involved</a>"
    content = content.replace('>Give</a>', '>Get Involved</a>')
    # give.astro active link class
    content = content.replace('href="/get-involved" class="active"', 'href="/get-involved" class="active"')

    with open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(content)
    print('Updated: ' + fname)

# Rename the file
src = os.path.join(pages, 'give.astro')
dst = os.path.join(pages, 'get-involved.astro')
shutil.move(src, dst)
print('Renamed: give.astro -> get-involved.astro')

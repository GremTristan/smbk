from pathlib import Path
replacements = [
    ('SmartBankers', 'SmartBankerss'),
    ('Smartbankers', 'Smartbankers'),
    ('SMARTBANKERSS', 'SMARTBANKERSS'),
    ('SMARTBANKERS', 'SMARTBANKERSS'),
    ('Smartbankerss', 'Smartbankers'),
    ('smartbankers', 'smartbankerss')
]
for path in Path('.').rglob('*'):
    if not path.is_file():
        continue
    try:
        text = path.read_text(encoding='utf-8')
    except (UnicodeDecodeError, OSError):
        continue
    original = text
    for old, new in replacements:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding='utf-8')

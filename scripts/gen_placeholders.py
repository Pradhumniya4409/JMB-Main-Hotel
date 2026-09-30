import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random

OUT = "/home/claude/jmb-hotels/public/media/demo"
os.makedirs(OUT, exist_ok=True)

CHARCOAL = (27, 24, 21)
CHARCOAL_L = (58, 51, 44)
CHAMPAGNE = (185, 147, 86)
CHAMPAGNE_L = (212, 182, 120)
BROWN = (90, 66, 48)
IVORY = (247, 242, 233)

def font(size, bold=False):
    paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for p in paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def make_gradient(w, h, c1, c2, diagonal=True):
    img = Image.new("RGB", (w, h), c1)
    draw = ImageDraw.Draw(img)
    if diagonal:
        for y in range(h):
            t = y / h
            draw.line([(0, y), (w, y)], fill=lerp(c1, c2, t))
    return img

def add_texture(img, seed):
    random.seed(seed)
    w, h = img.size
    overlay = Image.new("L", (w, h), 0)
    od = ImageDraw.Draw(overlay)
    for _ in range(70):
        x = random.randint(0, w)
        y = random.randint(0, h)
        r = random.randint(40, 220)
        od.ellipse([x - r, y - r, x + r, y + r], fill=random.randint(4, 14))
    overlay = overlay.filter(ImageFilter.GaussianBlur(80))
    light = Image.new("RGB", (w, h), IVORY)
    img = Image.composite(light, img, overlay)
    return img

def vignette(img):
    w, h = img.size
    v = Image.new("L", (w, h), 0)
    dv = ImageDraw.Draw(v)
    dv.ellipse([-w*0.25, -h*0.25, w*1.25, h*1.25], fill=255)
    v = v.filter(ImageFilter.GaussianBlur(120))
    black = Image.new("RGB", (w, h), (10, 9, 8))
    return Image.composite(img, black, v)

def draw_label(img, title, subtitle=None, align="center"):
    w, h = img.size
    draw = ImageDraw.Draw(img)
    title_font = font(int(h * 0.075), bold=False)
    sub_font = font(int(h * 0.028))

    bbox = draw.textbbox((0, 0), title, font=title_font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx = (w - tw) / 2
    ty = h * 0.44

    # soft shadow
    draw.text((tx + 3, ty + 3), title, font=title_font, fill=(0, 0, 0, 120))
    draw.text((tx, ty), title, font=title_font, fill=IVORY)

    if subtitle:
        bbox2 = draw.textbbox((0, 0), subtitle, font=sub_font)
        sw = bbox2[2] - bbox2[0]
        sx = (w - sw) / 2
        sy = ty + th + 22
        draw.text((sx, sy), subtitle.upper(), font=sub_font, fill=CHAMPAGNE_L)

    return img

def make_image(path, w, h, title, subtitle, palette, seed):
    c1, c2 = palette
    img = make_gradient(w, h, c1, c2)
    img = add_texture(img, seed)
    img = vignette(img)
    img = img.filter(ImageFilter.GaussianBlur(1))
    draw_label(img, title, subtitle)
    img.save(path, quality=87)

PALETTES = {
    "charcoal": (CHARCOAL, CHARCOAL_L),
    "brown": (BROWN, CHARCOAL_L),
    "champagne": (CHARCOAL, BROWN),
}

jobs = [
    ("home-hero.jpg", 1920, 1080, "JMB Hotels", "Stay Better. Experience More.", PALETTES["charcoal"], 1),
    ("about-hero.jpg", 1920, 1080, "About JMB", "Jay Maa Bayan Group of Hotels", PALETTES["brown"], 2),
    ("city-indore.jpg", 1000, 1250, "Indore", "3 Hotels", PALETTES["charcoal"], 3),
    ("city-dewas.jpg", 1000, 1250, "Dewas", "2 Hotels", PALETTES["brown"], 4),
    ("exp-sarafa.jpg", 800, 1067, "Sarafa Bazaar", "Indore", PALETTES["charcoal"], 5),
    ("exp-rajwada.jpg", 800, 1067, "Rajwada Palace", "Indore", PALETTES["brown"], 6),
    ("exp-kanch.jpg", 800, 1067, "Kanch Mandir", "Indore", PALETTES["champagne"], 7),
    ("og-cover.jpg", 1200, 630, "JMB Hotels", "Indore & Dewas", PALETTES["charcoal"], 8),

    ("soni-hero.jpg", 1920, 1080, "JMB Hotel Soni", "Jawahar Marg, Indore", PALETTES["charcoal"], 11),
    ("soni-1.jpg", 900, 900, "JMB Hotel Soni", "Exterior", PALETTES["charcoal"], 12),
    ("soni-2.jpg", 900, 900, "JMB Hotel Soni", "Lobby", PALETTES["brown"], 13),
    ("soni-3.jpg", 900, 900, "JMB Hotel Soni", "Room", PALETTES["champagne"], 14),

    ("height-hero.jpg", 1920, 1080, "JMB Hotel Height", "Ambikapuri Extension, Indore", PALETTES["brown"], 21),
    ("height-1.jpg", 900, 900, "JMB Hotel Height", "Exterior", PALETTES["brown"], 22),
    ("height-2.jpg", 900, 900, "JMB Hotel Height", "Lobby", PALETTES["charcoal"], 23),
    ("height-3.jpg", 900, 900, "JMB Hotel Height", "Room", PALETTES["champagne"], 24),

    ("gopala-hero.jpg", 1920, 1080, "Hotel Gopala", "Sarafa Bazar, Indore", PALETTES["champagne"], 31),
    ("gopala-1.jpg", 900, 900, "Hotel Gopala", "Exterior", PALETTES["champagne"], 32),
    ("gopala-2.jpg", 900, 900, "Hotel Gopala", "Lobby", PALETTES["charcoal"], 33),
    ("gopala-3.jpg", 900, 900, "Hotel Gopala", "Room", PALETTES["brown"], 34),

    ("relaxinn-hero.jpg", 1920, 1080, "Hotel Relax Inn", "Keladevi Square, Dewas", PALETTES["charcoal"], 41),
    ("relaxinn-1.jpg", 900, 900, "Hotel Relax Inn", "Exterior", PALETTES["charcoal"], 42),
    ("relaxinn-2.jpg", 900, 900, "Hotel Relax Inn", "Lobby", PALETTES["champagne"], 43),
    ("relaxinn-3.jpg", 900, 900, "Hotel Relax Inn", "Room", PALETTES["brown"], 44),

    ("rana-hero.jpg", 1920, 1080, "JMB Hotel Rana Palace", "Gomti Nagar, Dewas", PALETTES["brown"], 51),
    ("rana-1.jpg", 900, 900, "Rana Palace", "Exterior", PALETTES["brown"], 52),
    ("rana-2.jpg", 900, 900, "Rana Palace", "Lobby", PALETTES["champagne"], 53),
    ("rana-3.jpg", 900, 900, "Rana Palace", "Room", PALETTES["charcoal"], 54),
]

for name, w, h, title, subtitle, palette, seed in jobs:
    make_image(os.path.join(OUT, name), w, h, title, subtitle, palette, seed)

print(f"Generated {len(jobs)} placeholder images in {OUT}")

# Asset Credits

Every image and font used by the site, where it came from, and what was done to it.

## 1. Hero — left slot (Lewis Hamilton)

The photograph in the left slot was **supplied by me**. I did not source it through this project, and its photographer and licence are not recorded here yet.

| File in `public/assets/hero/` | Origin | Processing |
|---|---|---|
| `lewis-hamilton-original.jpg` | The photograph exactly as I supplied it | **Untouched original** |
| `lewis-hamilton-ferrari-helmet.png` | Made from the original | Background removed with an automatic segmentation model (rembg, isnet-general-use), then trimmed to the subject. The helmet, visor, suit, logos and proportions are unchanged. Not mirrored, recoloured or retouched |
| `lewis-hamilton-ferrari-helmet.webp` | Same as the PNG | Compressed copy that the site loads |

**Credit to complete before I submit or publish the site**

| Photographer | Source | Licence or permission |
|---|---|---|
| to be added by me | to be added by me | to be added by me |

An earlier search of Wikimedia Commons and Openverse found no freely licensed photograph of this kind, so the right to use this one depends on where I obtained it. Photographs from Ferrari, Formula 1 and photo agencies are normally rights-reserved.

If the photograph has to be removed, set `leftImage: null` in `src/data/site.ts`. The hero then shows a labelled placeholder drawing in the same position.

## 2. Hero — right slot and driver profile (Chamika Kaushalya)

| File in `public/assets/hero/` | Origin | Processing |
|---|---|---|
| `Serious Formal Portrait with Greenery.png` | My original photograph, supplied by me | **Untouched original.** Kept as supplied |
| `chamika-kaushalya-cutout-full.png` | Made from the original | Background removed with an automatic segmentation model (rembg, isnet-general-use). The plant in the bottom-left corner was masked out. No pixel of the face, hair or body was edited, reshaped, recoloured or resampled |
| `chamika-kaushalya-cutout.webp` | Cropped from the cut-out above | Cropped to head, shoulders and chest for the hero. No resizing or retouching |
| `chamika-kaushalya-portrait.jpg` | The original photograph | Re-saved as JPEG for faster loading. No other change |

The folder supplied as `public/assests/` was renamed to `public/assets/` to match the paths in the brief. Nothing inside it was deleted.

## 3. Evidence images (`public/assets/evidence/`)

Apart from my own CV photograph, these are supporting reference images from a classmate's portfolio (PS.pdf). They are used as shared lecture and class-activity material, not as my personal work. Each image shows its source on the website.

| File | Source | Shows |
|---|---|---|
| `rw02-paper-craft-tote-bag.jpg` | PS.pdf, page 6 | Newspaper tote bag |
| `rw02-paper-craft-class-group.jpg` | PS.pdf, page 6 | A class group presenting their work |
| `rw03-slide-describing-your-strengths.jpg` | PS.pdf, page 7 | Lecture slide |
| `rw03-slide-interview-attire.jpg` | PS.pdf, page 8 | Lecture slide |
| `rw03-whiteboard-application-documents.jpg` | PS.pdf, page 8 | Classroom whiteboard |
| `rw04-my-cv-during-cv-writing-session.jpg` | **My own photograph**, taken in the lecture | My printed CV in the lecture room |
| `rw04-slide-importance-of-research.jpg` | PS.pdf, page 9 | Lecture slide |
| `rw05-slide-what-is-emotional-intelligence.jpg` | PS.pdf, page 13 | Lecture slide |
| `rw05-slide-emotional-intelligence-title.jpg` | PS.pdf, page 15 | Lecture slide |
| `rw05-slide-emotions.jpg` | PS.pdf, page 15 | Lecture slide |
| `rw08-worksheet-section-c-dining-etiquette.jpg` | PS.pdf, page 16 | Printed class worksheet (a classmate's copy) |
| `rw08-slide-true-or-false-table-quiz.jpg` | PS.pdf, page 17 | Lecture slide |

Processing: PS.pdf images were extracted at their embedded resolution and saved as JPEG. Nothing was cropped, retouched or enlarged.

My CV photograph: my email address, phone number and LinkedIn address are blurred for privacy. Nothing else in the photograph was changed. The CV itself was not recreated or edited.

Three photographs from Aslam's portfolio (the Paper Craft team of ten, the finished pieces and the cup-and-saucer close-up) were removed from the site at my request. The originals in `reference/aslam-portfolio/assets/img/` are untouched.

The remaining class group photograph shows classmates' faces. Before the portfolio is submitted or published, I should confirm the people shown are happy to appear, or replace the photo with my own.

## 4. Praana 2026 (`public/assets/praana-2026/`)

All eleven photographs were supplied by me and are my own project material.

| Location | Contents |
|---|---|
| `public/assets/praana-2026/` | My eleven original files, exactly as supplied. Untouched |
| `public/assets/praana-2026/web/` | The copies the site loads: rotated upright where needed, resized to at most 1800 px on the long side and saved as JPEG |

Processing: no photograph was retouched, recoloured or stretched. On the Praana page each photograph fills its frame by cropping, and the lightbox shows the whole image.

One file was cropped: `praana-status-update.jpg` is a screenshot of a status update. The account name, profile picture and reply bar were cropped off, leaving the shared photograph and its text.

The event poster shows a contact name and phone number. It is public promotional material, so it is shown as designed.

The photographs show donors, medical staff and team members. Before the portfolio is submitted or published, I should confirm the people shown are happy to appear. The full list of files and captions is in `CONTENT_EVIDENCE_MAP.md`.

## 5. Graphics

All circuit lines, circuit glyphs, the fallback helmet placeholder (no longer shown) and the favicon are original vector graphics drawn in code for this site. The circuit shapes are abstract and are not maps of real circuits. No Ferrari, Formula 1 or team logos are used.

## 6. Fonts

All fonts are open source (SIL Open Font License 1.1) and bundled with the site through Fontsource, so nothing is loaded from an external server.

| Font | Used for |
|---|---|
| Archivo | Headlines and body text |
| Playfair Display | Thin editorial serif lines |
| JetBrains Mono | Technical labels |
| Caveat Brush | The red handwritten accent |

## 7. Design reference

The hero composition is inspired by the layout of landonorris.com (two cut-outs at the edges, central ON TRACK / OFF TRACK type). No code, images, logos or other assets from that site were copied.

This is a personal academic portfolio. It is not affiliated with or endorsed by Ferrari, Formula 1, Lewis Hamilton or Lando Norris.

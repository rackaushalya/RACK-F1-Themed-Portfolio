# Praana 2026 photographs

- **This folder** holds my original photographs, exactly as I supplied them.
- **`web/`** holds the copies the website loads (resized, rotated upright, renamed).

All eleven originals are in use. The list of which photo appears where is in `CONTENT_EVIDENCE_MAP.md`.

## Change a caption

Open `src/data/praana.ts`. Each photo is one `photo(...)` entry, either in `exhibits` (flyers, hall, poster, selfie) or in `raceDayPhotos` (Frames 01 to 07). Edit the caption text and save.

## Add another race-day photograph

1. Put the original in this folder.
2. Put a web-sized copy (JPG, about 1800 px on the long side) in `web/`.
3. Add one entry to `raceDayPhotos` in `src/data/praana.ts`:

   ```ts
   photo('Frame 08', 'my-new-photo.jpg', 1800, 1200, 'std', 'What the photo shows.', 'A description for screen readers'),
   ```

   The two numbers are the width and height of the web copy. The shape is `'std'` (one cell), `'tall'` (portrait, two rows) or `'feature'` (large, two columns by two rows).

The Praana 2026 page and the Paddock Gallery both update automatically.

Use only genuine photographs from the event.

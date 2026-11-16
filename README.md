# R.A.C.K. Perera | The 2026 Professional Skills Championship

Academic portfolio for Professional Skills (IT1215), Year 2, Semester 2, presented as a Formula 1 season.

## Run it

```bash
npm install     # first time only
npm run dev     # development server, http://localhost:5173
npm run build   # production build into dist/
npm run preview # serve the production build, http://localhost:4173
```

## Edit the content

All content lives in `src/data/`. No component code needs to change.

| File | Contains |
|---|---|
| `site.ts` | Identity, lecturer, hero images |
| `races.ts` | The nine race weekends: lecture content, evidence and Post-Race Reports |
| `skills.ts` | The six skills and the self-assessment |
| `praana.ts` | Praana 2026: team, story sections, photographs and reflection |
| `report.ts` | The Championship Report |

To change a reflection, edit the `report` paragraphs for that week in `races.ts`. To add a photograph to a week, put the file in `public/assets/evidence/` and add one entry to that week's `evidence` list. A week with no photographs simply shows no Race Evidence session.

## Other documents

- `CONTENT_EVIDENCE_MAP.md`: where the content and each image came from
- `ASSET_CREDITS.md`: image and font credits
- `public/assets/praana-2026/README.md`: how the event photographs are organised

`reference/` holds the source materials and is not part of the built site.

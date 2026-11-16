import type { Block, Section } from '../data/types'

const colClass = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return <p className="max-w-3xl text-[1.06rem] leading-[1.75] text-charcoal">{block.text}</p>

    case 'list':
      return (
        <ul className="max-w-3xl space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4 text-[1.03rem] leading-[1.7] text-charcoal">
              <span className="mt-[0.72em] h-[2px] w-4 shrink-0 bg-rosso" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'cards':
      return (
        <div className={`grid gap-px border border-pit bg-pit ${colClass[block.cols ?? 2]}`}>
          {block.items.map((c) => (
            <div key={c.title + c.text} className="bg-cream-paper p-5 sm:p-6">
              {c.meta && <p className="label mb-3 leading-relaxed text-charcoal-light">{c.meta}</p>}
              <h4 className="font-display text-[1.05rem] font-extrabold uppercase leading-tight tracking-tight text-ink">
                {/^\d+$/.test(c.title) ? (
                  <span className="font-mono text-sm font-medium text-rosso">{c.title}</span>
                ) : (
                  c.title
                )}
              </h4>
              <p className="mt-2.5 text-[0.97rem] leading-relaxed text-charcoal-mid">{c.text}</p>
            </div>
          ))}
        </div>
      )

    case 'table':
      return (
        <div className="overflow-x-auto border border-pit">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="bg-ink text-cream">
                {block.head.map((h) => (
                  <th key={h} scope="col" className="label px-4 py-3.5 font-medium sm:px-5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-pit bg-cream-paper align-top">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3.5 text-[0.97rem] leading-relaxed sm:px-5 ${
                        j === 0 ? 'w-[34%] font-semibold text-ink' : 'text-charcoal-mid'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'quote':
      return (
        <figure className="max-w-3xl border-l-[3px] border-rosso pl-6">
          <blockquote className="font-serif text-[clamp(1.3rem,2.4vw,1.8rem)] italic leading-snug text-ink">
            “{block.text}”
          </blockquote>
          {block.cite && <figcaption className="label mt-4 leading-relaxed text-charcoal-mid">{block.cite}</figcaption>}
        </figure>
      )

    case 'tip':
      return (
        <p className="flex max-w-3xl items-start gap-3 bg-ink px-5 py-4 text-[0.97rem] leading-relaxed text-cream">
          <span className="label mt-1 shrink-0 text-rosso">Note</span>
          <span>{block.text}</span>
        </p>
      )

    case 'chips':
      return (
        <div>
          <p className="label mb-3 text-charcoal-mid">{block.label}</p>
          <ul className="flex flex-wrap gap-2">
            {block.items.map((c) => (
              <li key={c} className="border border-charcoal/25 px-3 py-1.5 text-sm text-charcoal">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )
  }
}

export function Sections({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-12">
      {sections.map((s, i) => (
        <div key={s.heading ?? i}>
          {s.heading && (
            <h3 className="mb-5 font-display text-[1.45rem] font-extrabold uppercase leading-tight tracking-[-0.02em] text-ink">
              {s.heading}
            </h3>
          )}
          <div className="space-y-5">
            {s.blocks.map((b, j) => (
              <BlockView key={j} block={b} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

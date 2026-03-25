interface SourcesBarProps {
  x: number; tg: number; osint: number; mil: number; whale: number
}

export default function SourcesBar({ x, tg, osint, mil, whale }: SourcesBarProps) {
  const sources = [
    { cls: 'src-x', count: x,     label: 'X / TWITTER' },
    { cls: 'src-t', count: tg,    label: 'TELEGRAM' },
    { cls: 'src-o', count: osint, label: 'OSINT' },
    { cls: 'src-m', count: mil,   label: 'MILITARY' },
    { cls: 'src-w', count: whale, label: 'WHALE' },
  ]

  return (
    <div className="sources">
      {sources.map(s => (
        <div key={s.cls} className={`src ${s.cls}`}>
          <span className="src-num">{s.count}</span>
          <span className="src-lbl">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

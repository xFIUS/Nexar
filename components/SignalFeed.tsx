import type { Signal } from '@/lib/types'
import { SRC_TAG_MAP } from '@/lib/data'

interface SignalFeedProps {
  signals: Signal[]
  sigCount: number
}

export default function SignalFeed({ signals, sigCount }: SignalFeedProps) {
  return (
    <div className="panel">
      <div className="p-head">
        <span className="p-title">// SIGNAL FEED</span>
        <span className="p-badge">{sigCount} TODAY</span>
      </div>
      <div className="p-body">
        {signals.map((s, i) => {
          const tc = SRC_TAG_MAP[s.src] || 't-osint'
          const pctColor = s.d === 'up' ? 'var(--green)' : 'var(--red)'
          return (
            <div key={i} className={`sig ${s.lvl}`}>
              <div className="sig-meta">
                <span className="sig-time">{s.age} AGO</span>
                <span className={`tag ${tc}`}>{s.src}</span>
                <span className="sig-mkt">↳ {s.mkt}</span>
              </div>
              <div className="sig-text">{s.text}</div>
              <div className="prob-row">
                <div className="prob-track">
                  <div className={`prob-fill ${s.d === 'up' ? 'pfup' : 'pfdown'}`} style={{ width: `${s.p}%` }} />
                </div>
                <span className="prob-pct" style={{ color: pctColor }}>
                  {s.d === 'up' ? '↑' : '↓'}{s.p}%
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

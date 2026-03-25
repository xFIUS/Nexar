'use client'

import { useEffect, useState } from 'react'

interface TopbarProps {
  sigCount: number
  tension: number
  mktsAffected: number
  milFlights: number
}

export default function Topbar({ sigCount, tension, mktsAffected, milFlights }: TopbarProps) {
  const [utcTime, setUtcTime] = useState('00:00:00')

  useEffect(() => {
    const tick = () => {
      const n = new Date()
      const p = (v: number) => String(v).padStart(2, '0')
      setUtcTime(`${p(n.getUTCHours())}:${p(n.getUTCMinutes())}:${p(n.getUTCSeconds())}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="topbar">
      <div className="logo">
        <svg className="logo-icon" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" stroke="#f5a623" strokeWidth="0.6" opacity="0.4" />
          <circle cx="18" cy="18" r="11" stroke="#f5a623" strokeWidth="0.6" opacity="0.6" />
          <circle cx="18" cy="18" r="5"  stroke="#f5a623" strokeWidth="1" />
          <line x1="1" y1="18" x2="35" y2="18" stroke="#f5a623" strokeWidth="0.5" opacity="0.4" />
          <line x1="18" y1="1" x2="18" y2="35" stroke="#f5a623" strokeWidth="0.5" opacity="0.4" />
          <circle cx="18" cy="18" r="2.5" fill="#f5a623" />
          <circle cx="18" cy="18" r="2.5" fill="#f5a623" opacity="0.4">
            <animate attributeName="r" values="2.5;10;2.5" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </svg>
        <div>
          <div className="logo-text">NEXAR</div>
          <div className="logo-sub">SIGNAL INTELLIGENCE TERMINAL</div>
        </div>
      </div>

      <div className="topbar-center">
        <div className="kpi">
          <div className="kpi-val amber">{sigCount}</div>
          <div className="kpi-label">SIGNALS</div>
        </div>
        <div className="kpi-div" />
        <div className="kpi">
          <div className="kpi-val red">{tension}</div>
          <div className="kpi-label">TENSION IDX</div>
        </div>
        <div className="kpi-div" />
        <div className="kpi">
          <div className="kpi-val green">{mktsAffected}</div>
          <div className="kpi-label">MKTS AFFECTED</div>
        </div>
        <div className="kpi-div" />
        <div className="kpi">
          <div className="kpi-val cyan">{milFlights}</div>
          <div className="kpi-label">MIL FLIGHTS</div>
        </div>
      </div>

      <div className="topbar-right">
        <div className="live-badge">
          <div className="live-dot" />
          LIVE
        </div>
        <div className="utc">{utcTime} UTC</div>
      </div>
    </header>
  )
}

'use client'

import { useState, useEffect } from 'react'
import type { Market } from '@/lib/types'
import { MARKETS } from '@/lib/data'

export default function MarketsPanel() {
  const [markets, setMarkets] = useState<Market[]>(MARKETS)

  useEffect(() => {
    const id = setInterval(() => {
      setMarkets(prev => {
        const next = [...prev]
        const idx = Math.floor(Math.random() * next.length)
        const delta = (Math.random() > 0.5 ? 1 : -1) * (1 + Math.floor(Math.random() * 3))
        const newOdds = Math.max(3, Math.min(97, next[idx].o + delta))
        next[idx] = { ...next[idx], o: newOdds, ch: delta }
        return next
      })
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="panel">
      <div className="p-head">
        <span className="p-title">// PREDICTION MARKETS</span>
        <span className="p-badge">LIVE ODDS</span>
      </div>
      <div className="p-body">
        {markets.map((m, i) => {
          const oc = m.o >= 60 ? 'mhi' : m.o >= 35 ? 'mmd' : 'mlo'
          const cc = m.ch >= 0 ? 'cup' : 'cdn'
          return (
            <div key={i} className="mkt-row">
              <div className="mkt-name">{m.n}</div>
              <div className={`mkt-odds ${oc}`}>{m.o}%</div>
              <div className={`mkt-chg ${cc}`}>{m.ch >= 0 ? '+' : ''}{m.ch}%</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

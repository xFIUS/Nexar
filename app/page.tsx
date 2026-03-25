'use client'

import { useState, useEffect, useCallback } from 'react'
import Topbar from '@/components/Topbar'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import SignalFeed from '@/components/SignalFeed'
import MarketsPanel from '@/components/MarketsPanel'
import FlightsPanel from '@/components/FlightsPanel'
import WhalePanel from '@/components/WhalePanel'
import SourcesBar from '@/components/SourcesBar'
import { INITIAL_SIGNALS, LIVE_SIGNALS } from '@/lib/data'
import type { Signal } from '@/lib/types'

export default function Home() {
  // ── Global KPI state ──
  const [sigCount,     setSigCount]     = useState(127)
  const [tension,      setTension]      = useState(73)
  const [mktsAffected, setMktsAffected] = useState(23)
  const [milFlights,   setMilFlights]   = useState(8)

  // ── Hero state ──
  const [activeSig,    setActiveSig]    = useState(47)
  const [hotZones,     setHotZones]     = useState(12)
  const [critAlerts,   setCritAlerts]   = useState(3)
  const [whaleVol,     setWhaleVol]     = useState('$4.2B')

  // ── Sources ──
  const [srcX,  setSrcX]  = useState(48)
  const [srcT,  setSrcT]  = useState(31)
  const [srcO,  setSrcO]  = useState(22)
  const [srcM,  setSrcM]  = useState(14)
  const [srcW,  setSrcW]  = useState(12)

  // ── Signal feed ──
  const [signals, setSignals] = useState<Signal[]>(INITIAL_SIGNALS)

  const tensionStatus = tension >= 80 ? '● CRITICAL' : tension >= 60 ? '● HIGH' : tension >= 40 ? '● MODERATE' : '● LOW'

  // ── Live simulation tick (every 3.2s) ──
  useEffect(() => {
    const id = setInterval(() => {
      setTension(prev => {
        const next = Math.max(18, Math.min(97, prev + (Math.random() - 0.47) * 2.5))
        return Math.round(next)
      })
      setSigCount(prev => prev + (Math.random() < 0.6 ? 1 : 0))
      setActiveSig(40 + Math.floor(Math.random() * 15))
      setHotZones(10 + Math.floor(Math.random() * 5))
      setCritAlerts(Math.floor(Math.random() * 5) + 1)
      setMilFlights(6 + Math.floor(Math.random() * 4))
      setMktsAffected(18 + Math.floor(Math.random() * 8))

      const roll = Math.random()
      if      (roll < 0.30) setSrcX(p => p + 1)
      else if (roll < 0.55) setSrcT(p => p + 1)
      else if (roll < 0.72) setSrcO(p => p + 1)
      else if (roll < 0.86) setSrcM(p => p + 1)
      else                  setSrcW(p => p + 1)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  // ── Inject new live signal (every 9s) ──
  useEffect(() => {
    const id = setInterval(() => {
      const s = { ...LIVE_SIGNALS[Math.floor(Math.random() * LIVE_SIGNALS.length)], age: 'LIVE' }
      setSignals(prev => [s, ...prev].slice(0, 12))
    }, 9000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Topbar
        sigCount={sigCount}
        tension={tension}
        mktsAffected={mktsAffected}
        milFlights={milFlights}
      />

      <Ticker />

      <Hero
        activeSig={activeSig}
        hotZones={hotZones}
        critAlerts={critAlerts}
        tension={tension}
        tensionStatus={tensionStatus}
        milFlights={milFlights}
        whaleVol={whaleVol}
      />

      <div className="panels">
        <SignalFeed signals={signals} sigCount={sigCount} />
        <MarketsPanel />
        <FlightsPanel />
        <WhalePanel />
      </div>

      <SourcesBar
        x={srcX} tg={srcT} osint={srcO} mil={srcM} whale={srcW}
      />
    </>
  )
}

import Globe from './Globe'

interface HeroProps {
  activeSig: number
  hotZones: number
  critAlerts: number
  tension: number
  tensionStatus: string
  milFlights: number
  whaleVol: string
}

export default function Hero({
  activeSig, hotZones, critAlerts, tension, tensionStatus, milFlights, whaleVol,
}: HeroProps) {
  return (
    <section className="hero">
      {/* Left cards */}
      <div className="hero-cards">
        <div className="card">
          <div className="card-label">ACTIVE SIGNALS</div>
          <div className="card-val amber">{activeSig}</div>
          <div className="card-sub">in last 60 minutes</div>
        </div>
        <div className="card">
          <div className="card-label">HOT ZONES</div>
          <div className="card-val orange">{hotZones}</div>
          <div className="card-sub">geopolitical regions</div>
        </div>
        <div className="card">
          <div className="card-label">CRITICAL ALERTS</div>
          <div className="card-val red">{critAlerts}</div>
          <div className="card-sub">requires attention</div>
        </div>
      </div>

      {/* Globe */}
      <Globe />

      {/* Right: tension + cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 200, flexShrink: 0 }}>
        <div className="tension-card">
          <div className="t-label">GLOBAL TENSION INDEX</div>
          <div className="t-num">{tension}</div>
          <div className="t-status">{tensionStatus}</div>
          <div className="t-track">
            <div className="t-fill" style={{ width: `${tension}%` }} />
          </div>
          <div className="t-ticks">
            <span>LOW</span><span>MOD</span><span>HIGH</span><span>CRIT</span>
          </div>
        </div>
        <div className="card">
          <div className="card-label">MIL FLIGHTS TRACKED</div>
          <div className="card-val cyan">{milFlights}</div>
          <div className="card-sub">AWACS · JSTARS · ISR</div>
        </div>
        <div className="card">
          <div className="card-label">WHALE VOLUME 24H</div>
          <div className="card-val green">{whaleVol}</div>
          <div className="card-sub">cross-chain tracked</div>
        </div>
      </div>
    </section>
  )
}

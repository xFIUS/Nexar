import { FLIGHTS } from '@/lib/data'

export default function FlightsPanel() {
  return (
    <div className="panel">
      <div className="p-head">
        <span className="p-title">// MIL FLIGHTS</span>
        <span className="alert-pill">LIVE</span>
      </div>
      <div className="p-body">
        {FLIGHTS.map((f, i) => (
          <div key={i} className="flt-row">
            <div>
              <div className="flt-cs">{f.cs}</div>
              <div className="flt-icon">✈</div>
            </div>
            <div>
              <div className="flt-route">{f.route}</div>
              <div className="flt-type">{f.type}</div>
            </div>
            <div className="flt-alt">{f.alt}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

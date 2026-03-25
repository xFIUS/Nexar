import { WHALES } from '@/lib/data'

export default function WhalePanel() {
  return (
    <div className="panel">
      <div className="p-head">
        <span className="p-title">// WHALE TRACKER</span>
        <span className="p-badge">ALL CHAINS</span>
      </div>
      <div className="p-body">
        {WHALES.map((w, i) => (
          <div key={i} className="whl-row">
            <div className="whl-top">
              <span className="whl-asset">{w.a}</span>
              <span className={`whl-amt ${w.d === 'buy' ? 'wbuy' : 'wsell'}`}>
                {w.d === 'buy' ? '▲' : '▼'} {w.amt}
              </span>
            </div>
            <div className="whl-det">{w.det}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

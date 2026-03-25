import { TICKER_ITEMS } from '@/lib/data'

export default function Ticker() {
  // Duplicate for seamless infinite loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((item, i) => (
          <span key={i} className="tick-item">
            <span className={`tag ${item.tag}`}>{item.tagLabel}</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}

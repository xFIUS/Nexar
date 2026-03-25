import type { Signal, Market, Flight, Whale, Hotspot } from './types'

export const INITIAL_SIGNALS: Signal[] = [
  { lvl: 'critical', src: 'TELEGRAM',   mkt: 'CEASEFIRE',    age: '2m',  text: 'BREAKING: Missile strike on infrastructure reported. 3 Telegram channels confirming.', p: 78, d: 'up' },
  { lvl: 'high',     src: 'MIL FLIGHT', mkt: 'NATO EXP',     age: '7m',  text: 'USAF E-8C JSTARS spotted over Eastern Europe. Ground surveillance mission active.',    p: 61, d: 'up' },
  { lvl: 'high',     src: 'WHALE',      mkt: 'BTC PRICE',    age: '12m', text: '$31.4M BTC to Binance cold wallet. Historical pattern precedes sell-offs.',            p: 55, d: 'down' },
  { lvl: 'medium',   src: 'X/TWITTER',  mkt: 'ELECTION',     age: '18m', text: '847 accounts tweeting same talking point within 20 minutes. Bot net suspected.',       p: 42, d: 'down' },
  { lvl: 'medium',   src: 'OSINT',      mkt: 'OIL PRICE',    age: '24m', text: '3 tankers rerouting away from Strait of Hormuz. Satellite confirms activity.',          p: 67, d: 'up' },
  { lvl: 'low',      src: 'X/TWITTER',  mkt: 'FED RATE',     age: '31m', text: 'Fed official Daly: tone analysis suggests hawkish tilt. Markets unmoved.',             p: 38, d: 'down' },
  { lvl: 'critical', src: 'TELEGRAM',   mkt: 'SANCTIONS',    age: '35m', text: 'Wagner channels: undisclosed military activity near disputed borders.',                p: 71, d: 'up' },
  { lvl: 'high',     src: 'OSINT',      mkt: 'TAIWAN STRAIT',age: '41m', text: 'PLA Navy: 8 ships near median line. AIS anomalies detected by tracking systems.',      p: 64, d: 'up' },
  { lvl: 'medium',   src: 'WHALE',      mkt: 'ETH',          age: '48m', text: '22,000 ETH position opened. Cross-chain bridge activity elevated.',                    p: 51, d: 'up' },
]

export const LIVE_SIGNALS: Signal[] = [
  { lvl: 'high',     src: 'TELEGRAM',   mkt: 'UKRAINE WAR',  age: 'LIVE', text: 'Channel spike: 200+ msg/min on front line activity.',             p: 66, d: 'up' },
  { lvl: 'critical', src: 'MIL FLIGHT', mkt: 'CEASEFIRE',    age: 'LIVE', text: '2nd AWACS scrambled. Two simultaneous ops detected.',             p: 81, d: 'up' },
  { lvl: 'medium',   src: 'WHALE',      mkt: 'OIL FUTURES',  age: 'LIVE', text: '$240M notional petroleum futures via CME.',                       p: 53, d: 'up' },
  { lvl: 'high',     src: 'OSINT',      mkt: 'IRAN',         age: 'LIVE', text: 'Iranian navy vessel in unusual position. Satellite confirmed.',    p: 69, d: 'up' },
  { lvl: 'medium',   src: 'X/TWITTER',  mkt: 'FED RATE',     age: 'LIVE', text: 'Jerome Powell speech sentiment: hawkish tilt detected by NLP.',   p: 44, d: 'down' },
]

export const TICKER_ITEMS = [
  { tag: 't-mil',   tagLabel: 'MIL',    text: 'NATO E-3A AWACS airborne over Baltic Sea — surveillance confirmed' },
  { tag: 't-whale', tagLabel: 'WHALE',  text: '$48M BTC moved to Binance cold wallet — pattern precedes sell-off' },
  { tag: 't-osint', tagLabel: 'OSINT',  text: 'Troop movements near northern border — 3 sources unverified' },
  { tag: 't-mkt',   tagLabel: 'MARKET', text: 'Polymarket "Ceasefire before June?" ↑12% in 4h — now at 64%' },
  { tag: 't-alert', tagLabel: 'ALERT',  text: 'Coordinated bot surge on Telegram OSINT channels detected' },
  { tag: 't-mil',   tagLabel: 'MIL',    text: 'US P-8 Poseidon active over South China Sea — maritime patrol' },
  { tag: 't-whale', tagLabel: 'WHALE',  text: 'ETH accumulation: 12,400 ETH bought in 2h across 3 anon wallets' },
  { tag: 't-mkt',   tagLabel: 'MARKET', text: '"Fed rate cut Q3 2025?" 71% YES · +8% since yesterday\'s close' },
  { tag: 't-osint', tagLabel: 'OSINT',  text: 'Satellite imagery: increased port activity at Vladivostok confirmed' },
  { tag: 't-mil',   tagLabel: 'MIL',    text: 'RAF RC-135 Rivet Joint SIGINT active over Mediterranean theatre' },
]

export const MARKETS: Market[] = [
  { n: 'Ukraine ceasefire before Jun 2025', o: 64, ch: 12 },
  { n: 'Fed rate cut in Q3 2025',           o: 71, ch: 8  },
  { n: 'BTC above $90K by Dec 2025',        o: 58, ch: -4 },
  { n: 'Taiwan conflict in 2025',           o: 18, ch: 3  },
  { n: 'Oil > $100/bbl by Q4 2025',         o: 41, ch: 9  },
  { n: 'Russia regime change 2025',         o: 12, ch: -2 },
  { n: 'US recession in 2025',              o: 33, ch: 1  },
  { n: 'NATO Article 5 invoked 2025',       o: 8,  ch: 2  },
  { n: 'Gold > $3,500 in 2025',             o: 55, ch: 7  },
  { n: 'Iran nuclear deal 2025',            o: 22, ch: -5 },
]

export const FLIGHTS: Flight[] = [
  { cs: 'IRON01', route: 'Rota → Berlin',          type: 'E-8C JSTARS · US ARMY', alt: '32,000ft' },
  { cs: 'NATO99', route: 'Geilenkirchen → Baltic',  type: 'E-3A AWACS · NATO',     alt: '28,500ft' },
  { cs: 'RC135W', route: 'Mildenhall → Black Sea',  type: 'RC-135W Rivet · USAF',  alt: '35,000ft' },
  { cs: 'UK-R10', route: 'Brize Norton → Med',      type: 'RC-135 · RAF',          alt: '33,000ft' },
  { cs: 'POSX02', route: 'Diego Garcia → SCS',      type: 'P-8 Poseidon · USN',    alt: '22,000ft' },
  { cs: 'BISON1', route: 'Dyess AFB → Pacific',     type: 'B-1B Lancer · USAF',    alt: '40,000ft' },
]

export const WHALES: Whale[] = [
  { a: 'BTC',  amt: '$48.2M',  d: 'sell', det: '3x wallets → Binance · 2m ago' },
  { a: 'ETH',  amt: '+22,400', d: 'buy',  det: 'Anon wallet · Uniswap · 7m ago' },
  { a: 'SOL',  amt: '$8.1M',   d: 'sell', det: 'Kraken deposit · 11m ago' },
  { a: 'BTC',  amt: '+$21.7M', d: 'buy',  det: 'Cold storage · OTC · 19m ago' },
  { a: 'USDC', amt: '$100M',   d: 'buy',  det: 'Circle mint confirmed · 23m ago' },
  { a: 'XRP',  amt: '$14.3M',  d: 'sell', det: 'Ripple wallet → Bitstamp · 28m ago' },
  { a: 'ETH',  amt: '+$9.8M',  d: 'buy',  det: 'DeFi protocol deposit · 34m ago' },
]

export const HOTSPOTS: Hotspot[] = [
  { coords: [30,   50],   i: 0.95, c: [255, 59,  59],  lb: 'UA' },
  { coords: [35,   31],   i: 0.80, c: [255, 119, 48],  lb: 'ME' },
  { coords: [37,   55],   i: 0.40, c: [0,   212, 255], lb: 'RU' },
  { coords: [114,  23],   i: 0.70, c: [245, 166, 35],  lb: 'SCS' },
  { coords: [139,  35],   i: 0.55, c: [245, 166, 35],  lb: 'JP' },
  { coords: [126,  38],   i: 0.40, c: [0,   212, 255], lb: 'KR' },
  { coords: [-74,  40],   i: 0.38, c: [0,   212, 255], lb: 'US' },
  { coords: [-0.1, 51],   i: 0.28, c: [0,   212, 255], lb: 'UK' },
  { coords: [72,   19],   i: 0.30, c: [0,   212, 255], lb: 'IN' },
  { coords: [151,  -33],  i: 0.20, c: [0,   212, 255], lb: 'AU' },
]

export const HOT_COUNTRY_IDS = new Set([804, 275, 643, 156, 356, 586, 368, 364, 760, 50, 566, 410, 840, 826])

export const SRC_TAG_MAP: Record<string, string> = {
  'TELEGRAM':   't-osint',
  'MIL FLIGHT': 't-mil',
  'WHALE':      't-whale',
  'X/TWITTER':  't-mkt',
  'OSINT':      't-osint',
}

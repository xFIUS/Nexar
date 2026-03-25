export type SignalLevel = 'critical' | 'high' | 'medium' | 'low'
export type SignalDirection = 'up' | 'down'

export interface Signal {
  lvl: SignalLevel
  src: string
  mkt: string
  age: string
  text: string
  p: number
  d: SignalDirection
}

export interface Market {
  n: string
  o: number
  ch: number
}

export interface Flight {
  cs: string
  route: string
  type: string
  alt: string
}

export interface Whale {
  a: string
  amt: string
  d: 'buy' | 'sell'
  det: string
}

export interface Hotspot {
  coords: [number, number]
  i: number
  c: [number, number, number]
  lb: string
}

export interface SourceCount {
  id: string
  label: string
  color: string
  dimColor: string
}

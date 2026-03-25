'use client'

import { useEffect, useRef } from 'react'
import { HOTSPOTS, HOT_COUNTRY_IDS } from '@/lib/data'

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = 400, H = 400, R = 196
    let rotation = 0
    let animFrameId: number
    let countries: any = null
    let borders: any = null

    async function loadLibs() {
      // Dynamically load d3 and topojson from CDN
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js')
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js')
    }

    function loadScript(src: string): Promise<void> {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
        const s = document.createElement('script')
        s.src = src; s.onload = () => resolve(); s.onerror = reject
        document.head.appendChild(s)
      })
    }

    async function init() {
      try {
        await loadLibs()
        const d3 = (window as any).d3
        const topojson = (window as any).topojson

        const projection = d3.geoOrthographic()
          .scale(R).translate([W / 2, H / 2]).clipAngle(90)
        const path = d3.geoPath(projection, ctx)
        const graticule = d3.geoGraticule()()
        const sphere = { type: 'Sphere' }

        const world = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r => r.json())
        countries = topojson.feature(world, world.objects.countries)
        borders   = topojson.mesh(world, world.objects.countries, (a: any, b: any) => a !== b)

        function drawFrame() {
          ctx.clearRect(0, 0, W, H)
          projection.rotate([rotation, -15, 0])

          // Ocean
          ctx.save()
          ctx.beginPath(); path(sphere)
          const og = ctx.createRadialGradient(W/2-55, H/2-55, 0, W/2, H/2, R)
          og.addColorStop(0, '#0d1520'); og.addColorStop(0.6, '#071018'); og.addColorStop(1, '#030a10')
          ctx.fillStyle = og; ctx.fill(); ctx.restore()

          // Graticule
          ctx.save(); ctx.beginPath(); path(graticule)
          ctx.strokeStyle = 'rgba(245,166,35,0.07)'; ctx.lineWidth = 0.4; ctx.stroke(); ctx.restore()

          // Countries
          countries.features.forEach((feat: any) => {
            const isHot = HOT_COUNTRY_IDS.has(+feat.id)
            ctx.save(); ctx.beginPath(); path(feat)
            ctx.fillStyle = isHot ? 'rgba(245,166,35,0.18)' : 'rgba(30,45,38,0.85)'
            ctx.fill()
            if (isHot) { ctx.strokeStyle = 'rgba(245,166,35,0.35)'; ctx.lineWidth = 0.8; ctx.stroke() }
            ctx.restore()
          })

          // Borders
          ctx.save(); ctx.beginPath(); path(borders)
          ctx.strokeStyle = 'rgba(245,166,35,0.22)'; ctx.lineWidth = 0.5; ctx.stroke(); ctx.restore()

          // Sphere outline
          ctx.save(); ctx.beginPath(); path(sphere)
          ctx.strokeStyle = 'rgba(245,166,35,0.12)'; ctx.lineWidth = 0.8; ctx.stroke(); ctx.restore()

          // Hotspot markers
          HOTSPOTS.forEach(h => {
            const [px, py] = projection(h.coords)
            const rotRad = rotation * Math.PI / 180
            const lonRad = h.coords[0] * Math.PI / 180
            const latRad = h.coords[1] * Math.PI / 180
            const nx = Math.cos(latRad) * Math.cos(lonRad - rotRad)
            if (nx <= 0) return
            const fade = Math.max(0, Math.min(1, nx * 2.2))
            const pulse = 0.5 + 0.5 * Math.sin(Date.now() * 0.0028 + h.coords[1])
            const sz = 3 + h.i * 6
            const [cr, cg, cb] = h.c

            ctx.save(); ctx.beginPath()
            ctx.arc(px, py, sz * 2.5 * pulse, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(${cr},${cg},${cb},${fade * 0.25})`; ctx.lineWidth = 1; ctx.stroke(); ctx.restore()

            const grad = ctx.createRadialGradient(px, py, 0, px, py, sz)
            grad.addColorStop(0, `rgba(${cr},${cg},${cb},${fade})`)
            grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)
            ctx.save(); ctx.beginPath(); ctx.arc(px, py, sz, 0, Math.PI * 2)
            ctx.fillStyle = grad; ctx.fill(); ctx.restore()

            if (fade > 0.45) {
              ctx.save(); ctx.font = "bold 8px 'Share Tech Mono'"
              ctx.fillStyle = `rgba(${cr},${cg},${cb},${fade * 0.92})`
              ctx.fillText(h.lb, px + sz + 3, py + 3); ctx.restore()
            }
          })

          // Night shadow
          ctx.save(); ctx.beginPath(); path(sphere); ctx.clip()
          const ng = ctx.createLinearGradient(W/2-R, H/2, W/2+R, H/2)
          ng.addColorStop(0, 'rgba(0,0,0,0)'); ng.addColorStop(0.44, 'rgba(0,0,0,0)')
          ng.addColorStop(0.54, 'rgba(0,0,0,0.35)'); ng.addColorStop(1, 'rgba(0,0,0,0.62)')
          ctx.fillStyle = ng; ctx.fillRect(0, 0, W, H); ctx.restore()

          // Atmosphere
          const atm = ctx.createRadialGradient(W/2, H/2, R-1, W/2, H/2, R+14)
          atm.addColorStop(0, 'rgba(245,166,35,0.12)'); atm.addColorStop(0.5, 'rgba(0,212,255,0.04)'); atm.addColorStop(1, 'rgba(0,0,0,0)')
          ctx.beginPath(); ctx.arc(W/2, H/2, R+14, 0, Math.PI*2); ctx.fillStyle = atm; ctx.fill()

          // Rim
          const rim = ctx.createLinearGradient(W/2-R, H/2-R, W/2+R, H/2+R)
          rim.addColorStop(0, 'rgba(245,166,35,0.6)'); rim.addColorStop(0.4, 'rgba(245,166,35,0.2)'); rim.addColorStop(1, 'rgba(0,212,255,0.35)')
          ctx.beginPath(); ctx.arc(W/2, H/2, R, 0, Math.PI*2); ctx.strokeStyle = rim; ctx.lineWidth = 1.5; ctx.stroke()

          rotation += 0.14
          animFrameId = requestAnimationFrame(drawFrame)
        }

        drawFrame()
      } catch {
        fallback()
      }
    }

    function fallback() {
      let ang = 0
      function draw() {
        ctx.clearRect(0, 0, W, H)
        ctx.save(); ctx.beginPath(); ctx.arc(W/2, H/2, R, 0, Math.PI*2); ctx.clip()
        const bg = ctx.createRadialGradient(W/2-50, H/2-50, 0, W/2, H/2, R)
        bg.addColorStop(0, '#0d1520'); bg.addColorStop(1, '#030a10')
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H)
        for (let lat = -60; lat <= 60; lat += 20) {
          const rl = R * Math.cos(lat * Math.PI / 180), yo = R * Math.sin(lat * Math.PI / 180)
          ctx.beginPath(); ctx.ellipse(W/2, H/2-yo, rl, rl*0.18, 0, 0, Math.PI*2)
          ctx.strokeStyle = lat === 0 ? 'rgba(245,166,35,0.2)' : 'rgba(245,166,35,0.07)'
          ctx.lineWidth = lat === 0 ? 1 : 0.4; ctx.stroke()
        }
        ctx.restore()
        const rim = ctx.createLinearGradient(W/2-R, H/2-R, W/2+R, H/2+R)
        rim.addColorStop(0, 'rgba(245,166,35,0.5)'); rim.addColorStop(1, 'rgba(0,212,255,0.3)')
        ctx.beginPath(); ctx.arc(W/2, H/2, R, 0, Math.PI*2); ctx.strokeStyle = rim; ctx.lineWidth = 1.5; ctx.stroke()
        ang += 0.003
        animFrameId = requestAnimationFrame(draw)
      }
      draw()
    }

    init()

    return () => { if (animFrameId) cancelAnimationFrame(animFrameId) }
  }, [])

  return (
    <div className="globe-wrap">
      <div className="globe-rings">
        <div className="ring r1" />
        <div className="ring r2" />
        <div className="ring r3" />
      </div>
      <div className="globe-scan" />
      <canvas ref={canvasRef} id="globe" width={400} height={400} />
    </div>
  )
}

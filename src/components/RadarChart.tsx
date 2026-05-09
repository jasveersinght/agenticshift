export default function RadarChart() {
  const cx = 210, cy = 210, r = 155
  const labels = [
    'Analytical', 'Creative', 'Linguistic',
    'Practical', 'Interpersonal', 'Systems\nThinking', 'Scientific\nReasoning'
  ]
  const values = [0.88, 0.72, 0.61, 0.91, 0.67, 0.82, 0.76]
  const n = 7

  const angleOf = (i: number) => (i * 2 * Math.PI) / n - Math.PI / 2

  const gridPoints = (scale: number) =>
    Array.from({ length: n }, (_, i) => {
      const a = angleOf(i)
      return `${cx + r * scale * Math.cos(a)},${cy + r * scale * Math.sin(a)}`
    }).join(' ')

  const dataPoints = values
    .map((v, i) => {
      const a = angleOf(i)
      return `${cx + r * v * Math.cos(a)},${cy + r * v * Math.sin(a)}`
    })
    .join(' ')

  return (
    <svg viewBox="0 0 420 420" style={{ width: '100%', maxWidth: '420px', margin: '0 auto', display: 'block' }}>
      {/* Grid polygons */}
      {[0.25, 0.5, 0.75, 1].map((s, i) => (
        <polygon
          key={i}
          points={gridPoints(s)}
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
        />
      ))}
      {/* Axis lines */}
      {Array.from({ length: n }, (_, i) => {
        const a = angleOf(i)
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={cx + r * Math.cos(a)}
            y2={cy + r * Math.sin(a)}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
        )
      })}
      {/* Data polygon */}
      <polygon
        points={dataPoints}
        fill="rgba(127,119,221,0.22)"
        stroke="#7f77dd"
        strokeWidth="1.5"
      />
      {/* Data points */}
      {values.map((v, i) => {
        const a = angleOf(i)
        return (
          <circle
            key={i}
            cx={cx + r * v * Math.cos(a)}
            cy={cy + r * v * Math.sin(a)}
            r="3.5"
            fill="#7f77dd"
          />
        )
      })}
      {/* Labels */}
      {labels.map((label, i) => {
        const a = angleOf(i)
        const lx = cx + (r + 32) * Math.cos(a)
        const ly = cy + (r + 32) * Math.sin(a)
        return (
          <text
            key={i}
            x={lx} y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize="10"
            fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
            fontWeight="700"
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            {label.split('\n').map((line, j) => (
              <tspan key={j} x={lx} dy={j === 0 ? 0 : 13}>{line.toUpperCase()}</tspan>
            ))}
          </text>
        )
      })}
    </svg>
  )
}

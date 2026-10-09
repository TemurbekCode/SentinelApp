import { memo } from 'react'

function Reading({ row }) {
  if (row.pill) return <span className={`pill ${row.pill}`}>{row.reading}</span>
  return <span className={row.tone ? `tone-${row.tone}` : undefined}>{row.reading}</span>
}

function MetricsTable({ rows }) {
  return (
    <div className="metrics-panel">
      <div className="metrics-scroll" tabIndex={0} role="region" aria-label="Example metrics">
        <table>
          <thead>
            <tr>
              <th scope="col">Signal</th>
              <th scope="col" className="hide-m">Example reading</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.signal}>
                <th scope="row">{row.signal}</th>
                <td className="hide-m">{row.example}</td>
                <td><Reading row={row} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default memo(MetricsTable)

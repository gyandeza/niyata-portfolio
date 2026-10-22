export default function HeroSystem() {
  return (
    <div className="system-board" aria-label="Niyata operating model">
      <div className="board-topline">
        <span>NIYATA / SYSTEM MAP</span>
        <span>V3.0</span>
      </div>

      <div className="board-stage">
        <div className="board-rail" />
        <div className="node node-a">
          <small>01</small>
          <strong>OPERATIONS</strong>
          <span>field reality</span>
        </div>
        <div className="node node-b">
          <small>02</small>
          <strong>PROCESS</strong>
          <span>how work flows</span>
        </div>
        <div className="node node-c">
          <small>03</small>
          <strong>DATA</strong>
          <span>what becomes visible</span>
        </div>
        <div className="node node-d featured">
          <small>04</small>
          <strong>DECISION</strong>
          <span>what changes next</span>
        </div>
      </div>

      <div className="board-footer">
        <div>
          <small>OUTPUT</small>
          <strong>Practical systems for complex operations.</strong>
        </div>
        <span className="pulse"><i /> ACTIVE</span>
      </div>
    </div>
  )
}

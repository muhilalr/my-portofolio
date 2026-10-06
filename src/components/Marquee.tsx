export function Marquee() {
  return <div className="jc-marquee" aria-label="Areas of expertise"><div className="jc-marquee-track">{[0, 1].map((group) => <div className="jc-marquee-group" key={group} aria-hidden={group === 1}><span>SOFTWARE ENGINEER</span><i /><span>FULLSTACK DEVELOPER</span><i /><span>WEB &amp; SYSTEM DEVELOPMENT</span><i /><span>BACKEND DEVELOPER</span><i /><span>IT ENTHUSIAST</span><i /></div>)}</div></div>;
}

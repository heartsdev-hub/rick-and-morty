function SectionHeader({ title, subtitle, extra }) {
  return (
    <header className="section-header">
      <div>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {extra ? <div>{extra}</div> : null}
    </header>
  )
}

export default SectionHeader

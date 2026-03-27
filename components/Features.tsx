export default function Features() {
  const features = [
    {
      title: 'Auto-Prioritization',
      description: 'Agents analyze user data, competitor moves, and business impact — surfacing what to build next, ranked by ROI.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <path d="M3 6h18M7 12h10M11 18h2" />
        </svg>
      ),
    },
    {
      title: 'Agent Teams',
      description: 'PM, designer, engineer, and QA agents collaborate in real-time — arguing over specs, catching edge cases, and shipping clean code.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Continuous Iteration',
      description: 'Forge never stops. Agents run 24/7 — shipping, testing, gathering feedback, and improving without waiting for your next sprint.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      ),
    },
    {
      title: 'Zero Meetings',
      description: 'All decisions are documented, async, and traceable. Stand-ups, sprints, and retros are replaced by a living product dashboard.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.9 4.9 14.2 14.2" />
        </svg>
      ),
    },
  ]

  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            A Product Team That{' '}
            <span className="text-accent">Never Stops Shipping</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Forge replaces your entire product org with a fleet of AI agents that build, test, and iterate without politics or process.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-8">
              <div className="text-accent mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

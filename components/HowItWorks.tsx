export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Define Your Product',
      description: 'Tell Forge your vision — market, users, core use case. 30 minutes of input replaces a 3-month discovery phase.',
    },
    {
      number: '02',
      title: 'Agents Build It',
      description: 'Forge deploys your agent team. They spec, design, build, test, and ship in parallel. You watch a live build log.',
    },
    {
      number: '03',
      title: 'You Control the Roadmap',
      description: 'Approve major decisions, set direction, and steer priority. Everything else is handled. No meetings, ever.',
    },
  ]

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            From Idea to Product in{' '}
            <span className="text-accent">Days</span>
          </h2>
          <p className="text-slate-400 text-lg">Not months. Not quarters. Days.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-accent/30 to-transparent z-10" />
              )}
              <div className="card p-8">
                <div className="text-5xl font-black text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

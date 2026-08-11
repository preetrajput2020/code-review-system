export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon size={19} strokeWidth={2} />
      </div>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-subtle">{description}</p>
    </div>
  )
}

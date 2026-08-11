import { FileSearch } from 'lucide-react'
import Loading from './Loading.jsx'

function Section({ icon, title, items, code }) {
  return (
    <div className="rounded-lg border border-code-border bg-code-panel p-4">
      <h4 className="flex items-center gap-2 text-sm font-medium text-code-text">
        <span>{icon}</span>
        {title}
      </h4>

      {items && (
        <ul className="mt-2.5 space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-subtle">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {code && (
        <pre className="code-scroll mt-2.5 overflow-x-auto rounded-md border border-code-border bg-code-bg p-3 font-mono text-[12.5px] leading-relaxed text-[#9CDCFE]">
          {code}
        </pre>
      )}
    </div>
  )
}

export default function ReviewPanel({ status, review }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-code-border bg-code-bg shadow-card">
      <div className="border-b border-code-border px-5 py-4">
        <h3 className="text-sm font-semibold text-code-text">Code Review</h3>
      </div>

      <div className="flex-1 overflow-y-auto code-scroll p-5">
        {status === 'idle' && (
          <div className="flex h-full flex-col items-center justify-center gap-2 py-16 text-center">
            <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-code-border text-subtle">
              <FileSearch size={18} />
            </div>
            <p className="text-sm font-medium text-code-text">
              Your AI code review will appear here.
            </p>
            <p className="max-w-xs text-xs text-subtle">
              Paste your code and click "Review Code" to get started.
            </p>
          </div>
        )}

        {status === 'loading' && <Loading />}

        {status === 'done' && review && (
          <div className="space-y-3">
            <p className="text-[13px] text-subtle">{review.summary}</p>
            {review.sections.map((s) => (
              <Section key={s.key} icon={s.icon} title={s.title} items={s.items} code={s.code} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

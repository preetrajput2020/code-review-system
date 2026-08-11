import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const codeLines = [
  { n: 1, tokens: [{ t: 'kw', v: 'function' }, { t: 'fn', v: ' getUser' }, { t: 'p', v: '(id) {' }] },
  { n: 2, tokens: [{ t: 'p', v: '  let ' }, { t: 'v', v: 'user' }, { t: 'p', v: ' = ' }, { t: 'kw', v: 'null' }, { t: 'p', v: ';' }] },
  { n: 3, tokens: [{ t: 'p', v: '  ' }, { t: 'v', v: 'users' }, { t: 'p', v: '.forEach(' }, { t: 'fn', v: 'u' }, { t: 'p', v: ' => {' }] },
  { n: 4, tokens: [{ t: 'p', v: '    ' }, { t: 'kw', v: 'if' }, { t: 'p', v: ' (u.id == id) user = u;' }], flagged: true },
  { n: 5, tokens: [{ t: 'p', v: '  });' }] },
  { n: 6, tokens: [{ t: 'p', v: '  ' }, { t: 'kw', v: 'return' }, { t: 'p', v: ' user;' }] },
  { n: 7, tokens: [{ t: 'p', v: '}' }] },
]

const tokenColor = {
  kw: 'text-[#8FB3FF]',
  fn: 'text-[#E2C08D]',
  v: 'text-[#9CDCFE]',
  p: 'text-code-text',
}

export default function CodeEditor() {
  return (
    <div className="grid gap-4 sm:grid-cols-5">
      {/* code window */}
      <div className="sm:col-span-3 overflow-hidden rounded-xl border border-code-border bg-code-bg shadow-card">
        <div className="flex items-center gap-1.5 border-b border-code-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-subtle">users.js</span>
        </div>
        <div className="code-scroll overflow-x-auto px-4 py-4 font-mono text-[13px] leading-6">
          {codeLines.map((line) => (
            <div
              key={line.n}
              className={`flex gap-4 rounded ${line.flagged ? 'bg-danger/10 -mx-2 px-2' : ''}`}
            >
              <span className="w-4 shrink-0 select-none text-right text-[#4B5063]">
                {line.n}
              </span>
              <span className="whitespace-pre">
                {line.tokens.map((tok, i) => (
                  <span key={i} className={tokenColor[tok.t]}>
                    {tok.v}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* review panel */}
      <div className="sm:col-span-2 flex flex-col gap-3 rounded-xl border border-code-border bg-code-panel p-4 shadow-card">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-subtle">
            AI Review
          </span>
          <span className="rounded-full bg-danger/15 px-2 py-0.5 text-[11px] font-medium text-[#FF8A7A]">
            1 issue
          </span>
        </div>

        <div className="rounded-lg border border-code-border bg-code-bg p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle size={14} className="mt-0.5 shrink-0 text-warn" />
            <div>
              <p className="text-xs font-medium text-code-text">Loose equality on line 4</p>
              <p className="mt-1 text-[11px] leading-relaxed text-subtle">
                Use <code className="text-[#E2C08D]">===</code> instead of{' '}
                <code className="text-[#E2C08D]">==</code> to avoid type coercion bugs.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-code-border bg-code-bg p-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-good" />
            <div>
              <p className="text-xs font-medium text-code-text">Function is readable</p>
              <p className="mt-1 text-[11px] leading-relaxed text-subtle">
                Naming and structure are clear and easy to follow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

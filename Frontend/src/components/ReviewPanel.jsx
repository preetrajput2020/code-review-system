import { FileSearch } from 'lucide-react'
import Loading from './Loading.jsx'

export default function ReviewPanel({ status, review, error }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-code-border bg-code-bg shadow-card">

      <div className="border-b border-code-border px-5 py-4">
        <h3 className="text-sm font-semibold text-code-text">
          Code Review
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto code-scroll p-5">

        {/* Empty */}
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

        {/* Loading */}
        {status === 'loading' && <Loading />}

        {/* Error */}
        {status === 'error' && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
            <h4 className="text-sm font-medium text-red-400">
              Review Failed
            </h4>

            <p className="mt-2 whitespace-pre-wrap text-sm text-subtle">
              {error}
            </p>
          </div>
        )}

        {/* AI Response */}
        {status === 'done' && review && (
          <div className="rounded-lg border border-code-border bg-code-panel p-4">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-medium text-code-text">
                AI Analysis
              </h4>

              <span className="rounded-full bg-green-500/10 px-2 py-1 text-[11px] text-green-400">
                Completed
              </span>
            </div>

            <div className="whitespace-pre-wrap text-[13px] leading-6 text-subtle">
              {review}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
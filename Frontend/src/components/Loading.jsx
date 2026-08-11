export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      <p className="text-sm font-medium text-ink">Analyzing your code...</p>
      <p className="text-xs text-subtle">This usually takes a few seconds.</p>
    </div>
  )
}

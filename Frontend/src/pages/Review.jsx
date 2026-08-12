import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Play, Trash2 } from 'lucide-react'
import ReviewPanel from '../components/ReviewPanel.jsx'

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'other']

const sampleCode = `function getUser(id) {
  let user = null;
  users.forEach(u => {
    if (u.id == id) user = u;
  });
  return user;
}`

export default function Review() {
  const [language, setLanguage] = useState('JavaScript')
  const [code, setCode] = useState('')
  const [status, setStatus] = useState('idle')
  const [review, setReview] = useState('')
  const [error, setError] = useState('')

  const handleReview = async () => {
    if (!code.trim()) return

    setStatus('loading')
    setError('')
    setReview('')

    try {
     const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/ai/generate`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code,
    }),
  }
)

      const data = await response.text()

      if (!response.ok) {
        throw new Error(data || 'Failed to review code')
      }

      setReview(data)
      setStatus('done')
    } catch (error) {
      console.error('Review Error:', error)
      setError(error.message)
      setStatus('error')
    }
  }

  const handleClear = () => {
    setCode('')
    setReview('')
    setError('')
    setStatus('idle')
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="border-b border-line bg-paper">
        <div className="container-x flex h-16 items-center justify-between">
          <div>
            <h1 className="text-base font-semibold text-ink sm:text-lg">
              AI Code Reviewer
            </h1>
            <p className="text-xs text-subtle">
              Paste your code and get an AI-powered review.
            </p>
          </div>

          <Link
            to="/"
            className="focus-ring flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm text-subtle transition-colors hover:border-ink hover:text-ink"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </div>
      </header>

      <main className="container-x flex-1 py-6 sm:py-8">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">

          {/* Input panel */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
              <h3 className="text-sm font-semibold text-ink">
                Your Code
              </h3>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="focus-ring rounded-md border border-line bg-white px-2.5 py-1.5 text-xs font-medium text-ink"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              spellCheck={false}
              className="code-scroll h-72 w-full resize-none bg-code-bg p-4 font-mono text-[13px] leading-6 text-code-text outline-none placeholder:text-subtle lg:h-[26rem]"
            />

            <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
              <button
                onClick={() => setCode(sampleCode)}
                className="focus-ring text-xs text-subtle underline-offset-2 hover:text-ink hover:underline"
              >
                Use sample code
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleClear}
                  className="focus-ring flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-sm text-subtle transition-colors hover:border-ink hover:text-ink"
                >
                  <Trash2 size={14} />
                  Clear
                </button>

                <button
                  onClick={handleReview}
                  disabled={status === 'loading'}
                  className="focus-ring flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Play size={14} />
                  {status === 'loading' ? 'Reviewing...' : 'Review Code'}
                </button>
              </div>
            </div>
          </div>

          {/* Output panel */}
          <div className="h-[30rem] lg:h-[38.5rem]">
            <ReviewPanel
              status={status}
              review={review}
              error={error}
            />
          </div>

        </div>
      </main>
    </div>
  )
}
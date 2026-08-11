import { SearchCode, Gauge, ShieldCheck, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import CodeEditor from '../components/CodeEditor.jsx'

const features = [
  {
    icon: SearchCode,
    title: 'Smart Code Analysis',
    description: 'Find bugs, logical issues and potential problems in your code.',
  },
  {
    icon: Gauge,
    title: 'Performance Suggestions',
    description: 'Identify inefficient code and improve execution performance.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Checks',
    description: 'Detect common security risks and unsafe coding practices.',
  },
  {
    icon: Sparkles,
    title: 'Better Code Quality',
    description: 'Improve readability, maintainability and overall code structure.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Paste Your Code',
    description: 'Add the code you want to review.',
  },
  {
    n: '02',
    title: 'AI Analyzes It',
    description: 'Our AI reviews your code for bugs, security, performance and quality.',
  },
  {
    n: '03',
    title: 'Improve Your Code',
    description: 'Get practical suggestions and recommended improvements.',
  },
]

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-paper">
      <Navbar />

      {/* Hero */}
      <section className="container-x py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              Write Better Code. <br className="hidden sm:block" />
              Ship With Confidence.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-subtle">
              AI-powered code reviews that help you find bugs, improve performance,
              strengthen security, and write cleaner code.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/review" variant="primary">
                Get Started
              </Button>
              <Button href="#how-it-works" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>

          <CodeEditor />
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-line bg-mist/60">
        <div className="container-x py-16 sm:py-20">
          <div className="mb-10 max-w-lg">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Everything you need in a review
            </h2>
            <p className="mt-2 text-sm text-subtle">
              A focused set of checks, built around how developers actually review code.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="container-x py-16 sm:py-20">
        <div className="mb-10 max-w-lg">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How it works</h2>
          <p className="mt-2 text-sm text-subtle">Three steps, start to finish.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              <span className="font-mono text-sm font-semibold text-accent">{step.n}</span>
              <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-subtle">{step.description}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-[-1rem] top-1 hidden h-px w-8 bg-line sm:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-ink">
        <div className="container-x flex flex-col items-center gap-5 py-16 text-center sm:py-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to improve your code?
          </h2>
          <Button to="/review" variant="primary" className="!bg-white !text-ink !border-white hover:!bg-accent-soft">
            Start Code Review
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

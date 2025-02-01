// pages/index.js
import Link from 'next/link'
import { useCallback } from 'react'

export default function Home() {
  const handlePlaceholder = useCallback(() => {
    alert('Coming Soon!')
  }, [])

  return (
    <div className="container homeContainer">
      <h1 className="mainTitle">B.R.I.D.G.E.</h1>
      <h2 className="subtitle">
        Better Real-time Interactions for Diagnosis &amp; General Evaluation
      </h2>

      <div className="buttonRow">
        <Link href="/patient-info">
          <a className="buttonLink">Patient Information</a>
        </Link>

        <button className="placeholderBtn" onClick={handlePlaceholder}>
          Placeholder
        </button>
      </div>

      <footer className="footer">
        <p>
          <strong>Attribution / Credits:</strong><br />
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {' | '}
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  )
}

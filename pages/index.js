// pages/index.js
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Home() {
  const aboutSectionRef = useRef(null)

  // If you want the "Read More" button to scroll to an "About" section
  // on this same page, you can do:
  const scrollToAboutRef = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full flex flex-col items-center py-10">
      {/* Hero Section */}
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center py-20 px-2">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-6xl mt-6 md:mt-0 text-accent font-semibold leading-tight text-center md:text-left">
            <br />
            <span className="text-primary">Bridge</span>
          </h1>
          <div className="flex items-center gap-3 mt-5">
            <button
              className="button"
              onClick={scrollToAboutRef}
              style={{ backgroundColor: '#DB9101', color: '#FFFFFF' }}
            >
              Read More
            </button>
            <Link href="/outreach">
              <span className="button px-4 py-2 bg-blue-600 text-white rounded-md">
                Patient Info
              </span>
            </Link>
          </div>
        </div>
        <Image
          className="z-[1]"
          src="/bridge.png"
          width={800}
          height={500}
          alt="Hero Image"
        />
      </div>

      {/* Example "About" section you can scroll to */}
      <div
        ref={aboutSectionRef}
        className="max-w-3xl text-center p-4 bg-gray-100 rounded-md mt-10"
      >
        <h2 className="text-2xl font-bold mb-4">About Bridge</h2>
        <p className="text-gray-700">
        Seamless Translation of Medical Information – Uses AI to convert patient symptoms into structured insights for doctors and simplifies medical jargon into understandable language for patients.
        Bi-Directional Understanding – Enhances doctor-patient interactions by ensuring clarity, reducing miscommunication, and improving diagnostic accuracy.
        Smart & Adaptive AI – Continuously learns from medical dialogues to provide more accurate, context-aware responses, optimizing healthcare communication efficiency.
        </p>
      </div>
    </div>
  )
}

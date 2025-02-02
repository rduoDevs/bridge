import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Home() {
  const aboutSectionRef = useRef(null)

  const scrollToAboutRef = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full flex flex-col items-center bg-[#fff6f0] text-[#2d2d2d]">
      {/* Logo at the top */}
      <div className="w-full flex justify-center py-4">
        <Image
          src="/logo.png"
          alt="Bridge Logo"
          width={100}
          height={100}
          priority
        />
      </div>

      {/* Hero / Image Section */}
      <div className="relative w-full h-[450px] md:h-[600px]">
        <Image
          src="/bridge.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        {/* Overlay text container */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold mb-2">
            Welcome to Bridge
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            Better Real-time Interactions for Diagnosis &amp; General Evaluation
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 mt-6">
        {/* Both buttons share the same classes for consistent size */}
        <button
          onClick={scrollToAboutRef}
          className="w-32 px-4 py-1.5 bg-[#ff8133] text-white rounded-md font-medium hover:bg-[#e6732c] transition-colors duration-200"
        > Read More
        </button>
        <Link href="/patient-info">
          <span className="w-60 px-4 py-2 bg-[#ff8133] text-white rounded-md font-medium hover:bg-[#e6732c] transition-colors duration-200 cursor-pointer text-center">
            Patient Form
          </span>
        </Link>
      </div>

      {/* About Section */}
      <div
        ref={aboutSectionRef}
        className="max-w-3xl text-center p-6 rounded-md mt-10 mx-4 shadow-sm bg-white"
      >
        <h2 className="text-2xl font-bold mb-4">About Bridge</h2>
        <ul className="list-disc list-inside text-left md:mx-auto md:max-w-2xl space-y-2">
          <li>
            <strong>Seamless Translation of Medical Information</strong> – Uses AI
            to convert patient symptoms into structured insights for doctors, and
            simplifies medical jargon for patients.
          </li>
          <li>
            <strong>Bi-Directional Understanding</strong> – Enhances
            doctor–patient interactions by ensuring clarity, reducing
            miscommunication, and improving diagnostic accuracy.
          </li>
          <li>
            <strong>Smart &amp; Adaptive AI</strong> – Continuously learns from
            medical dialogues to provide more accurate, context-aware responses,
            optimizing healthcare communication efficiency.
          </li>
        </ul>
      </div>

      {/* Optional extra spacing at bottom */}
      <div className="h-10" />
    </div>
  )
}

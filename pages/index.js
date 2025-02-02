import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import PageHeader from "../components/PageHeader";

export default function Home() {
  const aboutSectionRef = useRef(null)

  const scrollToAboutRef = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [data, setData] = useState(null);

 // useEffect(() => {
 //   fetch('http://localhost:5000/medically_translate', {
  //    method: 'POST',
  //    headers: {
  //      'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify({ input1: 'test', input2: ['test2'], input3: ['test3'] })
  //  })
  //    .then((res) => res.json())
  //    .then((data) => setData(data))
  //    .catch((error) => console.error('Error:', error));
 // }, []);




    return (
      <div>
   
  
        {/* Hero Section */}
        <div className="relative w-full h-[450px] md:h-[600px]">
          <Image
            src="/stock3.jpeg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          {/* Overlay text */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-white text-3xl md:text-5xl font-semibold mb-2">
              Welcome to Bridge.
            </h1>
            <p className="text-white text-lg md:text-xl max-w-3xl">
              better realtime interactions for doctors, patients &amp; diagnosis.
            </p>
          </div>
        </div>
  
        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 mt-6">
          <button
            onClick={scrollToAboutRef}
            className="w-40 px-4 py-2 bg-[#ff8133] text-white rounded-md font-medium hover:bg-[#e6732c] transition-colors duration-200"
          >
            Read More
          </button>
          <Link href="/patient-info">
            <span className="w-40 px-4 py-2 bg-[#ff8133] text-white rounded-md font-medium hover:bg-[#e6732c] transition-colors duration-200 cursor-pointer text-center">
              Patient Info
            </span>
          </Link>
          <Link href="/contact">
            <span className="w-40 px-4 py-2 bg-[#ff8133] text-white rounded-md font-medium hover:bg-[#e6732c] transition-colors duration-200 cursor-pointer text-center">
              Contact
            </span>
          </Link>
        </div>
  
        {/* About Section */}
        <div
          ref={aboutSectionRef}
          className="max-w-3xl text-center p-6 rounded-md mt-10 mx-4 shadow-sm bg-white md:mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">About Bridge</h2>
          <ul className="list-disc list-inside text-left md:max-w-2xl md:mx-auto space-y-2">
            <li>
              <strong>Seamless Translation of Medical Information</strong> – Uses AI to
              convert patient symptoms into structured insights for doctors, and
              simplifies medical jargon for patients.
            </li>
            <li>
              <strong>Bi-Directional Understanding</strong> – Enhances doctor–patient
              interactions by ensuring clarity, reducing miscommunication, and
              improving diagnostic accuracy.
            </li>
            <li>
              <strong>Smart &amp; Adaptive AI</strong> – Continuously learns from medical
              dialogues to provide more accurate, context-aware responses,
              optimizing healthcare communication efficiency.
            </li>
          </ul>
        </div>
      </div>
    )
  }
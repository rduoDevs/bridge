import React, { useState } from "react";
import Head from "next/head";
import HeadingWithIllustration from "../components/HeadingWithIllustration";
import projects from "../data/outreach.json";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";

// pages/patient-info.js

import Link from 'next/link'

export default function PatientInfo() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    symptoms: '',
  })
  const [statusMsg, setStatusMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatusMsg('Saving...')

    try {
      const response = await fetch('/api/patient-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      // if (!response.ok) {
      //   throw new Error(`Error! status: ${response.status}`)
      // }
      const data = await response.json()
      setStatusMsg('Patient info saved successfully!')
      console.log('Response data:', data)
    } catch (err) {
      console.error('Failed to save:', err)
      setStatusMsg('Error saving data.')
    }
  }

  return (
    <div className="container formContainer">
      <h2>Patient Information</h2>

      <form onSubmit={handleSubmit} className="patientForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter patient name..."
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            min="0"
            max="120"
            placeholder="Enter age..."
            value={formData.age}
            onChange={handleChange}
          />
        </label>

        <label>
          Contact Email:
          <input
            type="email"
            name="email"
            placeholder="Enter email..."
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Symptoms:
          <textarea
            name="symptoms"
            rows="3"
            placeholder="Describe your symptoms in detail..."
            value={formData.symptoms}
            onChange={handleChange}
          />
        </label>

        {/* <label>
          Additional Notes:
          <textarea
            name="notes"
            rows="3"
            placeholder="Any extra notes or details..."
            value={formData.notes}
            onChange={handleChange}
          />
        </label> */}

        <button type="submit">Submit</button>
      </form>

      <p>
        <Link href="/">
          <span className="backLink">← Back to Home</span>
        </Link>
      </p>
    </div>
  )
}

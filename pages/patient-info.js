// pages/patient-info.js
import { useState } from 'react'
import Link from 'next/link'

export default function PatientInfo() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    symptoms: '',
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show an alert summary for demonstration
    alert(
      `Form submitted!\n\n` +
      `Name: ${formData.name}\n` +
      `Age: ${formData.age}\n` +
      `Email: ${formData.email}\n` +
      `Symptoms: ${formData.symptoms}\n` +
      `Notes: ${formData.notes}`
    )
    // Possibly reset or redirect
    // setFormData({ ... })
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
            placeholder="Describe main symptoms..."
            value={formData.symptoms}
            onChange={handleChange}
          />
        </label>

        <label>
          Additional Notes:
          <textarea
            name="notes"
            rows="3"
            placeholder="Any extra notes or details..."
            value={formData.notes}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <p>
        <Link href="/">
          <a className="backLink">← Back to Home</a>
        </Link>
      </p>
    </div>
  )
}

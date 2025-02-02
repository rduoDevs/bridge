// pages/contact.js

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  })
  const [statusMsg, setStatusMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd do a fetch() to an API or mailto
    setStatusMsg(`Message from ${formData.name} sent to placeholder@domain.com!`)
    // Optionally reset
    // setFormData({ name: '', message: '' })
  }

  return (
    <div className="container formContainer">
      <h2 className="pageTitle">Contact Us</h2>

      <form onSubmit={handleSubmit} className="patientForm">
        <label className="formLabel">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            required
            value={formData.name}
            onChange={handleChange}
            className="formInput"
          />
        </label>

        <label className="formLabel">
          Message:
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message..."
            required
            value={formData.message}
            onChange={handleChange}
            className="formTextarea"
          />
        </label>

        <button type="submit" className="submitButton">
          Send
        </button>
      </form>

      {statusMsg && (
        <p className="statusMsg">{statusMsg}</p>
      )}

      <Link href="/">
        <span className="backLink">← Back to Home</span>
      </Link>
    </div>
  )
}

import { useState } from 'react'
import { api } from '../services/api'
import ArrowIcon from './ArrowIcon'

const initialForm = {
  fname: '',
  mobile: '',
  email: '',
  subject: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const submit = async (event) => {
    event.preventDefault()
    const missing = Object.entries(form).find(([, value]) => !value.trim())

    if (missing) {
      setStatus({ type: 'error', text: 'Please complete every required field before submitting.' })
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    setSubmitting(true)
    try {
      const result = await api.submitLead(form)
      setStatus({ type: 'success', text: result.message })
      setForm(initialForm)
    } catch (error) {
      setStatus({
        type: 'error',
        text: error.message || 'Something went wrong sending your message. Please try again, or reach us by phone or email.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form__grid">
        <input name="fname" placeholder="NAME*" value={form.fname} onChange={updateField} />
        <input name="mobile" placeholder="PHONE*" value={form.mobile} onChange={updateField} />
        <input name="email" placeholder="EMAIL*" value={form.email} onChange={updateField} />
        <input name="subject" placeholder="SUBJECT*" value={form.subject} onChange={updateField} />
      </div>
      <textarea name="message" placeholder="OUTLINE YOUR CASE" value={form.message} onChange={updateField}></textarea>
      {status && <p className={`contact-form__status contact-form__status--${status.type}`}>{status.text}</p>}
      <button className="button button--solid" type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : <>Submit Case <span aria-hidden="true"><ArrowIcon /></span></>}
      </button>
    </form>
  )
}

export default ContactForm

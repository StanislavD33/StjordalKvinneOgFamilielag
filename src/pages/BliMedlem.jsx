import { useState } from 'react'
import { useMutation } from '@apollo/client/react'
import { gql } from '@apollo/client'

const CREATE_MEMBER = gql`
  mutation CreateMember($data: MemberInput!) {
    createMember(data: $data) {
      name
      surname
      email
      telefonnumber
      message
    }
  }
`
const CREATE_CONTACT = gql`
  mutation CreateEmail($data: EmailInput!) {
    createEmail(data: $data) {
      name
      surname
      email
      message
    }
  }
`

export default function MemberForm() {
  const [formType, setFormType] = useState('kontakt')
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    telefonnumber: '',
    message: ''
  })

  const [createMember, memberState] = useMutation(CREATE_MEMBER)
  const [createContact, contactState] = useMutation(CREATE_CONTACT)

  const loading = memberState.loading || contactState.loading
  const error = memberState.error || contactState.error

  const validate = () => {
    let newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Navn er påkrevd'
    if (!formData.surname.trim()) newErrors.surname = 'Etternavn er påkrevd'
    if (!/\S+@\S+\.\S+/.test(formData.email.trim())) newErrors.email = 'Ugyldig e-post'

    if (formType === 'medlem') {
      const phone = formData.telefonnumber.trim();
      if (!phone) {
        newErrors.telefonnumber = 'Telefon er påkrevd'
      } else if (!/^\+?\d{8,15}$/.test(phone)) {
        newErrors.telefonnumber = 'Ugyldig telefonnummer'
      }
    }

    return newErrors
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Опционально: можно сбрасывать ошибку конкретного поля при вводе
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined })
    }
  }

  const handleTabChange = (type) => {
    setFormType(type)
    setErrors({})
    setSuccess(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess(false)

    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})

    try {
      const mutation = formType === 'medlem' ? createMember : createContact

      const data = {
        name: formData.name.trim(),
        surname: formData.surname.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      }

      if (formType === 'medlem') {
        data.telefonnumber = formData.telefonnumber.trim()
      }

      await mutation({ variables: { data } })

      setSuccess(true)
      setFormData({
        name: '',
        surname: '',
        email: '',
        telefonnumber: '',
        message: ''
      })
    } catch (err) {
      console.error('Submission error:', err)
      setSuccess(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => handleTabChange('kontakt')}
            className={`px-6 py-2 rounded-l-xl font-semibold transition-colors ${
              formType === 'kontakt' ? 'bg-blue-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Kontakt Oss
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('medlem')}
            className={`px-6 py-2 rounded-r-xl font-semibold transition-colors ${
              formType === 'medlem' ? 'bg-blue-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Bli Medlem
          </button>
        </div>

        {/* Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            {formType === 'kontakt' ? 'Kontakt Oss' : 'Bli Medlem'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Navn</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className={`mt-1 w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none`}
                placeholder="Ditt navn"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Surname */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Etternavn</label>
              <input
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                type="text"
                className={`mt-1 w-full border ${errors.surname ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none`}
                placeholder="Ditt etternavn"
                required
              />
              {/* Добавлен вывод ошибки для surname */}
              {errors.surname && <p className="text-red-500 text-sm mt-1">{errors.surname}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">E-post</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className={`mt-1 w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none`}
                placeholder="din@email.com"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone (only medlem) */}
            {formType === 'medlem' && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefon</label>
                <input
                  name="telefonnumber"
                  value={formData.telefonnumber}
                  onChange={handleChange}
                  inputMode="tel"
                  className={`mt-1 w-full border ${errors.telefonnumber ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none`}
                  placeholder="+47..."
                  required={formType === 'medlem'}
                />
                {errors.telefonnumber && <p className="text-red-500 text-sm mt-1">{errors.telefonnumber}</p>}
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Melding</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none"
                placeholder="Skriv melding..."
              />
            </div>

            {/* Submit & Status Messages */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-semibold py-3 rounded-xl transition"
            >
              {loading ? 'Sender...' : 'Send'}
            </button>

            {error && (
              <p className="text-red-600 text-center font-medium">
                Noe gikk galt. Prøv igjen.
              </p>
            )}

            {success && (
              <p className="text-green-600 text-center font-medium">
                Meldingen ble sendt!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
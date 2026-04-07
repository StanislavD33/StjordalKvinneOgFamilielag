import { useState } from 'react'
import { useMutation } from '@apollo/client/react'
import { gql } from '@apollo/client'

const CREATE_MEMBER = gql`
  mutation CreateMember($data: MemberInput!) {
    createMember(data: $data) {
      name,
      email,
      telefonnumber,
      message
    }
  }
`

export default function MemberForm() {
  const [formType, setFormType] = useState('kontakt')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefonnumber: '',
    message: ''
  })

  const [createMember, { loading, error }] = useMutation(CREATE_MEMBER)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendToStrapi = async () => {
    await createMember({
      variables: {
        data: {
          name: formData.name,
          email: formData.email,
          telefonnumber: formData.telefonnumber,
          message: formData.message
        }
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formType === 'medlem') {
      await sendToStrapi()
    } else {
      console.log('TODO: send email')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setFormType('kontakt')}
            className={`px-6 py-2 rounded-l-xl font-semibold ${formType === 'kontakt'
                ? 'bg-blue-900 text-white'
                : 'bg-white text-gray-700'
              }`}
          >
            Kontakt Oss
          </button>

          <button
            onClick={() => setFormType('medlem')}
            className={`px-6 py-2 rounded-r-xl font-semibold ${formType === 'medlem'
                ? 'bg-blue-900 text-white'
                : 'bg-white text-gray-700'
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
              <label className="block text-sm font-medium text-gray-700">
                Navn
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none"
                placeholder="Ditt navn"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-post
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none"
                placeholder="din@email.com"
              />
            </div>

            {/* Phone (only medlem) */}
            {formType === 'medlem' && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  name="telefonnumber"
                  value={formData.telefonnumber}
                  onChange={handleChange}
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none"
                  placeholder="+47..."
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Melding
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-900 outline-none"
                placeholder="Skriv melding..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition"
            >
              {loading ? 'Sender...' : 'Send'}
            </button>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">
                Feil: {error.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
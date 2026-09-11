import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#090908] text-[#f4f1ea]">

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,135,47,0.18),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20">
          <p className="school-gold uppercase tracking-[0.25em] text-sm mb-5">
            Admissions
          </p>

          <h1
            className="text-5xl md:text-7xl font-semibold"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            Admission Enquiry
          </h1>

          <p className="max-w-2xl mt-6 text-white/65 text-lg leading-8">
            Interested in Linga Global School? Share your details and enquiry
            with us.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-20">

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="school-glass rounded-3xl p-8 md:p-10 h-full">

              <p className="text-[#b8872f] uppercase tracking-[0.2em] text-xs mb-4">
                Linga Global School
              </p>

              <h2
                className="text-3xl md:text-4xl font-semibold leading-tight"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                }}
              >
                Begin your child's journey with us.
              </h2>

              <p className="text-white/60 leading-7 mt-6">
                For admission-related information, please submit the enquiry
                form. The school team can provide further details regarding
                admissions, classes and the admission process.
              </p>

              <div className="mt-10 space-y-5">

                <div>
                  <p className="text-white/40 text-sm">Location</p>
                  <p className="text-white/75 mt-1">
                    Krishnankoil, Virudhunagar District, Tamil Nadu
                  </p>
                </div>

                <div>
                  <p className="text-white/40 text-sm">Email</p>
                  <p className="text-white/75 mt-1">
                    info@lingaschool.org
                  </p>
                </div>

                <div>
                  <p className="text-white/40 text-sm">Phone</p>
                  <p className="text-white/75 mt-1">
                    +91 7373727290
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="school-glass rounded-3xl p-8 md:p-10"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Parent / Guardian Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 outline-none focus:border-[#b8872f] transition placeholder:text-white/25"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Student Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter student name"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 outline-none focus:border-[#b8872f] transition placeholder:text-white/25"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 outline-none focus:border-[#b8872f] transition placeholder:text-white/25"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 outline-none focus:border-[#b8872f] transition placeholder:text-white/25"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Class Applying For
                  </label>

                  <select
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#151412] px-4 py-3.5 outline-none focus:border-[#b8872f] transition"
                  >
                    <option value="">Select class</option>
                    <option>Pre-KG</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    <option>Class I</option>
                    <option>Class II</option>
                    <option>Class III</option>
                    <option>Class IV</option>
                    <option>Class V</option>
                    <option>Class VI</option>
                    <option>Class VII</option>
                    <option>Class VIII</option>
                    <option>Class IX</option>
                    <option>Class X</option>
                    <option>Class XI</option>
                    <option>Class XII</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Previous School
                  </label>

                  <input
                    type="text"
                    placeholder="Previous school name"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 outline-none focus:border-[#b8872f] transition placeholder:text-white/25"
                  />
                </div>

              </div>

              <div className="mt-5">
                <label className="block text-sm text-white/60 mb-2">
                  Your Enquiry
                </label>

                <textarea
                  rows="5"
                  required
                  placeholder="Write your admission enquiry..."
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 outline-none focus:border-[#b8872f] transition resize-none placeholder:text-white/25"
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-[#b8872f] py-4 font-semibold text-[#090908] hover:bg-[#d6a447] transition"
              >
                Submit Enquiry →
              </button>

              {submitted && (
                <p className="mt-5 rounded-xl border border-[#b8872f]/30 bg-[#b8872f]/10 p-4 text-center text-[#d6a447]">
                  Thank you. Your enquiry has been submitted.
                </p>
              )}

            </form>
          </motion.div>

        </div>

      </main>
    </div>
  )
}
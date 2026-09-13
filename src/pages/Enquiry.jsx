import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#292629]">

      <section className="relative overflow-hidden border-b border-[#292629]/10">
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

          <p className="max-w-2xl mt-6 text-[#716A6C] text-lg leading-8">
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

              <p className="text-[#C6A66B] uppercase tracking-[0.2em] text-xs mb-4">
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

              <p className="text-[#716A6C] leading-7 mt-6">
                For admission-related information, please submit the enquiry
                form. The school team can provide further details regarding
                admissions, classes and the admission process.
              </p>

              <div className="mt-10 space-y-5">

                <div>
                  <p className="text-[#716A6C] text-sm">Location</p>
                  <p className="text-[#716A6C] mt-1">
                    Krishnankoil, Virudhunagar District, Tamil Nadu
                  </p>
                </div>

                <div>
                  <p className="text-[#716A6C] text-sm">Email</p>
                  <p className="text-[#716A6C] mt-1">
                    info@lingaschool.org
                  </p>
                </div>

                <div>
                  <p className="text-[#716A6C] text-sm">Phone</p>
                  <p className="text-[#716A6C] mt-1">
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
                  <label className="block text-sm text-[#716A6C] mb-2">
                    Parent / Guardian Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[#292629]/10 bg-[#F1E9E3] px-4 py-3.5 outline-none focus:border-[#C6A66B] transition placeholder:text-[#716A6C]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#716A6C] mb-2">
                    Student Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter student name"
                    className="w-full rounded-xl border border-[#292629]/10 bg-[#F1E9E3] px-4 py-3.5 outline-none focus:border-[#C6A66B] transition placeholder:text-[#716A6C]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#716A6C] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-[#292629]/10 bg-[#F1E9E3] px-4 py-3.5 outline-none focus:border-[#C6A66B] transition placeholder:text-[#716A6C]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#716A6C] mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full rounded-xl border border-[#292629]/10 bg-[#F1E9E3] px-4 py-3.5 outline-none focus:border-[#C6A66B] transition placeholder:text-[#716A6C]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#716A6C] mb-2">
                    Class Applying For
                  </label>

                  <select
                    required
                    className="w-full rounded-xl border border-[#292629]/10 bg-[#F1E9E3] px-4 py-3.5 outline-none focus:border-[#C6A66B] transition"
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
                  <label className="block text-sm text-[#716A6C] mb-2">
                    Previous School
                  </label>

                  <input
                    type="text"
                    placeholder="Previous school name"
                    className="w-full rounded-xl border border-[#292629]/10 bg-[#F1E9E3] px-4 py-3.5 outline-none focus:border-[#C6A66B] transition placeholder:text-[#716A6C]"
                  />
                </div>

              </div>

              <div className="mt-5">
                <label className="block text-sm text-[#716A6C] mb-2">
                  Your Enquiry
                </label>

                <textarea
                  rows="5"
                  required
                  placeholder="Write your admission enquiry..."
                  className="w-full rounded-xl border border-[#292629]/10 bg-[#F1E9E3] px-4 py-3.5 outline-none focus:border-[#C6A66B] transition resize-none placeholder:text-[#716A6C]"
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-[#C6A66B] py-4 font-semibold text-[#292629] hover:bg-[#D9BC85] transition"
              >
                Submit Enquiry →
              </button>

              {submitted && (
                <p className="mt-5 rounded-xl border border-[#C6A66B]/30 bg-[#C6A66B]/10 p-4 text-center text-[#A87A2E]">
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
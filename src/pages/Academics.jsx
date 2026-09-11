import { motion } from 'framer-motion'

const timings = [
  ['08:50 - 09:00', 'Prayer'],
  ['09:00 - 09:40', 'I Period'],
  ['09:40 - 10:30', 'II Period'],
  ['10:30 - 10:40', 'Break'],
  ['10:40 - 11:10', 'III Period'],
  ['11:10 - 11:50', 'IV Period'],
  ['11:50 - 12:30', 'V Period'],
  ['12:30 - 01:00', 'Lunch'],
  ['01:00 - 01:40', 'VI Period'],
  ['01:40 - 02:10', 'VII Period'],
  ['02:10 - 02:25', 'Meditation'],
  ['02:25 - 02:30', 'Break'],
  ['02:30 - 03:10', 'VIII Period'],
  ['03:10 - 03:30', 'IX Period'],
]

const exams = [
  ['Primary (I – V)', 'July, September, November, December, February, March'],
  [
    'Middle School (VI – VIII)',
    'June, July, August, November, December, February, September (Terminal), March (Final)',
  ],
  ['Secondary (IX – X)', 'July, September, November, December, February, March'],
  [
    'Senior Secondary (XI – XII)',
    'June (only for XII), July, September, November, December, February, March',
  ],
]

const faculty = [
  ['Principal', '1'],
  ['Total No. of Teachers', '55'],
  ['Postgraduate Teachers (PGT)', '11'],
  ['Trained Graduate Teachers (TGT)', '16'],
  ['Primary Teachers (PRT)', '18'],
  ['NTTs', '7'],
  ['PETs', '2'],
  ['Teachers-Section Ratio', '1:30'],
  ['Special Educator', '1'],
  ['Counselor & Wellness Teacher', '1'],
]

const calendar = [
  ['April', '17'],
  ['June', '22'],
  ['July', '25'],
  ['August', '20'],
  ['September', '19'],
  ['October', '21'],
  ['November', '23'],
  ['December', '19'],
  ['January', '21'],
  ['February', '22'],
  ['March', '14'],
  ['Total', '223'],
]

const uniforms = [
  ['I – III', 'Regular Uniform', 'Activity Uniform', 'Cubs & Bulbul Uniform', 'Regular Uniform', 'Sports Uniform', 'Cubs & Bulbul Uniform'],
  ['IV – V', 'Regular Uniform', 'Cubs & Bulbul Uniform', 'Activity Uniform', 'Regular Uniform', 'Sports Uniform', 'Cubs & Bulbul Uniform'],
  ['VI – VIII', 'Regular Uniform', 'Scout & Guide Uniform', 'Regular Uniform', 'Activity Uniform', 'Sports Uniform', 'Scout & Guide Uniform'],
  ['IX – XII', 'Regular Uniform', 'Regular Uniform', 'Regular Uniform', 'Regular Uniform', '—', '—'],
]

function Section({ number, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-7">
        <span className="section-number">
          {String(number).padStart(2, '0')}
        </span>

        <div className="gold-line" />

        <h2 className="text-2xl md:text-3xl font-semibold">
          {title}
        </h2>
      </div>

      {children}
    </motion.section>
  )
}

export default function Academics() {
  return (
    <div className="min-h-screen bg-[#090908] text-[#f4f1ea]">

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,135,47,0.15),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20">
          <p className="school-gold uppercase tracking-[0.25em] text-sm mb-5">
            Learning • Development • Excellence
          </p>

          <h1
            className="text-5xl md:text-7xl font-semibold"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            Academics
          </h1>

          <p className="max-w-3xl mt-6 text-white/65 text-lg leading-8">
            Linga Global School follows a structured academic approach focused
            on conceptual learning, critical thinking, skill development and
            holistic student growth.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20">

        <Section number={1} title="Admission & Academic Period">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['Admission Period', 'April – June'],
              ['Academic Session', 'April – March'],
              ['Vacation', 'May'],
            ].map(([title, value]) => (
              <div
                key={title}
                className="school-glass rounded-2xl p-7"
              >
                <p className="text-white/50 text-sm mb-3">{title}</p>
                <p className="text-2xl font-semibold text-[#d6a447]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section number={2} title="CBSE Curriculum Overview">
          <p className="text-white/65 leading-8 max-w-4xl mb-8">
            Linga Global School follows a structured curriculum as per CBSE
            guidelines, ensuring conceptual learning, critical thinking, and
            skill development at every stage.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              [
                'Primary School',
                'Grades I – V',
                [
                  'CBSE-based comprehensive learning covering languages, mathematics, science, and social sciences.',
                  '5-point evaluation system for holistic assessment.',
                ],
              ],
              [
                'Middle School',
                'Grades VI – VIII',
                [
                  'CBSE-based assessment covering academics and overall development.',
                  'Focus on analytical, creative, and research skills through interactive learning.',
                ],
              ],
              [
                'Secondary School',
                'Grades IX – X',
                [
                  'Grade-based evaluation structure to prepare students for board exams.',
                  'Emphasis on scientific temperament, problem-solving skills, and practical applications.',
                ],
              ],
              [
                'Senior Secondary School',
                'Grades XI – XII',
                [
                  'Specialized CBSE Curriculum designed for career preparation.',
                  'Choice of Science & Commerce Streams with a variety of subject combinations.',
                ],
              ],
            ].map(([title, grades, points]) => (
              <div
                key={title}
                className="school-glass rounded-2xl p-7"
              >
                <p className="text-[#b8872f] text-sm mb-2">
                  {grades}
                </p>

                <h3 className="text-xl font-semibold mb-5">
                  {title}
                </h3>

                <ul className="space-y-3 text-white/65 leading-7">
                  {points.map((point) => (
                    <li key={point}>
                      <span className="text-[#b8872f] mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </Section>

        <Section number={3} title="Subject Combinations for Senior Secondary">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="school-glass rounded-2xl p-8">
              <p className="text-[#b8872f] uppercase tracking-widest text-xs mb-3">
                Stream 01
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                Science Stream
              </h3>

              <p className="font-semibold mb-3">
                Compulsory Subjects
              </p>

              <p className="text-white/65 mb-6">
                English, Physics & Chemistry
              </p>

              <p className="font-semibold mb-3">
                Optional Subjects
              </p>

              <ul className="space-y-3 text-white/65">
                <li>• Maths / Core Tamil / Core Hindi / History</li>
                <li>• Biology / Computer Science</li>
              </ul>
            </div>

            <div className="school-glass rounded-2xl p-8">
              <p className="text-[#b8872f] uppercase tracking-widest text-xs mb-3">
                Stream 02
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                Commerce Stream
              </h3>

              <p className="font-semibold mb-3">
                Compulsory Subjects
              </p>

              <p className="text-white/65 mb-6">
                English, Accountancy & Business Studies
              </p>

              <p className="font-semibold mb-3">
                Optional Subjects
              </p>

              <ul className="space-y-3 text-white/65">
                <li>• Applied Maths / Core Tamil / Core Hindi / History</li>
                <li>• Economics / Computer Science</li>
              </ul>
            </div>

          </div>

          <div className="school-glass rounded-2xl p-8 mt-6">
            <h3 className="text-xl font-semibold mb-4">
              Language Options
            </h3>

            <p className="text-white/65 leading-7">
              For Std. I – X, CBSE-based assessment covers academics and
              overall development, with focus on analytical, creative, and
              research skills through interactive learning.
            </p>
          </div>

        </Section>

        <Section number={4} title="School Timings">
          <p className="text-white/65 leading-7 mb-7">
            Our school functions on a structured schedule ensuring effective
            learning, physical activity, and personal growth.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-[#b8872f] text-[#090908]">
                  <th className="text-left px-6 py-4">Timing</th>
                  <th className="text-left px-6 py-4">Activity</th>
                </tr>
              </thead>

              <tbody>
                {timings.map(([time, activity]) => (
                  <tr
                    key={time}
                    className="border-b border-white/10 bg-[#151412]"
                  >
                    <td className="px-6 py-4 text-[#d6a447] font-medium">
                      {time}
                    </td>

                    <td className="px-6 py-4 text-white/70">
                      {activity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number={5} title="Examination & Promotion Policy">
          <div className="school-glass rounded-2xl p-8 mb-8">
            <ol className="space-y-5 text-white/70 leading-7">
              <li>
                <span className="text-[#b8872f] mr-3">01</span>
                Students are assessed through internal evaluations, projects,
                and term exams.
              </li>

              <li>
                <span className="text-[#b8872f] mr-3">02</span>
                Promotion is based on continuous performance, assignments,
                and attendance.
              </li>

              <li>
                <span className="text-[#b8872f] mr-3">03</span>
                Reports of terminal examinations are issued three times a year.
              </li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mb-5">
            Examination Schedule
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-[#b8872f] text-[#090908]">
                  <th className="text-left px-6 py-4">Department</th>
                  <th className="text-left px-6 py-4">Exam Months</th>
                </tr>
              </thead>

              <tbody>
                {exams.map(([department, months]) => (
                  <tr
                    key={department}
                    className="border-b border-white/10 bg-[#151412]"
                  >
                    <td className="px-6 py-4 font-medium">
                      {department}
                    </td>

                    <td className="px-6 py-4 text-white/65">
                      {months}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number={6} title="Faculty & Staff">
          <p className="text-white/65 leading-7 mb-7">
            Linga Global School is proud to have a dedicated and experienced
            teaching faculty committed to academic excellence and student
            welfare.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-[#b8872f] text-[#090908]">
                  <th className="text-left px-6 py-4">Designation</th>
                  <th className="text-left px-6 py-4">Total</th>
                </tr>
              </thead>

              <tbody>
                {faculty.map(([designation, total]) => (
                  <tr
                    key={designation}
                    className="border-b border-white/10 bg-[#151412]"
                  >
                    <td className="px-6 py-4 font-medium">
                      {designation}
                    </td>

                    <td className="px-6 py-4 text-[#d6a447] font-semibold">
                      {total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number={7} title="Uniform Guidelines">
          <p className="text-white/65 leading-7 mb-7">
            We encourage students to wear their designated uniforms as per the
            weekly schedule to promote discipline and unity.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="bg-[#b8872f] text-[#090908]">
                  <th className="px-4 py-4">Classes</th>
                  <th className="px-4 py-4">Monday</th>
                  <th className="px-4 py-4">Tuesday</th>
                  <th className="px-4 py-4">Wednesday</th>
                  <th className="px-4 py-4">Thursday</th>
                  <th className="px-4 py-4">Friday</th>
                  <th className="px-4 py-4">Saturday</th>
                </tr>
              </thead>

              <tbody>
                {uniforms.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b border-white/10 bg-[#151412]"
                  >
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`px-4 py-4 text-center ${
                          index === 0
                            ? 'font-semibold text-[#d6a447]'
                            : 'text-white/65'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number={8} title="Academic Calendar 2025–2026">
          <p className="text-white/65 leading-7 mb-7">
            Our school ensures a balanced academic year with ample time for
            learning, assessments, and extracurricular activities.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-[#b8872f] text-[#090908]">
                  <th className="text-left px-6 py-4">Month</th>
                  <th className="text-left px-6 py-4">
                    No. of Working Days
                  </th>
                </tr>
              </thead>

              <tbody>
                {calendar.map(([month, days]) => (
                  <tr
                    key={month}
                    className={`border-b border-white/10 ${
                      month === 'Total'
                        ? 'bg-[#1c1914]'
                        : 'bg-[#151412]'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium">
                      {month}
                    </td>

                    <td className="px-6 py-4 text-[#d6a447] font-semibold">
                      {days}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

      </main>
    </div>
  )
}
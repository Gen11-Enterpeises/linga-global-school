import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FAF7F3] text-[#292629]">

      {/* Header */}
      <section className="border-b border-[#292629]/10">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 md:px-10 md:py-28">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A87A2E]">
            Privacy & Data Protection
          </p>

          <h1
            className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#716A6C] md:text-lg">
            Linga Global School respects your privacy. This Privacy Policy
            explains how information may be collected and handled when you
            visit this website or communicate with the school through it.
          </p>

          <p className="mt-5 text-sm text-[#716A6C]">
            Last updated: September 2026
          </p>

        </div>
      </section>

      {/* Policy Content */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 md:px-10 md:py-20">

        <div className="space-y-12">

          {/* 1 */}
          <PolicySection title="1. About Linga Global School">

            <p>
              This website is operated for Linga Global School,
              Anand Nagar, Krishnankoil, Virudhunagar District,
              Tamil Nadu, India.
            </p>

            <p>
              Official website:{' '}
              <a
                href="https://www.lingaschool.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A87A2E] hover:underline"
              >
                www.lingaschool.org
              </a>
            </p>

            <p>
              For privacy-related questions, you can contact the school using
              the official contact details provided at the end of this policy.
            </p>

          </PolicySection>

          {/* 2 */}
          <PolicySection title="2. Information We May Collect">

            <p>
              When you voluntarily contact the school or submit information
              through an enquiry or admission-related form, the website may
              collect information such as:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Mobile or telephone number</li>
              <li>Information included in your enquiry or message</li>
              <li>Other information that you voluntarily provide</li>
            </ul>

            <p>
              Please avoid submitting unnecessary confidential or sensitive
              personal information through website forms.
            </p>

          </PolicySection>

          {/* 3 */}
          <PolicySection title="3. How We Use Information">

            <p>
              Information submitted through the website may be used for
              legitimate school-related purposes, including:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Responding to enquiries</li>
              <li>Responding to admission-related requests</li>
              <li>Providing information about the school</li>
              <li>
                Communicating with parents, guardians or prospective families
              </li>
              <li>Handling requests submitted through website forms</li>
              <li>Maintaining website functionality and security</li>
            </ul>

            <p>
              Information should be used only for purposes connected with the
              request or communication for which it was provided, unless
              otherwise permitted or required by applicable law.
            </p>

          </PolicySection>

          {/* 4 */}
          <PolicySection title="4. Consent and Data Processing">

            <p>
              Where consent is required for processing personal information,
              information should be collected with a clear understanding of
              the purpose for which it is being provided.
            </p>

            <p>
              Where processing is based on consent, you may request withdrawal
              of that consent. Withdrawal does not affect processing that was
              lawfully carried out before the withdrawal.
            </p>

            <p>
              Information may also be processed where such processing is
              otherwise permitted or required under applicable law.
            </p>

          </PolicySection>

          {/* 5 */}
          <PolicySection title="5. Website Forms and Enquiries">

            <p>
              If you submit information through an Admission, Enquiry or
              Contact form, the information may be transmitted to the school
              or to a technical service provider used to deliver the relevant
              website functionality.
            </p>

            <p>
              The exact technical service used for form submission may depend
              on the website's current implementation. The school and website
              administrators should ensure that any third-party service used
              for processing submitted information is appropriately configured.
            </p>

          </PolicySection>

          {/* 6 */}
          <PolicySection title="6. Cookies and Similar Technologies">

            <p>
              Cookies are small files that websites may store on your device.
              Similar browser technologies may also be used to support website
              functionality.
            </p>

            <p>
              This website should use only cookies or similar technologies
              that are actually required by its implemented functionality.
            </p>

            <h3 className="pt-2 text-lg font-semibold text-[#292629]">
              Necessary functionality
            </h3>

            <p>
              Some technical mechanisms may be required for the website,
              navigation or specific features to function correctly. These
              mechanisms are not intended to be used for advertising profiles.
            </p>

            <h3 className="pt-2 text-lg font-semibold text-[#292629]">
              Analytics and tracking
            </h3>

            <p>
              This Privacy Policy does not claim that analytics, advertising
              or tracking cookies are used unless such services are actually
              implemented on the website.
            </p>

            <p>
              If non-essential analytics, advertising or tracking technologies
              are introduced in the future, this policy should be updated to
              describe those technologies and the applicable user choices or
              consent mechanism.
            </p>

            <p>
              You can also manage cookies through the settings available in
              your web browser.
            </p>

          </PolicySection>

          {/* 7 */}
          <PolicySection title="7. Third-Party Services">

            <p>
              Certain website functionality may depend on external technology
              providers. Such providers may process information as necessary
              to provide the relevant service.
            </p>

            <p>
              Third-party services may change as the website is developed and
              maintained. When a service that processes personal information
              is introduced or changed, the website's privacy information
              should be updated accordingly.
            </p>

          </PolicySection>

          {/* 8 */}
          <PolicySection title="8. Sharing of Information">

            <p>
              Personal information submitted through this website is not
              intended to be sold for advertising purposes.
            </p>

            <p>
              Information may be accessible to authorised school personnel
              and relevant service providers where reasonably necessary to
              respond to your request, operate the website, maintain security,
              or comply with applicable legal requirements.
            </p>

          </PolicySection>

          {/* 9 */}
          <PolicySection title="9. Data Security">

            <p>
              Reasonable technical and organisational measures should be used
              to protect personal information against unauthorised access,
              misuse, loss, alteration or disclosure.
            </p>

            <p>
              However, no internet transmission or electronic storage system
              can be guaranteed to be completely secure. Users should therefore
              avoid submitting unnecessary confidential information through
              public website forms.
            </p>

          </PolicySection>

          {/* 10 */}
          <PolicySection title="10. Data Retention">

            <p>
              Personal information should be retained only for as long as it
              is reasonably required for the purpose for which it was collected,
              related operational purposes, or where retention is required or
              permitted by applicable law.
            </p>

            <p>
              The actual retention period may depend on the nature of the
              enquiry and the systems used to process the information.
            </p>

          </PolicySection>

          {/* 11 */}
          <PolicySection title="11. Children's Information">

            <p>
              Linga Global School is an educational institution and this
              website may be accessed by students, parents and guardians.
            </p>

            <p>
              Parents and guardians should avoid submitting unnecessary
              personal information about children through public website forms.
            </p>

            <p>
              Where applicable law requires additional safeguards or consent
              for processing a child's personal information, the relevant
              requirements should be followed.
            </p>

          </PolicySection>

          {/* 12 */}
          <PolicySection title="12. Your Choices and Requests">

            <p>
              Depending on applicable law and the circumstances of processing,
              you may have rights or choices concerning your personal
              information.
            </p>

            <p>
              These may include requesting information about processing,
              requesting correction of inaccurate information, or withdrawing
              consent where consent is the applicable basis for processing.
            </p>

            <p>
              For a privacy-related request, please contact Linga Global
              School using the official contact details below.
            </p>

          </PolicySection>

          {/* 13 */}
          <PolicySection title="13. External Websites">

            <p>
              This website may contain links to external websites or services.
              Linga Global School is not responsible for the privacy practices
              or content of third-party websites.
            </p>

            <p>
              We recommend reviewing the privacy policy of an external website
              before providing personal information through it.
            </p>

          </PolicySection>

          {/* 14 */}
          <PolicySection title="14. Changes to This Privacy Policy">

            <p>
              This Privacy Policy may be updated when the website, its
              functionality, data-processing practices or applicable
              requirements change.
            </p>

            <p>
              The latest version will be published on this page together with
              the date of the latest update.
            </p>

          </PolicySection>

          {/* Contact */}
          <section className="rounded-3xl border border-[#A87A2E]/20 bg-[#C6A66B]/5 p-7 md:p-9">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#A87A2E]">
              Contact
            </p>

            <h2
              className="mt-3 text-2xl font-semibold md:text-3xl"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Privacy questions?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#716A6C] md:text-base">
              For privacy, data-processing or website-related questions,
              please contact Linga Global School using the official contact
              details below.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <a
                href="mailto:info@lingaschool.org"
                className="rounded-full border border-[#A87A2E]/40 px-5 py-3 text-sm font-medium text-[#A87A2E] transition hover:bg-[#D9BC85] hover:text-[#292629]"
              >
                info@lingaschool.org
              </a>

              <a
                href="mailto:principal@lingaschool.org"
                className="rounded-full border border-[#A87A2E]/20 px-5 py-3 text-sm font-medium text-[#716A6C] transition hover:border-[#A87A2E]/40 hover:text-[#A87A2E]"
              >
                principal@lingaschool.org
              </a>

              <a
                href="tel:+917373727290"
                className="rounded-full border border-[#292629]/10 px-5 py-3 text-sm font-medium text-[#716A6C] transition hover:border-[#A87A2E]/40 hover:text-[#A87A2E]"
              >
                +91 73737 27290
              </a>

            </div>

            <p className="mt-6 text-sm leading-7 text-[#716A6C]">
              Anand Nagar, Krishnankoil-626 126,
              Srivilliputhur Taluk, Virudhunagar District,
              Tamil Nadu, India
            </p>

          </section>

          {/* Back */}
          <div className="pt-2">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-[#716A6C] transition hover:text-[#A87A2E]"
            >
              ← Back to Home
            </Link>

          </div>

        </div>
      </section>
    </main>
  )
}


/* Reusable Policy Section */
function PolicySection({ title, children }) {
  return (
    <section>

      <h2
        className="text-2xl font-semibold text-[#292629] md:text-3xl"
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        {title}
      </h2>

      <div className="mt-5 space-y-4 text-sm leading-8 text-[#716A6C] md:text-base">
        {children}
      </div>

    </section>
  )
}
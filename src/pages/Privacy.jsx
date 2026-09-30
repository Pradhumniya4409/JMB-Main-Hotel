import LegalPage from '../components/LegalPage'

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy">
      <p>
        JMB Hotels ("we", "us", "our") respects your privacy. This policy explains what
        information we collect through this website and how it is used.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">Information We Collect</h3>
      <p>
        When you submit a booking enquiry or contact form, we collect the details you provide —
        such as your name, phone number, email address and stay preferences — solely to respond
        to your enquiry.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">How We Use Information</h3>
      <p>
        Enquiry details are shared with the relevant JMB property to confirm availability and
        contact you about your stay. We do not sell or rent your personal information to third
        parties.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">Contact</h3>
      <p>
        For questions about this policy, contact us at{' '}
        <a href="mailto:jmbhotel01@gmail.com" className="text-champagne-dark">jmbhotel01@gmail.com</a>.
      </p>
    </LegalPage>
  )
}

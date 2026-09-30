import LegalPage from '../components/LegalPage'

export default function Cancellation() {
  return (
    <LegalPage title="Cancellation Policy" path="/cancellation">
      <p>
        Because bookings made through this website are enquiries confirmed directly by each JMB
        property, cancellation terms are set and communicated by the individual hotel at the time
        your stay is confirmed.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">How to Cancel</h3>
      <p>
        To cancel or change a confirmed booking, contact the hotel directly using the phone number
        or WhatsApp link on that property's page as early as possible.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">Questions</h3>
      <p>
        If you're unsure which property to contact, reach us at{' '}
        <a href="mailto:jmbhotel01@gmail.com" className="text-champagne-dark">jmbhotel01@gmail.com</a>{' '}
        and we'll direct you.
      </p>
    </LegalPage>
  )
}

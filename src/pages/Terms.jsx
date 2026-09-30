import LegalPage from '../components/LegalPage'

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" path="/terms">
      <p>
        By using this website, you agree to the following terms. These terms may be updated from
        time to time without prior notice.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">Use of This Website</h3>
      <p>
        This website provides information about JMB Hotels properties and allows you to submit a
        booking enquiry. It does not process payments or guarantee instant reservations — all
        bookings are confirmed directly by the relevant hotel.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">Accuracy of Information</h3>
      <p>
        We aim to keep property information, contact details and content on this site accurate,
        but details such as pricing and availability are ultimately confirmed by the hotel at the
        time of booking.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">Governing Law</h3>
      <p>These terms are governed by the laws of India.</p>
    </LegalPage>
  )
}

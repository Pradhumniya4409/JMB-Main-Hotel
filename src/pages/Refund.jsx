import LegalPage from '../components/LegalPage'

export default function Refund() {
  return (
    <LegalPage title="Refund Policy" path="/refund">
      <p>
        This website does not process online payments — no charge is made when you submit a
        booking enquiry. Any advance payment, deposit or refund is handled directly between you
        and the JMB property confirming your stay.
      </p>
      <h3 className="font-display text-xl text-charcoal pt-2">Refund Requests</h3>
      <p>
        For a refund related to a payment made directly to a hotel, contact that property using
        the phone number or email listed on its page.
      </p>
    </LegalPage>
  )
}

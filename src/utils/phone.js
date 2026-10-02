const getNationalDigits = (phone) => {
  const digits = String(phone).replace(/\D/g, '')
  if (digits.length === 12 && digits.startsWith('91')) return digits.slice(2)
  if (digits.length === 11 && digits.startsWith('0')) return digits.slice(1)
  return digits
}

export const formatPhone = (phone) => {
  const digits = getNationalDigits(phone)
  if (digits.length !== 10) return phone
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
}

export const phoneHref = (phone) => {
  const digits = getNationalDigits(phone)
  return digits.length === 10 ? `tel:+91${digits}` : `tel:${phone}`
}

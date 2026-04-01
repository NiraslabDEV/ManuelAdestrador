export const WA_PHONE = '258876037823'
export const WA_BASE = `https://wa.me/${WA_PHONE}`

export function waUrl(text: string) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`
}

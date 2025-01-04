'use client'

import { useEffect, useRef } from 'react'

export function GoogleMap2() {
  const mapRef = useRef<HTMLDivElement>(null)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  useEffect(() => {
    if (mapRef.current && apiKey) {
      // Clear any existing children to avoid duplicates
      mapRef.current.innerHTML = ''

      const iframe = document.createElement('iframe')
      iframe.style.border = '0'
      iframe.src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=greater+vancouver+driving+school`
      iframe.width = '100%'
      iframe.height = '100%'
      iframe.allowFullscreen = true
      iframe.loading = 'lazy'
      iframe.referrerPolicy = 'no-referrer-when-downgrade'
      mapRef.current.appendChild(iframe)
    }
  }, [apiKey])

  if (!apiKey) {
    console.error('Google Maps API key is not defined. Please set it in your .env.local file.')
    return <div>Error: Google Maps API key is missing.</div>
  }

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}

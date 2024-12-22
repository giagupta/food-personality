import './globals.css'

export const metadata = {
  title: 'Food Personality Test',
  description: 'Discover your unique food personality type',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

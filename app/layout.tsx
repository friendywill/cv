import { Ubuntu_Mono } from 'next/font/google'
import '../styles/globals.css'
import { normalize } from 'path'

const ubuntu_mono = Ubuntu_Mono({
  subsets: ['latin'],
  variable: '--font-ubuntu-mono',
  display: 'swap',
  weight: "400",
  style: "normal",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ubuntu_mono.variable}`}>
      <body>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/coverLetter">Cover Letter</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <ul>
            <li>
                <a href="/portfolio/coding">Coding</a>
            </li>
            <li>
                <a href="/portfolio/devops">Devops</a>
            </li>
            <li>
                <a href="/portfolio/sysadmin">System Administration</a>
            </li>
          </ul>
          <li>
            <a href="/resume">Resume</a>
          </li>

        </ul>
        {children}
      </body>
    </html>
  )
}
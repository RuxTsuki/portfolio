import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Diego Bello | TsukiiYamero',
  description: 'Explore my journey and projects in the world of technology. Discover my skills, knowledge, and accomplishments through a variety of projects, experiences, and how I have applied my abilities in the workplace and creative endeavors.',
  //description: 'Explora mi trayectoria y proyectos en el mundo de la tecnología. Descubre mis habilidades, conocimientos y logros a través de una variedad de proyectos, experiencias y cómo he aplicado mis habilidades en el ambiente laboral y en proyectos creativos.',
  manifest: 'manifest.json',
  themeColor: '#000000',
  applicationName: 'Portfolio TsukiiYamero',
  authors: { 'name': 'Diego Alexander Bello' },
  //meta ogg
  twitter: {
    title: 'Portfolio - Diego Bello | TsukiiYamero',
    description: 'Explore my journey and projects in the world of technology. Discover my skills, knowledge, and accomplishments through a variety of projects, experiences, and how I have applied my abilities in the workplace and creative endeavors.',
    site: 'https://ruxtsuki.xyz/',
    creator: '@TsukiiYamero',
    images: '/icons/tsukiilogo.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ruxtsuki.xyz/',
    alternateLocale: 'es_ES',
    title: 'Portfolio - Diego Bello | TsukiiYamero',
    description: 'Explore my journey and projects in the world of technology. Discover my skills, knowledge, and accomplishments through a variety of projects, experiences, and how I have applied my abilities in the workplace and creative endeavors.',
    siteName: 'Portfolio TsukiiYamero',
    images: '/icons/tsukiilogo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pramod S S | DevOps Engineer & Full-Stack Developer',
  description: 'Results-driven DevOps Engineer with expertise in Kubernetes, Docker, AWS, CI/CD pipelines, and full-stack development. MCA graduate from Bengaluru.',
  keywords: ['DevOps', 'Kubernetes', 'Docker', 'AWS', 'Next.js', 'TypeScript', 'Full-Stack', 'Bengaluru'],
  authors: [{ name: 'Pramod S S' }],
  creator: 'Pramod S S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pramod-ss.vercel.app',
    title: 'Pramod S S | DevOps Engineer',
    description: 'DevOps Engineer specializing in cloud-native infrastructure and automation',
    siteName: 'Pramod S S Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pramod S S | DevOps Engineer',
    description: 'DevOps Engineer specializing in cloud-native infrastructure and automation',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0d1117] text-[#e6edf3] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

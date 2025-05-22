import type { Metadata } from 'next'
import local from 'next/font/local'
import './globals.css'
import TitlebarComponent from '@/components/parts/titlebar/titlebar'
import Footer from '@/components/parts/footer/footer'
import { Toaster } from 'sonner'

/**
 * Common font to be used
 */
const ralewayfont = local({
    src: './fonts/raleway.ttf',
    variable: '--raleway-font',
})

export const metadata: Metadata = {
    title: 'Goheza',
    description: 'Built for creators and businesses who want to grow fast',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en"  >
            <body className={`${ralewayfont.className}`}>
                <header className='relative'>
                    <TitlebarComponent />
                </header>
                <main className='bg-[#fafafa]'>{children}</main>
                <Toaster/>
                <footer>
                    <Footer/>
                </footer>
            </body>
        </html>
    )
}

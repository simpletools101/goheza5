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
        <html lang="en">
            <body className={`${ralewayfont.className}`}>
                <div className='fixed top-0 left-0 h-screen w-full  -z-10' style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.93)),url('/abstract_pattern_design_background_2007.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor : '#fafafa'
                    }}></div>
                <div
                    className=" w-full h-screen"
                   
                >
                    <header className="relative">
                        <TitlebarComponent />
                    </header>
                    <main>{children}</main>
                    <Toaster />
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </body>
        </html>
    )
}

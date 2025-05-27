import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function WelcomeNote() {
    return (
        <div className="flex flex-col items-center mb-12 mt-2 px-4 md:px-8 lg:px-16 h-auto">
            <div className="mt-1 flex flex-col items-center space-y-4 text-center">
                <div className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-green-300 dark:border-green-500/20">
                    Meet Goheza!
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-snug sm:leading-tight mt-3">
                    Earn Money <span className="text-[#ff5757]">Creating</span> Content
                    <br />
                    <span className="bg-clip-text">For Brands Online</span>
                </h1>

                <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-black max-w-2xl mx-auto mt-2 bg-[#ffefe9] rounded-xl p-1">
                    We're giving our site a little extra polish, but we'll be..
                </p>
            </div>

            <Link href="#userform">
                <Button
                    size="lg"
                    className="mt-8 font-bold cursor-pointer border-2 border-transparent hover:border-[#ff5757] hover:bg-transparent hover:text-black text-white text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full bg-[#ff5757]"
                >
                    SIGN UP
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>
    )
}

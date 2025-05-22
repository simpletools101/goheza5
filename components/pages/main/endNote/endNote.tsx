import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function EndNote() {
    return (
        <div className="py-20 bg-[#0892a5]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Experience?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Join thousands who are ready to get Paid</p>
                <Link href="#userform">
                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 rounded-full bg-white text-blue-900 hover:bg-gray-100 shadow-lg transition-all duration-300 group"
                    >
                        Join Now
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

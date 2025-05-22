"use client"
import Link from "next/link";

export default function EndNotRegistration() {
    return (
        <p className="text-gray-400 text-sm text-center">
            By joining, you agree to our{' '}
            <Link href="#" className="text-[#ff5757]">
                Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-[#ff5757]">
                Privacy Policy
            </Link>
            .
        </p>
    )
}

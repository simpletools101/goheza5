'use client'

import ProductLogo from '@/components/common/product-logo'
import SideNav from '@/components/common/side-nav'
import { Button } from '@/components/ui/button'
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function TitlebarComponent() {
    const [isNavVisible, setNavVisible] = useState(false)

    function willHideSideNav() {
        setNavVisible(false)
    }

    function willShowSideNav() {
        setNavVisible(true)
    }

    return (
        <div className="bg-transparent flex justify-between items-center h-[75px] ">
            <div className="ml-6 mt-4">
                <ProductLogo />
            </div>
            <div className="space-x-4 mr-7 text-md font-semibold relative ">
                <button onClick={willShowSideNav} className=' p-2 rounded-full hover:text-[#ff5757]  cursor-pointer duration-200'>
                    <AlignJustify size={25} />
                </button>
            </div>
            <SideNav isVisible={isNavVisible} requestHiddenState={willHideSideNav} />
        </div>
    )
}

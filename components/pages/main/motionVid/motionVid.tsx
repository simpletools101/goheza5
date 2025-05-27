'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'

export default function MotionVid() {
    const [willShowVid, setShowVid] = useState(false)

    return (
        <div className="w-full flex items-center justify-center mt-14 mb-14 px-4" id="aboutus">
            <div className="w-full max-w-[800px] aspect-video relative">
                {!willShowVid && (
                    <div className="absolute inset-0 bg-[#ffefe9] flex flex-col items-center justify-center z-10">
                        <h1 className="text-4xl sm:text-6xl font-bold text-center">#Aboutus</h1>
                        <button
                            onClick={() => setShowVid(true)}
                            className="cursor-pointer group relative p-5 bg-[#ff5757] text-white rounded-full mt-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse"
                        >
                            <Play className="w-6 h-6" />
                            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-sm font-semibold text-[#ff5757] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Watch Now
                            </span>
                        </button>
                    </div>
                )}

                {willShowVid && (
                    <iframe
                        suppressHydrationWarning
                        className="w-full h-full rounded-2xl bg-[#ffefe9] p-2"
                        src="https://www.youtube.com/embed/ULcSGHvcFOY"
                        title='Andrew Tate Explains - "How To Have Massive Influence"'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    )
}
import Image from 'next/image'
import { ReviewStars } from './review-stars' // make sure this is imported correctly

export default function UserRatingSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 mt-12 mb-12 px-4">
      <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden "
            >
              <Image
                src={`/user_${i}.jpg`}
                width={40}
                height={40}
                alt={`User ${i}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="mt-4 sm:mt-0 sm:ml-4 flex items-center flex-col sm:flex-row gap-2">
          <ReviewStars rating={4.7} size="lg" />
          <span className="font-bold text-xl text-gray-800">4.7</span>
        </div>
      </div>

      {/* Callout */}
      <p className="text-black font-bold text-center text-sm sm:text-base">
        Trusted by your favourite creators</p>
    </div>
  )
}

import { Star } from 'lucide-react';

interface ReviewStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ReviewStars({ rating, size = 'md' }: ReviewStarsProps) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = 5 - fullStars - (partialStar > 0 ? 1 : 0);

  // Responsive Tailwind classes based on size
  const sizeClasses = {
    sm: 'w-3 h-3 sm:w-3.5 sm:h-3.5',
    md: 'w-4 h-4 sm:w-5 sm:h-5',
    lg: 'w-5 h-5 sm:w-6 sm:h-6',
  }[size];

  return (
    <div className="flex items-center space-x-1">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className={`${sizeClasses} text-yellow-400 fill-yellow-400`}
        />
      ))}

      {/* Partial star */}
      {partialStar > 0 && (
        <div className={`relative ${sizeClasses}`}>
          <Star className="absolute top-0 left-0 text-yellow-400" />
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${partialStar * 100}%` }}
          >
            <Star className="text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className={`${sizeClasses} text-yellow-400`} />
      ))}
    </div>
  );
}


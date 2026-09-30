import { Star } from 'lucide-react'

export default function ReviewSection({ reviews = [], rating, reviewCount, googleUrl }) {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <h3 className="font-display text-3xl text-charcoal">Guest Reviews</h3>
          {rating && (
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-champagne-dark">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.round(rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="text-sm text-charcoal/60">
                {rating} · {reviewCount} review{reviewCount === 1 ? '' : 's'}
              </span>
            </div>
          )}
        </div>
        {googleUrl && (
          <a
            href={googleUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-champagne-dark hover:text-champagne transition-colors"
          >
            View on Google →
          </a>
        )}
      </div>

      {reviews.length === 0 ? (
        <div className="border border-dashed border-charcoal/20 p-10 text-center">
          <p className="font-display text-lg text-charcoal">Reviews coming soon.</p>
          <p className="text-sm text-charcoal/55 mt-2">
            Verified Google reviews for this property will appear here.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="border border-charcoal/10 p-6">
              <div className="flex text-champagne-dark mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill={s < r.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="text-sm text-charcoal/75 leading-relaxed">{r.text}</p>
              <p className="text-xs text-charcoal/45 mt-4 tracking-wide">{r.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

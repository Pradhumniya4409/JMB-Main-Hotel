import { BedDouble } from 'lucide-react'

export default function RoomCard({ room }) {
  return (
    <div className="border border-charcoal/10 p-6 flex flex-col gap-3">
      {room.image && (
        <div className="aspect-[4/3] overflow-hidden mb-2">
          <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
        </div>
      )}
      <h4 className="font-display text-xl text-charcoal">{room.name}</h4>
      {room.description && <p className="text-sm text-charcoal/60">{room.description}</p>}
      {room.price ? (
        <p className="text-champagne-dark font-semibold">{room.price}</p>
      ) : (
        <p className="text-sm text-charcoal/45 italic">Contact hotel for availability</p>
      )}
    </div>
  )
}

// Shown on hotel pages where no verified room inventory has been supplied yet.
export function RoomsComingSoon() {
  return (
    <div className="border border-dashed border-charcoal/20 p-12 text-center">
      <BedDouble className="mx-auto mb-4 text-champagne-dark" size={28} />
      <p className="font-display text-xl text-charcoal">Room details coming soon</p>
      <p className="text-sm text-charcoal/55 mt-2">
        Please contact the hotel directly for current room types and availability.
      </p>
    </div>
  )
}

import { hotels } from '../data/hotels'

// All hotels
export const getAllHotels = () => hotels

// A single hotel by slug
export const getHotelBySlug = (slug) => hotels.find((h) => h.slug === slug)

// Distinct cities, each with a slug and a live hotel count — derived, never hard-coded
export const getCities = () => {
  const map = new Map()
  hotels.forEach((h) => {
    if (!map.has(h.citySlug)) {
      map.set(h.citySlug, { name: h.city, slug: h.citySlug, hotelCount: 0 })
    }
    map.get(h.citySlug).hotelCount += 1
  })
  return Array.from(map.values()).sort((a, b) => b.hotelCount - a.hotelCount)
}

export const getCityBySlug = (citySlug) => getCities().find((c) => c.slug === citySlug)

// Distinct areas within a city, each with a live hotel count
export const getAreasByCity = (citySlug) => {
  const map = new Map()
  hotels
    .filter((h) => h.citySlug === citySlug)
    .forEach((h) => {
      if (!map.has(h.areaSlug)) {
        map.set(h.areaSlug, { name: h.area, slug: h.areaSlug, citySlug, hotelCount: 0 })
      }
      map.get(h.areaSlug).hotelCount += 1
    })
  return Array.from(map.values())
}

export const getAreaBySlug = (citySlug, areaSlug) =>
  getAreasByCity(citySlug).find((a) => a.slug === areaSlug)

// Hotels filtered by city and/or area
export const getHotelsByCity = (citySlug) => hotels.filter((h) => h.citySlug === citySlug)

export const getHotelsByArea = (citySlug, areaSlug) =>
  hotels.filter((h) => h.citySlug === citySlug && h.areaSlug === areaSlug)

export const getFeaturedHotels = () => hotels.filter((h) => h.featured)

export const getTotalHotelCount = () => hotels.length

export const getTotalCityCount = () => getCities().length

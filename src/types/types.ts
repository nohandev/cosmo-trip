import type { LucideIcon } from 'lucide-react'

// Destinations

export interface DestinationsType {
  id: string
  name: string
  description: string
  rating: number
  reviews: number
  durationDays: number
  price: number
  img: {
    src: string
    alt: string
  }
  highlights?: string[]
}

// Testemonials

export type Rating = 1 | 2 | 3 | 4 | 5

export interface TestimonialsType {
  id: string
  name: string
  avatar: string
  rating: Rating
  testimonial: string
}

// Highlights

export interface HighlightsType {
  id?: number
  title: string
  description: string
  icon: LucideIcon
}

// FAQ

export interface AccordionType {
  id: number
  title: string
  content: React.ReactNode
}
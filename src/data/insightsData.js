import raw from './insightsExtracted.json'
import { asset } from './siteData'

export const allReviews = raw.reviews.map((review) => ({
  initials: review.initials,
  colorClass: review.colorClass,
  name: review.name,
  date: review.date,
  text: review.text,
}))

export const blogPosts = raw.blog
  .map((post) => ({ ...post, id: Number(post.id), image: asset(post.image.replace(/^\//, '')) }))
  .sort((a, b) => b.id - a.id)

export const caseStudies = raw.cases
  .map((item) => ({ ...item, id: Number(item.id), image: asset(item.image.replace(/^\//, '')) }))
  .sort((a, b) => b.id - a.id)

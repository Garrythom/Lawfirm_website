import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ArrowIcon from '../components/ArrowIcon'
import SectionTitle from '../components/SectionTitle'
import { asset } from '../data/siteData'
import { blogPosts } from '../data/insightsData'
import blogDetails from '../data/blogPostDetails.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function renderBlock(block, index) {
  switch (block.type) {
    case 'h2':
      return <h2 key={index}>{block.text}</h2>
    case 'h3':
      return <h3 key={index}>{block.text}</h3>
    case 'ul':
      return (
        <ul className="check-list" key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="blog-detail__ordered-list" key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
    default:
      return <p key={index}>{block.text}</p>
  }
}

function BlogDetail() {
  const { id } = useParams()
  const meta = blogPosts.find((post) => String(post.id) === id)
  const detail = blogDetails.find((post) => post.id === id)
  const latestPosts = blogPosts.slice(0, 5)
  useDocumentTitle(detail?.title ?? 'Blog')

  if (!meta || !detail) {
    return (
      <section className="services-page patterned">
        <SectionTitle kicker="Not Found" title="Article not found" align="center" />
        <p style={{ textAlign: 'center' }}>
          <Link className="text-link" to="/insights/blog">Back to all articles <span aria-hidden="true"><ArrowIcon /></span></Link>
        </p>
      </section>
    )
  }

  return (
    <>
      <PageHeader title="Blog" crumb="Blog" image={asset('assets/img/background/blog_bg.jpg')} />
      <section className="case-detail blog-detail">
        <div className="case-detail__content">
          <div className="case-detail__hero-wrap">
            <img className="case-detail__hero" src={asset(detail.heroImage.replace(/^\//, ''))} alt="" loading="lazy" />
            <div className="case-detail__hero-tiles" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="case-detail__intro">
            <time>{detail.date}</time>
            <h2>{detail.title}</h2>
          </div>
          <div className="case-detail__body">{detail.blocks.map(renderBlock)}</div>
        </div>
        <aside className="case-detail__sidebar">
          <div className="blog-sidebar__box">
            <h3 className="case-detail__sidebar-heading">Search</h3>
            <form className="blog-sidebar__search" onSubmit={(event) => event.preventDefault()}>
              <input type="search" placeholder="KEYWORDS" />
              <button type="submit" aria-label="Search">
                <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
                  <circle cx="8.5" cy="8.5" r="6.5" stroke="currentColor" strokeWidth="2" />
                  <line x1="13.4" y1="13.4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </form>
          </div>

          <div className="blog-sidebar__box">
            <h3 className="case-detail__sidebar-heading">Latest Post</h3>
            <div className="blog-sidebar__latest-list">
              {latestPosts.map((post) => (
                <Link className="blog-sidebar__latest-item" to={`/insights/blog/${post.id}`} key={post.id}>
                  <span className="blog-sidebar__latest-thumb">
                    <img src={post.image} alt="" loading="lazy" />
                  </span>
                  <span className="blog-sidebar__latest-text">
                    <time>{post.date}</time>
                    <h4>{post.title}</h4>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="service-detail__contact">
            <img className="service-detail__contact-icon" src={asset('assets/img/icon/about-v2-icon1.png')} alt="" aria-hidden="true" />
            <span className="service-detail__contact-kicker">Get in Touch</span>
            <p>Legal justice<br />for you</p>
            <Link className="button button--solid" to="/contact">Contact us <span aria-hidden="true"><ArrowIcon /></span></Link>
          </div>
        </aside>
      </section>
    </>
  )
}

export default BlogDetail

import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { asset } from '../data/siteData'
import { blogPosts } from '../data/insightsData'

function Blog() {
  return (
    <>
      <PageHeader title="Blog" crumb="Blog" image={asset('assets/img/background/blog_bg.jpg')} />
      <section className="blog-preview insights-page">
        <SectionTitle kicker="Recent Blog Post" title="Latest Legal Articles" align="center" />
        <div className="article-grid article-grid--full">
          {blogPosts.map((post) => (
            <article className="article-card article-card--blog" key={post.id}>
              <div className="article-card__media">
                <img src={post.image} alt="" loading="lazy" />
                <img src={post.image} alt="" loading="lazy" aria-hidden="true" />
              </div>
              <div className="article-card__body">
                <time><span aria-hidden="true">&#128197;</span> {post.date}</time>
                <h3>
                  <Link to={`/insights/blog/${post.id}`} style={{ color: 'inherit' }}>{post.title}</Link>
                </h3>
                <Link className="article-card__readmore" to={`/insights/blog/${post.id}`}>
                  Read More <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog

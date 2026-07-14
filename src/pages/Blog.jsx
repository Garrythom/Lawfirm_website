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
            <article className="article-card" key={post.id}>
              <img src={post.image} alt="" loading="lazy" />
              <time>{post.date}</time>
              <h3>{post.title}</h3>
              <Link to={`/insights/blog/${post.id}`}>Read More <span aria-hidden="true">-&gt;</span></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog

import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { blogPosts } from '../data/insightsData'

function BlogDetail() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <section className="services-page patterned">
        <SectionTitle kicker="Not Found" title="Article not found" align="center" />
        <p style={{ textAlign: 'center' }}>
          <Link className="text-link" to="/insights/blog">Back to all articles <span aria-hidden="true">-&gt;</span></Link>
        </p>
      </section>
    )
  }

  return (
    <>
      <PageHeader title={post.title} crumb="Blog" image={post.image} />
      <section className="split-page">
        <img src={post.image} alt="" className="about-snapshot__portrait" />
        <div>
          <SectionTitle kicker={post.date} title={post.title} />
          <p>
            This article is published in full on the Pacific Gate Law Firm blog. Visit the firm&rsquo;s site to
            read the complete piece.
          </p>
          <Link className="button button--solid" to="/insights/blog">Back to all articles <span aria-hidden="true">-&gt;</span></Link>
        </div>
      </section>
    </>
  )
}

export default BlogDetail

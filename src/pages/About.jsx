import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import RevealOnScroll from '../components/RevealOnScroll'
import ArrowIcon from '../components/ArrowIcon'
import { useCountUp } from '../hooks/useCountUp'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { asset } from '../data/siteData'

const aboutList = [
  {
    title: 'Elite Regulatory & Litigation Pedigree',
    text: "Our team includes former federal prosecutors and senior regulators with an insider's understanding of global enforcement.",
  },
  {
    title: 'Seamless Cross-Border Execution',
    text: 'Integrated offices and a vetted global network ensure coordinated action across jurisdictions for unified results.',
  },
  {
    title: 'Technology-Driven Legal Strategy',
    text: 'We employ advanced blockchain forensics and data analytics to build unassailable evidence and pinpoint asset recovery paths.',
  },
]

function YearsBadge() {
  const [ref, visible] = useScrollReveal({ threshold: 0.4 })
  const display = useCountUp('32', { start: visible })
  return (
    <div className="image-stack__badge" ref={ref}>
      <strong>{visible ? display : '0'}</strong>
      <span>Years of Excellence</span>
    </div>
  )
}

function About() {
  useDocumentTitle('About Us')
  return (
    <>
      <PageHeader title="About Us" crumb="About Us" image={asset('assets/img/background/about_bg.jpg')} />
      <section className="split-page">
        <div className="image-stack">
          <img src={asset('assets/img/about/about-v3-img1.jpg')} alt="" />
          <YearsBadge />
        </div>
        <div>
          <SectionTitle kicker="Global Financial Law Defense" title="Your Trusted Legal Shield in a Complex Financial World" />
          <p>
            In an era defined by borderless capital flows and sophisticated financial crime, Pacific Gate Law Firm
            stands as a preeminent strategic advisor. Headquartered in the State of Washington with a global reach,
            we are singularly focused on protecting multinational corporations, financial institutions, and
            high-net-worth individuals from their most critical legal threats&mdash;wherever they arise.
          </p>
          <p>
            We don&rsquo;t just react to crises; we provide the foresight and strategic architecture to prevent them.
            By merging elite legal advocacy with deep financial investigation and regulatory insight, we deliver
            decisive outcomes that safeguard assets, preserve reputations, and secure our clients&rsquo; future
            prosperity.
          </p>
          <ul className="about-list">
            {aboutList.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <Link className="button button--solid" to="/contact">Get a free consultation <span><ArrowIcon /></span></Link>
        </div>
      </section>
      <RevealOnScroll as="section" className="history-section patterned">
        <SectionTitle kicker="Our Journey" title="30 Years of Legal Leadership" align="center" />
        <div className="history-grid">
          <div className="history-grid__divider" aria-hidden="true" />
          {[
            ['1993', 'Foundation & Pioneering', 'Established in State of Washington, focusing on the growing complexity of white-collar crime and securities litigation from the outset.'],
            ['2000', 'International Expansion', 'Opened our London office, marking the strategic entry into the European market and the beginning of building a global service network.'],
            ['2015', 'Strategic Focus', 'Formally restructured the firm, establishing Asset Recovery, Financial Fraud, Insolvency, and Financial Services Litigation as our four global pillar practices.'],
            ['2024', 'Global Top-Tier Honor', "Achieved 'Band 1' rankings in all core practice areas in Chambers Global, solidifying our position among the world's top-tier financial law firms."],
          ].map(([year, title, text], index) => {
            const column = index + 1
            const imageFirst = index % 2 === 1
            return (
              <article className="history-card" key={year} style={{ display: 'contents' }}>
                <img
                  className={imageFirst ? 'history-card__media history-card__media--top' : 'history-card__media history-card__media--bottom'}
                  src={asset(`assets/img/resource/company-history-img${index + 1}.jpg`)}
                  alt=""
                  loading="lazy"
                  style={{ gridColumn: column, gridRow: imageFirst ? 1 : 3, order: index * 3 + (imageFirst ? 0 : 2) }}
                />
                <span className="history-card__badge" style={{ gridColumn: column, gridRow: 2, order: index * 3 + 1 }}>{year}</span>
                <div
                  className={imageFirst ? 'history-card__text history-card__text--bottom' : 'history-card__text history-card__text--top'}
                  style={{ gridColumn: column, gridRow: imageFirst ? 3 : 1, order: index * 3 + (imageFirst ? 2 : 0) }}
                >
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </RevealOnScroll>
    </>
  )
}

export default About

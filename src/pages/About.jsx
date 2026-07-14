import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { asset } from '../data/siteData'

function About() {
  return (
    <>
      <PageHeader title="About Us" crumb="About Us" image={asset('assets/img/background/about_bg.jpg')} />
      <section className="split-page">
        <div className="image-stack">
          <img src={asset('assets/img/about/about-v3-img1.jpg')} alt="" />
          <div className="image-stack__badge"><strong>32</strong><span>Years of Excellence</span></div>
        </div>
        <div>
          <SectionTitle kicker="Global Financial Law Defense" title="Your Trusted Legal Shield in a Complex Financial World" />
          <p>
            Golden Pacific Law Firm stands as a preeminent strategic advisor for borderless capital flows,
            sophisticated financial crime, and cross-border recovery. The practice protects corporations,
            financial institutions, and high-net-worth individuals from critical legal threats wherever they arise.
          </p>
          <p>
            The firm combines elite legal advocacy with financial investigation and regulatory insight to preserve
            assets, reputations, and future prosperity.
          </p>
          <ul className="check-list">
            <li>Elite regulatory and litigation pedigree</li>
            <li>Seamless cross-border execution</li>
            <li>Technology-driven legal strategy</li>
          </ul>
          <a className="button button--solid" href="/contact">Get a free consultation <span>-&gt;</span></a>
        </div>
      </section>
      <section className="history-section patterned">
        <SectionTitle kicker="Our Journey" title="30 Years of Legal Leadership" align="center" />
        <div className="history-grid">
          {[
            ['1993', 'Foundation & Pioneering', 'Established in Washington with a focus on white-collar crime and securities litigation.'],
            ['2000', 'International Expansion', 'Opened a London office and began building a global service network.'],
            ['2015', 'Strategic Focus', 'Restructured around asset recovery, financial fraud, insolvency, and services litigation.'],
            ['2024', 'Global Top-Tier Honor', 'Achieved leading rankings across core practice areas.'],
          ].map(([year, title, text], index) => (
            <article className="history-card" key={year}>
              <img src={asset(`assets/img/resource/company-history-img${index + 1}.jpg`)} alt="" loading="lazy" />
              <span>{year}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default About

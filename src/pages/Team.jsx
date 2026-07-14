import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { asset, team } from '../data/siteData'

function Team() {
  return (
    <>
      <PageHeader title="Experienced Attorneys" crumb="Team" image={asset('assets/img/background/team_bg.jpg')} />
      <section className="team-page">
        <SectionTitle kicker="Meet Our Lawyer" title="Experienced Attorneys" align="center" />
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card__photo">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <p>{member.role}</p>
              <h3>{member.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Team

// Seed data shared between the frontend (src/data/siteData.js) and the
// Express mock backend. Mirrors the inferred catalog from gp-dm.com.

export const asset = (path) => `https://www.gp-dm.com/${path}`

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      'Asset Recovery',
      'Financial Fraud',
      'Bank Litigation',
      'Cryptocurrency Recovery',
      'Bankruptcy and Insolvency',
      'Corruption and Asset Recovery',
      "Creditors' Rights",
      'Cross-Border Asset Recovery',
      'International Litigation',
      'International Arbitration',
    ],
  },
  { label: 'Team', path: '/team' },
  {
    label: 'Insights',
    path: '/insights',
    children: ['Case Studies', 'Blog', 'Reviews'],
  },
  { label: 'Contact', path: '/contact' },
]

export const services = [
  {
    id: 'asset-recovery',
    number: '01',
    title: 'Asset Recovery',
    category: 'financial disputes',
    headline: 'Investigating and litigating sophisticated investment and corporate fraud.',
    summary: 'Tracing, freezing, and reclaiming assets across borders.',
    image: asset('assets/img/service/service-details-01.jpg'),
  },
  {
    id: 'financial-fraud',
    number: '02',
    title: 'Financial Fraud',
    category: 'fraud investigation',
    headline: 'Resolving high-stakes disputes with financial institutions.',
    summary: 'Investigating and litigating complex investment fraud.',
    image: asset('assets/img/service/service-details-02.jpg'),
  },
  {
    id: 'bank-litigation',
    number: '03',
    title: 'Bank Litigation',
    category: 'financial institutions',
    headline: 'Protecting clients in loan, enforcement, and fiduciary disputes.',
    summary: 'Resolving high-stakes disputes with financial institutions.',
    image: asset('assets/img/service/service-details-03.jpg'),
  },
  {
    id: 'cryptocurrency-recovery',
    number: '04',
    title: 'Cryptocurrency Recovery',
    category: 'digital assets',
    headline: 'Specialized tracing and recovery of digital assets.',
    summary: 'Blockchain forensics and recovery strategy for digital asset theft.',
    image: asset('assets/img/service/service-details-04.jpg'),
  },
  {
    id: 'bankruptcy-insolvency',
    number: '05',
    title: 'Bankruptcy & Insolvency',
    category: 'creditor strategy',
    headline: 'Coordinated insolvency strategy for creditors and stakeholders.',
    summary: 'Navigating insolvency to maximize creditor returns.',
    image: asset('assets/img/service/service-details-05.jpg'),
  },
  {
    id: 'corruption-recovery',
    number: '06',
    title: 'Corruption & Asset Recovery',
    category: 'civil recovery',
    headline: 'Pursuing the return of illicit gains through civil recovery.',
    summary: 'Civil recovery and proceeds-of-crime action across jurisdictions.',
    image: asset('assets/img/service/service-details-06.jpg'),
  },
  {
    id: 'creditors-rights',
    number: '07',
    title: "Creditors' Rights",
    category: 'enforcement',
    headline: 'Aggressively enforcing and protecting creditor interests.',
    summary: 'Enforcement, priority disputes, and international collection strategy.',
    image: asset('assets/img/service/service-details-07.jpg'),
  },
  {
    id: 'cross-border-recovery',
    number: '08',
    title: 'Cross-Border Asset Recovery',
    category: 'international recovery',
    headline: 'Securing marital or commercial assets in international disputes.',
    summary: 'Recovery planning for assets hidden through global structures.',
    image: asset('assets/img/service/service-details-08.jpg'),
  },
  {
    id: 'international-litigation',
    number: '09',
    title: 'International Litigation',
    category: 'cross-border disputes',
    headline: 'Advocating in complex cross-border business disputes.',
    summary: 'Forum strategy, emergency relief, and coordinated litigation.',
    image: asset('assets/img/service/service-details-09.jpg'),
  },
  {
    id: 'international-arbitration',
    number: '10',
    title: 'International Arbitration',
    category: 'arbitral forums',
    headline: 'Securing enforceable awards in global arbitral forums.',
    summary: 'Arbitration strategy for major commercial and investment disputes.',
    image: asset('assets/img/service/service-details-10.jpg'),
  },
]

export const team = [
  ['Robert Martin Donaldson', 'Founding Partner', 'upload/3bca0bab9059215f/59b9e2c3568e2191.png'],
  ['Barry Stephen Andrews', 'Senior Partner', 'upload/7ec980cb7dd11176/59c21a1c50cbefa8.png'],
  ['Paul Wei-Jye Chen', 'Senior Partner', 'upload/d8297c40df8ce306/fd37856f095bafb9.png'],
  ['Paul Y Liu', 'Senior Partner', 'upload/ac7ee42ba11178f8/2f3cd8aaabd4f304.png'],
  ['Martin Careaga Munoz', 'Senior Partner', 'upload/700772ef8b35c8c5/8c0e26e136947829.png'],
  ['Davis L Kim', 'Senior Partner', 'upload/9023699991f661ee/e9960462b7c3e83e.png'],
  ['Qinlei Wang', 'Senior Partner', 'upload/961826690fa49081/d8ab083cedc9aae8.png'],
  ['Neeraj Kumar', 'Senior Partner', 'upload/b4a6cf53305a51ce/b9ecf461eae55413.png'],
  ['Hansen L Wong', 'Senior Partner', 'upload/891776c90dc462d5/b5e571cf33bc7515.png'],
  ['David Allen Matthews', 'Senior Partner', 'upload/39135b5f072c3a4d/a263bbf3295e08ab.png'],
  ['Zhe Wu', 'Senior Partner', 'upload/424b100c0bfcfd85/7c52f30dfec28973.png'],
  ['Jeffrey David Moore', 'Senior Partner', 'upload/b444da00a0c1d9a4/15887b11b023fea6.png'],
].map(([name, role, image], index) => ({
  id: index + 1,
  name,
  role,
  image: asset(image),
}))

export const articles = [
  {
    id: 37,
    title: 'The Tinder Catfish Trap: Why Digital Forensics is Critical to Scam Recovery',
    date: 'December 3, 2025',
    publishedAt: '2025-12-03',
    image: asset('upload/news/c23b94dc1ae65748/0a2ffbaccf8ec7f6.jpg'),
  },
  {
    id: 36,
    title: 'Pig Butchering Scams Top Threat to Investors: Crypto Tracing and Asset Recovery',
    date: 'November 21, 2025',
    publishedAt: '2025-11-21',
    image: asset('upload/news/fee52fae29dc266a/9441ab307463638f.jpg'),
  },
]

export const reviews = [
  {
    id: 1,
    initials: 'DP',
    name: "James O'Connell",
    date: 'Jan 14, 2024',
    text: "We were involved in a bitter international arbitration regarding a joint venture gone wrong. Adrian Carios Jackson was our counsel. His arbitration strategy focused on the key arbitrators' profiles and crafted arguments with precision.",
    rating: 5,
  },
  {
    id: 2,
    initials: 'MT',
    name: 'Anil Kapoor',
    date: 'Dec 11, 2023',
    text: 'The firm moved swiftly to obtain injunctive relief and pursued the fraudsters internationally. The team was responsive, tireless, and helped us recover our losses in full.',
    rating: 5,
  },
  {
    id: 3,
    initials: 'JO',
    name: 'Karen Smith',
    date: 'Jun 19, 2024',
    text: 'Hansen L. Wong simplified a complex insolvency dispute and helped facilitate settlement. His reputation and strategic clarity made a real difference.',
    rating: 5,
  },
]

export const awards = Array.from({ length: 15 }, (_, index) =>
  asset(`assets/img/brand/brand-${index + 1}.png`),
)

export const contactInfo = {
  phone: '+1 937-986-8247',
  email: 'support@pacificgatelawfirm.com',
  locations: ['45 Fremont St, San Francisco, CA 94105', 'Safeco Plaza, 1001 4th Ave #4320, Seattle, WA 98154'],
  whatsapp: 'https://wa.me/19379868247',
}

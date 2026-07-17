export const asset = (path) => `/clone-assets/${path}`

export const AVATAR_GRADIENTS = {
  'bg-blue': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'bg-green': 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
  'bg-orange': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'bg-purple': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'bg-red': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'bg-teal': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'bg-indigo': 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'bg-yellow': 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
}

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Asset Recovery', path: '/services/asset-recovery' },
      { label: 'Financial Fraud', path: '/services/financial-fraud' },
      { label: 'Bank Litigation', path: '/services/bank-litigation' },
      { label: 'Cryptocurrency Recovery', path: '/services/cryptocurrency-recovery' },
      { label: 'Bankruptcy and Insolvency', path: '/services/bankruptcy-insolvency' },
      { label: 'Corruption and Proceeds of Crime Recovery', path: '/services/corruption-recovery' },
      { label: "Creditors' Rights", path: '/services/creditors-rights' },
      { label: 'Cross-Border Matrimonial Asset Recovery', path: '/services/cross-border-recovery' },
      { label: 'International Commercial Litigation', path: '/services/international-litigation' },
      { label: 'International Arbitration', path: '/services/international-arbitration' },
    ],
  },
  { label: 'Team', path: '/team' },
  {
    label: 'Insights',
    path: '/insights',
    children: [
      { label: 'Case Studies', path: '/insights' },
      { label: 'Blog', path: '/insights/blog' },
      { label: 'Reviews', path: '/insights/reviews' },
    ],
  },
  { label: 'Contact', path: '/contact' },
]

export const heroSlides = [
  {
    title: 'Pacific Gate Law Firm since 1993',
    copy: 'Pacific Gate Law Firm is a global leader in financial law, handling the most complex and sensitive cross-border matters for multinationals, financial institutions, and private clients. Our specialist lawyers are ranked as being amongst the best globally.',
    image: asset('assets/img/background/banner-v1-bg.jpg'),
  },
  {
    title: 'Asset tracing and recovery litigation defending global rights',
    copy: 'Pacific Gate is a world leader in asset tracing and recovery litigation. Global rapid response in times of crisis. When funds flow overseas through complex networks, we activate our worldwide collaboration to trace and recover your assets.',
    image: asset('assets/img/background/banner-v2-bg.jpg'),
  },
  {
    title: 'Global vision local execution exceptional results',
    copy: 'Pacific Gate Law Firm specializes in financial crime, compliance, and cross-border dispute resolution, serving as your definitive strategic partner against international financial legal risks.',
    image: asset('assets/img/background/banner-v3-bg.jpg'),
  },
]

export const featureCards = [
  ['Satisfied Legal', 'Defense'],
  ['Legal Advice', 'Service'],
  ['High Skilled', 'Lawyer'],
  ['Online Client', 'Support'],
]

export const stats = [
  { value: '935+', label: 'Qualified Lawyers' },
  { value: '326k+', label: 'Successful Cases' },
  { value: '559+', label: 'Global Award win' },
  { value: '722+', label: 'Business Partners' },
]

export const services = [
  {
    id: 'asset-recovery',
    number: '01',
    title: 'Asset Recovery',
    headline: 'Investigating and litigating sophisticated investment and corporate fraud.',
    summary: 'Tracing, freezing, and reclaiming assets across borders.',
    image: asset('assets/img/service/service-details-01.jpg'),
    heroImage: asset('assets/img/background/asset_recovery_bg.jpg'),
  },
  {
    id: 'financial-fraud',
    number: '02',
    title: 'Financial Fraud',
    headline: 'Resolving high-stakes disputes with financial institutions.',
    summary: 'Investigating and litigating complex investment fraud.',
    image: asset('assets/img/service/service-details-02.jpg'),
    heroImage: asset('assets/img/background/financial_fraud_bg.jpg'),
  },
  {
    id: 'bank-litigation',
    number: '03',
    title: 'Bank Litigation',
    headline: 'Protecting clients in loan, enforcement, and fiduciary disputes.',
    summary: 'Resolving high-stakes disputes with financial institutions.',
    image: asset('assets/img/service/service-details-03.jpg'),
    heroImage: asset('assets/img/background/bank_litigation_bg.jpg'),
  },
  {
    id: 'cryptocurrency-recovery',
    number: '04',
    title: 'Cryptocurrency Recovery',
    headline: 'Specialized tracing and recovery of digital assets.',
    summary: 'Blockchain forensics and recovery strategy for digital asset theft.',
    image: asset('assets/img/service/service-details-04.jpg'),
    heroImage: asset('assets/img/background/cryptocurrency_recovery_bg.jpg'),
  },
  {
    id: 'bankruptcy-insolvency',
    number: '05',
    title: 'Bankruptcy & Insolvency',
    headline: 'Coordinated insolvency strategy for creditors and stakeholders.',
    summary: 'Navigating insolvency to maximize creditor returns.',
    image: asset('assets/img/service/service-details-05.jpg'),
    heroImage: asset('assets/img/background/bankruptcy_insolvency_bg.jpg'),
  },
  {
    id: 'corruption-recovery',
    number: '06',
    title: 'Corruption & Asset Recovery',
    headline: 'Pursuing the return of illicit gains through civil recovery.',
    summary: 'Civil recovery and proceeds-of-crime action across jurisdictions.',
    image: asset('assets/img/service/service-details-06.jpg'),
    heroImage: asset('assets/img/background/corruption_recovery_bg.jpg'),
  },
  {
    id: 'creditors-rights',
    number: '07',
    title: "Creditors' Rights",
    headline: 'Aggressively enforcing and protecting creditor interests.',
    summary: 'Enforcement, priority disputes, and international collection strategy.',
    image: asset('assets/img/service/service-details-07.jpg'),
    heroImage: asset('assets/img/background/creditors_rights_bg.jpg'),
  },
  {
    id: 'cross-border-recovery',
    number: '08',
    title: 'Cross-Border Asset Recovery',
    headline: 'Securing marital or commercial assets in international disputes.',
    summary: 'Recovery planning for assets hidden through global structures.',
    image: asset('assets/img/service/service-details-08.jpg'),
    heroImage: asset('assets/img/background/matrimonial_asset_bg.jpg'),
  },
  {
    id: 'international-litigation',
    number: '09',
    title: 'International Litigation',
    headline: 'Advocating in complex cross-border business disputes.',
    summary: 'Forum strategy, emergency relief, and coordinated litigation.',
    image: asset('assets/img/service/service-details-09.jpg'),
    heroImage: asset('assets/img/background/international_litigation_bg.jpg'),
  },
  {
    id: 'international-arbitration',
    number: '10',
    title: 'International Arbitration',
    headline: 'Securing enforceable awards in global arbitral forums.',
    summary: 'Arbitration strategy for major commercial and investment disputes.',
    image: asset('assets/img/service/service-details-10.jpg'),
    heroImage: asset('assets/img/background/international_arbitration_bg.jpg'),
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
].map(([name, role, image]) => ({ name, role, image: asset(image) }))

export const reviews = [
  {
    initials: 'JC',
    colorClass: 'bg-indigo',
    name: 'John Carter',
    date: 'Oct 15, 2023',
    text: "After my business partner absconded with company funds to an offshore account, I thought all was lost. Pacific Gate Law Firm, specifically Martin Careaga Munoz, took on our incredibly complex international asset recovery case. His grasp of cross-border financial law is phenomenal. He coordinated with investigators and foreign counsel seamlessly. It was a long fight, but we recovered a significant portion. Martin is a strategic thinker and a tenacious advocate. A+++",
  },
  {
    initials: 'SJ',
    colorClass: 'bg-green',
    name: 'Sarah Jenkins',
    date: 'May 22, 2024',
    text: "Dealing with a fraudulent cryptocurrency investment scheme was devastating. I contacted several firms who said it was impossible to trace. Paul Wei-Jye Chen at Pacific Gate was the only one who didn't flinch. His knowledge of blockchain forensics and recovery pathways is cutting-edge. He set realistic expectations but fought relentlessly. We managed to freeze and recover a substantial amount. Paul is a pioneer in this field.",
  },
  {
    initials: 'RF',
    colorClass: 'bg-green',
    name: 'Robert Fitz',
    date: 'Nov 30, 2021',
    text: "Our company was the victim of a sophisticated financial fraud involving shell companies across three jurisdictions. The team at Pacific Gate, led by Hansen L. Wong, was outstanding. Hansen's strategic approach to untangling the corporate web and initiating simultaneous litigation in multiple forums was impressive. His calm demeanor under pressure kept us sane. We successfully pierced the corporate veil and secured a favorable judgment.",
  },
  {
    initials: 'ER',
    colorClass: 'bg-red',
    name: 'Elena Rodriguez',
    date: 'Feb 10, 2024',
    text: "I needed help with a cross-border matrimonial asset recovery case. My ex-husband had hidden assets in Asia. Paul Y. Liu handled my case with both legal precision and personal sensitivity. He understood the emotional toll and was always transparent. His network of contacts and understanding of both U.S. and Asian legal systems were invaluable. We located and secured assets I didn't even know existed.",
  },
  {
    initials: 'DP',
    colorClass: 'bg-red',
    name: 'David Park',
    date: 'Jul 8, 2024',
    text: "As a creditor in a complex bankruptcy proceeding, I felt lost and powerless. Dabid W. Liao from Pacific Gate represented our interests. He has a deep understanding of creditors' rights and bankruptcy codes. His negotiations with the trustee and other creditors were masterful. We achieved a recovery rate far higher than initially projected. Dabid is sharp, aggressive when needed, and highly effective.",
  },
  {
    initials: 'MT',
    colorClass: 'bg-orange',
    name: 'Michelle Thompson',
    date: 'Sep 5, 2023',
    text: 'Facing litigation from an overseas bank was daunting. Davis L. Kim represented our firm. His expertise in international commercial litigation and banking regulations is top-tier. He prepared exhaustive legal briefs and his courtroom presentation was compelling. He turned a defensive case into a successful counterclaim. I highly recommend Davis for any high-stakes financial litigation.',
  },
  {
    initials: 'JO',
    colorClass: 'bg-red',
    name: "James O'Connell",
    date: 'Jan 14, 2024',
    text: "We were involved in a bitter international arbitration regarding a joint venture gone wrong. Adrian Carios Jackson was our counsel. Adrian's arbitration strategy was brilliant – he focused on the key arbitrators' profiles and crafted arguments that resonated. His cross-examination of expert witnesses was devastatingly effective. We won the arbitration and were awarded costs. A superlative performance.",
  },
  {
    initials: 'LZ',
    colorClass: 'bg-green',
    name: 'Linda Zhao',
    date: 'Aug 30, 2024',
    text: 'Qinlei Wang assisted us with a sensitive matter involving potential proceeds of crime linked to a contractor. Qinlei was meticulous, ethical, and incredibly knowledgeable about anti-corruption and asset forfeiture laws. She guided us through the self-reporting and cooperation process with authorities, minimizing our exposure and allowing for the lawful recovery of funds. Professional and trustworthy.',
  },
  {
    initials: 'AK',
    colorClass: 'bg-teal',
    name: 'Anil Kapoor',
    date: 'Dec 11, 2023',
    text: 'Our company was defrauded by a supplier using forged letters of credit. Neeraj Kumar took our case. His background in both banking and litigation made him the perfect choice. He moved swiftly to obtain injunctive relief against the banks and pursued the fraudsters internationally. Neeraj is responsive, works tirelessly, and gets results. We recovered our losses in full.',
  },
  {
    initials: 'KS',
    colorClass: 'bg-red',
    name: 'Karen Smith',
    date: 'Jun 19, 2024',
    text: 'Hansen L. Wong represented us in a second matter, this time involving insolvency and creditor disputes. Once again, his performance was stellar. He has an uncanny ability to simplify complex financial situations for the judge. His reputation in the legal community itself commands respect, which often facilitates settlements. Pacific Gate is lucky to have him.',
  },
  {
    initials: 'TW',
    colorClass: 'bg-indigo',
    name: 'Thomas Wright',
    date: 'Mar 3, 2024',
    text: "I consulted with Michalle Antionette Thompson-DaCosta regarding a complex inheritance case with international assets potentially tied to historical corruption. Michalle's analysis was thorough and her advice was strategic and honest. She helped us structure an approach that balanced ethical recovery with legal pragmatism. Her integrity is as solid as her legal acumen.",
  },
  {
    initials: 'BO',
    colorClass: 'bg-orange',
    name: 'Business Owner',
    date: 'Apr 17, 2024',
    text: 'Left a 5-star rating. Exceptional service in asset recovery.',
  },
  {
    initials: 'CI',
    colorClass: 'bg-purple',
    name: 'Crypto Investor',
    date: 'Sep 21, 2024',
    text: 'Left a 5-star rating. Paul Chen is a wizard with crypto recovery.',
  },
  {
    initials: 'WM',
    colorClass: 'bg-green',
    name: 'Wai Man To',
    date: 'Aug 8, 2023',
    text: 'When our debtor filed for bankruptcy in another country, we thought our loan was lost. Martin Careaga Munoz navigated the cross-border insolvency protocols expertly. His filing in the ancillary proceeding here was flawless. We established priority and are now seeing distributions. Martin is a strategic asset.',
  },
  {
    initials: 'JH',
    colorClass: 'bg-green',
    name: 'Julia Hayes',
    date: 'Oct 30, 2024',
    text: "Going through a divorce with international business holdings was a nightmare. Paul Y. Liu was recommended to me. He worked tirelessly to trace, value, and secure my share of global assets. His ability to work with forensic accountants and his firm's international reach made all the difference. He was my steadfast advocate in a very difficult time.",
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

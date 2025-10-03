export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'クリスハヤト',
    alternateName: 'Chris Hayato',
    description:
      'ITエンジニア出身の動画編集者。技術的信頼性と論理的思考力で、ビジネス系・エンタメ系・Vlog系のショート動画を制作。',
    jobTitle: '動画編集者',
    url: 'https://chris-hayato-portfolio.vercel.app',
    image: 'https://chris-hayato-portfolio.vercel.app/og-image.png',
    sameAs: [
      'https://www.tiktok.com/@chris_hayato',
      'https://www.instagram.com/chris_hayato',
    ],
    knowsAbout: [
      '動画編集',
      'Adobe Premiere Pro',
      'Adobe Photoshop',
      'ショート動画制作',
      'ビジネス動画',
      'エンタメ動画',
      'Vlog',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: '動画編集者',
      occupationLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressRegion: '神奈川県',
          addressCountry: 'JP',
        },
      },
      skills: 'Adobe Premiere Pro, Adobe Photoshop, 動画編集, ショート動画制作',
    },
    workExample: [
      {
        '@type': 'CreativeWork',
        name: 'ビジネス系動画ポートフォリオ',
        description: 'ビジネス向けショート動画の編集実績',
        url: 'https://chris-hayato-portfolio.vercel.app#portfolio',
      },
      {
        '@type': 'CreativeWork',
        name: 'エンタメ系動画ポートフォリオ',
        description: 'エンターテインメント向けショート動画の編集実績',
        url: 'https://chris-hayato-portfolio.vercel.app#portfolio',
      },
      {
        '@type': 'CreativeWork',
        name: 'Vlog系動画ポートフォリオ',
        description: 'Vlog向けショート動画の編集実績',
        url: 'https://chris-hayato-portfolio.vercel.app#portfolio',
      },
    ],
    email: 'Krice4765104@gmail.com',
    birthDate: '1995',
    birthPlace: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: '埼玉県',
        addressCountry: 'JP',
      },
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: '普通科高校',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'フリーランス動画編集者',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

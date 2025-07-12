import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultSEO = {
  title: "ChessMeet - Rencontrez des joueurs d'échecs près de chez vous",
  description:
    "ChessMeet connecte les passionnés d'échecs pour des parties en personne. Découvrez des événements, tournois et joueurs près de chez vous. Rejoignez la communauté d'échecs locale !",
  keywords:
    "échecs, chess, rencontre, tournoi, communauté, joueurs, parties, événements, clubs échecs, FFE",
  image: "https://chessmeet.fr/og-image.jpg",
  url: "https://chessmeet.fr",
  type: "website",
};

export function SEO({ title, description, keywords, image, url, type = "website" }: SEOProps) {
  const seo = {
    title: title ? `${title} | ChessMeet` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type,
  };

  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#D4A574" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="ChessMeet" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Langue */}
      <html lang="fr" />

      {/* Favicons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Manifest pour PWA */}
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
}

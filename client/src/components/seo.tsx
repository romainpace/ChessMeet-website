import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  twitterSite?: string; // e.g. @votreCompte
}

const defaultSEO = {
  title: "ChessMeet - Rencontrez des joueurs d'échecs près de chez vous",
  description:
    "ChessMeet connecte les passionnés d'échecs pour des parties en personne. Découvrez des événements, tournois et joueurs près de chez vous. Rejoignez la communauté d'échecs locale !",
  image: "https://chessmeet.fr/og-image.jpg",
  url: "https://chessmeet.fr",
  type: "website" as const,
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

export function SEO({
  title,
  description,
  image,
  url,
  type = "website",
  ogImageWidth,
  ogImageHeight,
  twitterSite,
}: SEOProps) {
  const seo = {
    title: title ? `${title} | ChessMeet` : defaultSEO.title,
    description: description || defaultSEO.description,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type,
    ogImageWidth: ogImageWidth || defaultSEO.ogImageWidth,
    ogImageHeight: ogImageHeight || defaultSEO.ogImageHeight,
    twitterSite,
  };

  return (
    <Helmet htmlAttributes={{ lang: "fr" }}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#D4A574" />

      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content={String(seo.ogImageWidth)} />
      <meta property="og:image:height" content={String(seo.ogImageHeight)} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="ChessMeet" />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {seo.twitterSite ? <meta name="twitter:site" content={seo.twitterSite} /> : null}

      <link rel="canonical" href={seo.url} />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
}

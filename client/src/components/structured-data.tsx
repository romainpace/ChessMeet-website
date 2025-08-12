import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: "Organization" | "WebApplication" | "FAQPage" | "WebSite";
  data?: any;
}

export function StructuredData({ type = "Organization", data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ChessMeet",
          url: "https://chessmeet.fr",
          logo: "https://chessmeet.fr/logo.png",
          description: "ChessMeet connecte les passionnés d'échecs pour des parties en personne.",
          contactPoint: {
            "@type": "ContactPoint",
            email: "contact@chessmeet.fr",
            contactType: "customer support",
            availableLanguage: "French",
          },
          sameAs: [
            "https://x.com/chessmeet_app",
            "https://www.instagram.com/chessmeet_app/",
            "https://www.youtube.com/@chessmeet_app",
            "https://www.tiktok.com/@chessmeet_app"
          ],
        };

      case "WebApplication":
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "ChessMeet",
          applicationCategory: "SportsApplication",
          applicationSubCategory: "Chess",
          operatingSystem: "iOS, Android",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "523",
          },
          description: "Application mobile pour rencontrer des joueurs d'échecs près de chez vous",
          screenshot: [
            "https://chessmeet.fr/screenshot1.jpg",
            "https://chessmeet.fr/screenshot2.jpg",
            "https://chessmeet.fr/screenshot3.jpg",
          ],
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ChessMeet",
          url: "https://chessmeet.fr",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://chessmeet.fr/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        };

      case "FAQPage":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Comment fonctionne ChessMeet ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ChessMeet est une application qui connecte les joueurs d'échecs pour des parties en personne. Vous pouvez découvrir des événements, rejoindre des parties et rencontrer d'autres passionnés près de chez vous.",
              },
            },
            {
              "@type": "Question",
              name: "L'application ChessMeet est-elle gratuite ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, ChessMeet est entièrement gratuite. Vous pouvez télécharger l'application et accéder à toutes les fonctionnalités sans frais.",
              },
            },
            {
              "@type": "Question",
              name: "Sur quelles plateformes ChessMeet est-elle disponible ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ChessMeet est disponible sur iOS (App Store) et Android (Google Play Store).",
              },
            },
          ],
        };

      default:
        return data || {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

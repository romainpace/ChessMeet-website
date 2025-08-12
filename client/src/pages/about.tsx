import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/seo";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="À propos"
        description="Découvrez la mission et l'équipe derrière ChessMeet, l'application qui connecte les joueurs d'échecs en France."
        url="https://chessmeet.fr/a-propos"
      />
      <Header />
      <main className="pt-28 pb-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">À propos de ChessMeet</h1>
          </div>
          <Card>
            <CardContent className="p-8 space-y-6">
              <p className="text-foreground/80">
                ChessMeet facilite les rencontres en vrai entre passionnés d'échecs. Notre mission est de rendre
                plus simple la découverte d'adversaires, de clubs et d'événements près de chez vous.
              </p>
              <p className="text-foreground/80">
                Le projet est né d'une envie: transformer une passion souvent solitaire en une expérience sociale et locale.
                Nous travaillons à construire un réseau de joueurs, d'organisateurs et de lieux de jeu.
              </p>
              <p className="text-foreground/80">
                Vous pouvez nous contacter à <a href="mailto:contact@chessmeet.fr" className="text-primary">contact@chessmeet.fr</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}



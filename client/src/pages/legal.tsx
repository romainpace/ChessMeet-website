import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/seo";

export default function Legal() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Mentions légales"
        description="Mentions légales du site ChessMeet."
        url="https://chessmeet.fr/mentions-legales"
      />
      <Header />
      <main className="pt-28 pb-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Mentions légales</h1>
          </div>
          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-2">Éditeur</h2>
                <p className="text-foreground/80">
                  ChessMeet — Contact: <a href="mailto:contact@chessmeet.fr" className="text-primary">contact@chessmeet.fr</a>
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
                <p className="text-foreground/80">
                  Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA — <a href="https://vercel.com" className="text-primary" target="_blank" rel="noreferrer noopener">vercel.com</a>
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
                <p className="text-foreground/80">
                  Tous les contenus présents sur ce site sont protégés. Toute reproduction est soumise à autorisation.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}



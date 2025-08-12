import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Mail } from "lucide-react";
import { SEO } from "@/components/seo";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Support"
        description="Besoin d'aide ? Contactez l'équipe ChessMeet pour toute question ou support."
        url="https://chessmeet.fr/support"
      />
      <Header />
      <main className="pt-28 pb-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-primary" />
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Contactez-nous
                </h1>

                <p className="text-lg text-foreground/70 mb-8 max-w-lg mx-auto">
                  Si vous rencontrez des problèmes avec ChessMeet ou si vous avez des questions,
                  n'hésitez pas à nous contacter.
                </p>

                <a
                  href="mailto:contact@chessmeet.fr"
                  className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  contact@chessmeet.fr
                </a>

                <p className="text-sm text-foreground/60 mt-4 mb-8">
                  Nous vous répondrons dans les plus brefs délais
                </p>

                <div className="pt-6 border-t border-foreground/10">
                  <Link href="/" className="text-primary hover:text-foreground transition-colors">
                    Retour à l'accueil
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

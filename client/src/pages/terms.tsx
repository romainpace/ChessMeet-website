import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-28 pb-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Conditions Générales d'Utilisation
              </h1>
            </div>

            <Card>
              <CardContent className="p-8">
                <p className="text-foreground/80 mb-8">Dernière mise à jour : 12 juillet 2025</p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptation</h2>
                    <p className="text-foreground/70 mb-4">
                      En utilisant ChessMeet, vous acceptez ces conditions. 
                      <br />
                    
                      Si vous avez des questions ou des réserves, n'hésitez pas à nous contacter avant de commencer.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Le service</h2>
                    <p className="text-foreground/70 mb-4">ChessMeet permet de :</p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>Trouver des événements d'échecs près de vous</li>
                      <li>Organiser des parties</li>
                      <li>Échanger avec d'autres joueurs</li>
                      <li>Découvrir des lieux de jeu</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      3. Vos engagements
                    </h2>
                    <p className="text-foreground/70 mb-4">Vous devez :</p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>Être respectueux envers les autres utilisateurs</li>
                      <li>Ne pas publier de contenu illégal ou offensant</li>
                      <li>Respecter les droits d'auteur</li>
                      <li>Avoir au moins 15 ans</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      4. Ce qui est interdit
                    </h2>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>Harcèlement ou menaces</li>
                      <li>Faux profils</li>
                      <li>Spam ou publicité</li>
                      <li>Contenu discriminatoire</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      5. Votre contenu
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      Vous restez propriétaire de votre contenu (photos, messages). <br />En le publiant,
                      vous nous autorisez à l'afficher dans l'application.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      6. Responsabilités
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      ChessMeet met en relation des joueurs mais n'est pas responsable :
                    </p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>De vos rencontres avec d'autres utilisateurs</li>
                      <li>Des événements organisés par les utilisateurs</li>
                      <li>Des interruptions de service</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Suspension</h2>
                    <p className="text-foreground/70 mb-4">
                      Nous pouvons suspendre votre compte si vous ne respectez pas ces règles.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      8. Modifications
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      Nous pouvons modifier ces conditions. Nous vous informerons des changements
                      importants.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">9. Litiges</h2>
                    <p className="text-foreground/70">
                      En cas de problème, contactez-nous d'abord :{" "}
                      <a
                        href="mailto:contact@chessmeet.fr"
                        className="text-primary hover:text-foreground transition-colors"
                      >
                        contact@chessmeet.fr
                      </a>
                      <br />
                      Droit applicable : France
                    </p>
                  </section>
                </div>

                <div className="mt-8 pt-6 border-t border-foreground/10 text-center">
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

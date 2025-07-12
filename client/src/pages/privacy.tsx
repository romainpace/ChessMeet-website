import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { SEO } from "@/components/seo";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Politique de Confidentialité"
        description="Découvrez comment ChessMeet protège vos données personnelles et respecte votre vie privée."
        url="https://chessmeet.fr/confidentialite"
      />
      <Header />
      <main className="pt-28 pb-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Politique de Confidentialité
              </h1>
            </div>

            <Card>
              <CardContent className="p-8">
                <p className="text-foreground/80 mb-8">Dernière mise à jour : 12 juillet 2025</p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      1. Responsable du traitement
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      ChessMeet
                      <br />
                      Email :{" "}
                      <a
                        href="mailto:contact@chessmeet.fr"
                        className="text-primary hover:text-foreground transition-colors"
                      >
                        contact@chessmeet.fr
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      2. Données collectées
                    </h2>
                    <p className="text-foreground/70 mb-4">Nous collectons :</p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>
                        <strong>Données de compte</strong> : email, pseudo, mot de passe (chiffré)
                      </li>
                      <li>
                        <strong>Profil</strong> : ville, niveau d'échecs, photo (optionnelle)
                      </li>
                      <li>
                        <strong>Localisation</strong> : pour afficher les événements proches (avec
                        permission)
                      </li>
                      <li>
                        <strong>Messages</strong> : échangés dans les chats d'événements
                      </li>
                      <li>
                        <strong>Données techniques</strong> : type d'appareil, version app
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      3. Pourquoi nous collectons vos données
                    </h2>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>Vous permettre d'utiliser l'application</li>
                      <li>Vous connecter avec d'autres joueurs</li>
                      <li>Afficher les événements près de vous</li>
                      <li>Assurer la sécurité du service</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      4. Partage des données
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      Nous ne vendons jamais vos données. Nous les partageons uniquement avec :
                    </p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>
                        <strong>Autres utilisateurs</strong> : votre profil public (pseudo, ville,
                        niveau)
                      </li>
                      <li>
                        <strong>Nos prestataires techniques</strong> : Supabase (hébergement)
                      </li>
                      <li>
                        <strong>Autorités</strong> : si la loi l'exige
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Vos droits</h2>
                    <p className="text-foreground/70 mb-4">Vous pouvez :</p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>Accéder à vos données</li>
                      <li>Les corriger ou supprimer</li>
                      <li>Vous opposer à leur traitement</li>
                      <li>Les récupérer (portabilité)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      6. Conservation des données
                    </h2>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>Compte actif : données conservées</li>
                      <li>Compte supprimé : effacement sous 30 jours</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Sécurité</h2>
                    <p className="text-foreground/70 mb-4">Nous protégeons vos données par :</p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                      <li>Chiffrement des mots de passe</li>
                      <li>Connexions sécurisées</li>
                      <li>Accès restreints</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Mineurs</h2>
                    <p className="text-foreground/70 mb-4">
                      Application interdite aux moins de 15 ans.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      9. Modifications
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      Nous vous informerons de tout changement important.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      10. Contact et réclamations
                    </h2>
                    <p className="text-foreground/70">
                      Questions :{" "}
                      <a
                        href="mailto:contact@chessmeet.fr"
                        className="text-primary hover:text-foreground transition-colors"
                      >
                        contact@chessmeet.fr
                      </a>
                      <br />
                      Réclamation : vous pouvez contacter la CNIL (
                      <a
                        href="https://www.cnil.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-foreground transition-colors"
                      >
                        www.cnil.fr
                      </a>
                      )
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

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Calendar, MessageCircle, Trophy, Coffee, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Carte interactive",
    description: "Visualisez d'un coup d'œil où jouer autour de vous",
  },
  {
    icon: Calendar,
    title: "Événements communautaires",
    description: "Organisez ou participez à des parties dans votre quartier",
  },
  {
    icon: MessageCircle,
    title: "Chat intégré",
    description: "Communiquez directement avec les autres joueurs",
  },
  {
    icon: Trophy,
    title: "Annuaire des tournois",
    description: "Ne ratez plus aucun tournoi : calendrier complet FFE + événements locaux",
  },
  {
    icon: Coffee,
    title: "Lieux de jeu",
    description: "Tous les spots d'échecs référencés près de chez vous",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Trouvez votre tribu : des adversaires à votre niveau, des amis pour progresser",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl xs:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Tout pour vivre les échecs en vrai
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto px-4">
            ChessMeet transforme votre passion solitaire en aventure collective. Trouvez des
            adversaires, rejoignez des tournois et découvrez LA communauté d'échecs près de chez
            vous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                data-testid="feature-card"
                className="h-full border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2 hover:border-primary/40 overflow-hidden"
              >
                <CardContent className="p-6 xs:p-8 text-center">
                  <div className="w-16 h-16 xs:w-20 xs:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 xs:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <feature.icon className="w-8 h-8 xs:w-10 xs:h-10 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg xs:text-xl font-bold text-foreground mb-3 xs:mb-4">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm xs:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

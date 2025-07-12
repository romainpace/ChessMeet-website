import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FeaturesSection from "../features-section";

describe("FeaturesSection", () => {
  it("renders the section title", () => {
    render(<FeaturesSection />);
    expect(screen.getByText("Tout pour vivre les échecs en vrai")).toBeInTheDocument();
  });

  it("renders all 6 feature cards", () => {
    render(<FeaturesSection />);

    const features = [
      "Carte interactive",
      "Événements communautaires",
      "Chat intégré",
      "Annuaire des tournois",
      "Lieux de jeu",
      "Communauté",
    ];

    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it("renders feature descriptions", () => {
    render(<FeaturesSection />);

    expect(screen.getByText(/Visualisez d'un coup d'œil où jouer/)).toBeInTheDocument();
    expect(screen.getByText(/Organisez ou participez à des parties/)).toBeInTheDocument();
    expect(screen.getByText(/Communiquez directement avec les autres joueurs/)).toBeInTheDocument();
  });

  it("applies correct styling to feature cards", () => {
    render(<FeaturesSection />);

    const cards = screen.getAllByTestId("feature-card");
    expect(cards).toHaveLength(6);

    cards.forEach((card) => {
      expect(card).toHaveClass("group");
    });
  });
});

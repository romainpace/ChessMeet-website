import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "../hero-section";

describe("HeroSection", () => {
  it("renders the main title", () => {
    render(<HeroSection />);
    expect(screen.getByText("ChessMeet")).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<HeroSection />);
    expect(screen.getByText("Passez de l'écran à l'échiquier")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<HeroSection />);
    expect(screen.getByText(/ChessMeet connecte les/)).toBeInTheDocument();
  });

  it("renders App Store and Google Play buttons", () => {
    render(<HeroSection />);
    expect(screen.getByText("App Store")).toBeInTheDocument();
    expect(screen.getByText("Google Play")).toBeInTheDocument();
  });

  it('renders the "Bientôt" badge', () => {
    render(<HeroSection />);
    expect(screen.getByText("Bientôt")).toBeInTheDocument();
  });

  it("renders the chess knight logo", () => {
    render(<HeroSection />);
    const logo = screen.getByAltText("Chess Knight Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("w-20", "h-20");
  });
});

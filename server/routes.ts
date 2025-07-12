import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // You can add more API routes here if needed
  // Example: app.get('/api/contact', contactHandler);

  const httpServer = createServer(app);

  return httpServer;
}

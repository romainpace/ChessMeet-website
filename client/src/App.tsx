import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

// Eager load home page for better performance
import Home from "@/pages/home";

// Lazy load other routes
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Support = lazy(() => import("@/pages/support"));
const About = lazy(() => import("@/pages/about"));
const Legal = lazy(() => import("@/pages/legal"));
const BlogIndex = lazy(() => import("@/pages/blog-index"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Loading component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-chessmeet-accent"></div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/confidentialite" component={Privacy} />
        <Route path="/cgu" component={Terms} />
        <Route path="/support" component={Support} />
        <Route path="/a-propos" component={About} />
        <Route path="/mentions-legales" component={Legal} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

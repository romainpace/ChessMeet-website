import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/seo";
import { useEffect, useState } from "react";

interface PostSummary {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags?: string[];
  cover?: string;
}

export default function BlogIndex() {
  const [posts, setPosts] = useState<PostSummary[]>([]);

  useEffect(() => {
    fetch("/posts.manifest.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .catch(() => setPosts([]));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blog"
        description="Guides, actualités et conseils pour jouer aux échecs près de chez vous."
        url="https://chessmeet.fr/blog"
      />
      <Header />
      <main className="pt-28 pb-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Le blog ChessMeet</h1>
            <p className="text-foreground/70 mt-2">
              Guides, actualités et conseils pour vivre les échecs en vrai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {post.cover ? (
                      <img
                        src={post.cover}
                        alt=""
                        className="w-full h-48 object-cover rounded mb-4"
                        loading="lazy"
                      />
                    ) : null}
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-foreground/70 mb-2">{post.description}</p>
                    <p className="text-xs text-foreground/50">{new Date(post.date).toLocaleDateString("fr-FR")}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}



import Header from "@/components/header";
import Footer from "@/components/footer";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { useEffect, useState } from "react";
import { useRoute } from "wouter";

interface PostData {
  title: string;
  description: string;
  html: string;
  slug: string;
  date: string;
  cover?: string;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    fetch(`/blog/${slug}/post.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setPost(data))
      .catch(() => setPost(null));
  }, [slug]);

  if (!post) return null;

  const canonical = `https://chessmeet.fr/blog/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: post.cover ? [`https://chessmeet.fr${post.cover}`] : undefined,
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: "ChessMeet",
      url: "https://chessmeet.fr"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={post.title} description={post.description} url={canonical} />
      <StructuredData type="Organization" />
      <Header />
      <main className="pt-28 pb-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {post.cover ? (
            <img src={post.cover} alt="" className="w-full h-64 object-cover rounded mb-6" loading="lazy" />
          ) : null}
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{post.title}</h1>
          <p className="text-sm text-foreground/60 mb-8">{new Date(post.date).toLocaleDateString("fr-FR")}</p>
          <article className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </div>
  );
}



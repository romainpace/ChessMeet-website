import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Extract filename from path
  const getOptimizedPath = (originalPath: string) => {
    const filename = originalPath.split("/").pop()?.split(".")[0];
    return {
      webp: `/images/${filename}.webp`,
      jpg: `/images/${filename}-optimized.jpg`,
      original: originalPath,
    };
  };

  const paths = getOptimizedPath(src);

  // If we need lazy loading, wrap in a div for intersection observer
  if (!priority) {
    return (
      <div ref={containerRef} className={className} style={{ width, height }}>
        {isInView && (
          <picture>
            <source srcSet={paths.webp} type="image/webp" />
            <source srcSet={paths.jpg} type="image/jpeg" />
            <img
              ref={imgRef}
              src={paths.original}
              alt={alt}
              width={width}
              height={height}
              onLoad={() => setIsLoaded(true)}
              className={cn(
                className,
                "transition-opacity duration-300",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </picture>
        )}
      </div>
    );
  }

  // For priority images, render directly without wrapper
  return (
    <picture>
      <source srcSet={paths.webp} type="image/webp" />
      <source srcSet={paths.jpg} type="image/jpeg" />
      <img
        ref={imgRef}
        src={paths.original}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          className,
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
    </picture>
  );
}

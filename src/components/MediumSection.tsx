import { useState, useEffect } from "react";
import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface MediumSectionProps {
  contentLoaded: boolean;
}

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  author: string;
  categories: string[];
}

interface ArticleCard {
  title: string;
  description: string;
  date: string;
  url: string;
}

export default function MediumSection({ contentLoaded }: MediumSectionProps) {
  const [articles, setArticles] = useState<ArticleCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Ayer";
    if (diffDays < 30) return `Hace ${diffDays} días`;
    
    return date.toLocaleDateString('es-ES', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  useEffect(() => {
    const truncateDescription = (text: string, maxLength: number = 120) => {
      const cleanText = stripHtml(text);
      if (cleanText.length <= maxLength) return cleanText;
      return cleanText.substring(0, maxLength).trim() + "...";
    };

    const fetchMediumPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Replace with your actual Medium username
        const username = 'roberzet';
        const rssUrl = `https://medium.com/feed/@${username}`;
        const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rssUrl);

        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
          throw new Error('Error al obtener los posts de Medium');
        }
        
        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('Error en el feed RSS');
        }

        // Transform the first 3 posts to match our interface
        const transformedArticles: ArticleCard[] = data.items.slice(0, 3).map((post: MediumPost) => ({
          title: post.title,
          description: truncateDescription(post.description || post.content),
          date: formatDate(post.pubDate),
          url: post.link
        }));

        setArticles(transformedArticles);
      } catch (err) {
        console.error('Error fetching Medium posts:', err);
        setError('Error al cargar los posts de Medium');
        
        // Fallback to original hardcoded articles if fetch fails
        const fallbackArticles: ArticleCard[] = [
          {
            title: "How to Think Like a Tech Lead: Shift Your Mindset from Code to Leader",
            description: "Learn how to think like a tech lead and level up your software engineering career. Build the mindset, skills, and lead...",
            date: "7 Jun",
            url: "https://medium.com/@roberzet/how-to-think-like-a-tech-lead-shift-your-mindset-from-coder-to-leader-1a0255ef5d32"
          },
          {
            title: "How AI Is Changing the Work of Software Engineers (And Why You Should Embrace It Now)",
            description: "How I use AI daily to write better code, save time, and stay sharp as a developer and tech lead. Continue reading on Medium »",
            date: "31 May",
            url: "https://medium.com/@roberzet/how-ai-is-changing-the-work-of-software-engineers-and-why-you-should-embrace-it-now-9013bf7b802f"
          },
          {
            title: "Cómo la IA está cambiando el trabajo del ingeniero de software (y por qué deberías aprovecharlo ya)",
            description: "No es el fin del coding, es el inicio de una nueva forma de programar con IA. Continue reading on Medium »",
            date: "28 May",
            url: "https://medium.com/@roberzet/cómo-la-ia-está-cambiando-el-trabajo-del-ingeniero-de-software-y-por-qué-deberías-aprovecharlo-ya-603ae631ddbc"
          }
        ];
        setArticles(fallbackArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Lee a Roberto Franco <span className="text-gray-600">en Medium</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Revisa mis últimas ideas y consejos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 animate-pulse">
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-6 w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-32">
      <div 
        className={`text-center mb-12 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
        style={getAnimationDelay(0.4)}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Lee a Roberto Franco <span className="text-gray-600">en Medium</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Revisa mis últimas ideas y consejos
        </p>
        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error} - Mostrando artículos en caché
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
            style={getAnimationDelay(0.5 + index * 0.1)}
            onClick={() => window.open(article.url, '_blank')}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight group-hover:text-[#ff4d6d] transition-colors duration-300">
              {article.title}
            </h3>
            
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              {article.description}
            </p>
            
            <div className="text-gray-500 text-sm font-medium">
              {article.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
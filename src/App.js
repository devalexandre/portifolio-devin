import React, { useState, useEffect, useRef } from 'react';
import bannerImage from './banner-image.png'; // Updated to use the correct banner image

// Custom hook for fade-in effect on scroll
const useFadeInOnScroll = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

function App() {
  const [fadeInRef, isVisible] = useFadeInOnScroll();

  const youtubeVideos = [
    {
      id: '1',
      title: 'Enhancing PDF Analysis with RAG and LangChainGO',
      thumbnail: 'https://img.youtube.com/vi/MPJpAx60p5w/0.jpg',
      url: 'https://www.youtube.com/watch?v=MPJpAx60p5w'
    },
    {
      id: '2',
      title: 'Nats UI with Fyne - Golang',
      thumbnail: 'https://img.youtube.com/vi/R36nSTVMLA4/0.jpg',
      url: 'https://www.youtube.com/watch?v=R36nSTVMLA4'
    },
    {
      id: '3',
      title: 'ZED IDE linux e Mac',
      thumbnail: 'https://img.youtube.com/vi/PzwRghvW7Ys/0.jpg',
      url: 'https://www.youtube.com/watch?v=PzwRghvW7Ys'
    },
    {
      id: '4',
      title: 'How use Golang with Langflow',
      thumbnail: 'https://img.youtube.com/vi/rnNqA4tDi-0/0.jpg',
      url: 'https://www.youtube.com/watch?v=rnNqA4tDi-0'
    },
    {
      id: '5',
      title: 'Using Langflow with Qdrant Vector Store',
      thumbnail: 'https://img.youtube.com/vi/blfWz8c2398/0.jpg',
      url: 'https://www.youtube.com/watch?v=blfWz8c2398'
    },
    {
      id: '6',
      title: 'Criando sua Propria Assistente Com AI',
      thumbnail: 'https://img.youtube.com/vi/DD3oOCrDDks/0.jpg',
      url: 'https://www.youtube.com/watch?v=DD3oOCrDDks'
    },
    {
      id: '7',
      title: 'LingmoUI Um linux like Macos',
      thumbnail: 'https://img.youtube.com/vi/9c9a0LqkGCI/0.jpg',
      url: 'https://www.youtube.com/watch?v=9c9a0LqkGCI'
    }
  ];

  const mediumArticles = [
    {
      id: '1',
      title: 'Building a ChatGPT Replica with Fyne in Go',
      thumbnail: '/images/chatgpt-replica-1.png',
      url: 'https://devevangelista.medium.com/building-a-chatgpt-replica-with-fyne-in-go-5d35fea1c4aa'
    },
    {
      id: '2',
      title: 'Using Encore with Ksql and Cockroachdb',
      thumbnail: '/images/encore-ksql-cockroachdb-1.png',
      url: 'https://devevangelista.medium.com/using-encore-with-ksql-and-cockroachdb-3db35743c0b6'
    },
    {
      id: '3',
      title: 'NLP with Golang and Cybertron',
      thumbnail: '/images/nlp-golang-cybertron-1.png',
      url: 'https://devevangelista.medium.com/nlp-with-golang-and-cybertron-5dd9560b84db'
    },
    {
      id: '4',
      title: 'Using Gorilla/http for request',
      thumbnail: '/images/gorilla-http-request-1.png',
      url: 'https://devevangelista.medium.com/using-gorilla-http-for-request-e590c5dc7083'
    },
    {
      id: '5',
      title: 'Exploring the Universe of LangchainGo with Hugging Face',
      thumbnail: '/images/langchaingo-huggingface-1.png',
      url: 'https://devevangelista.medium.com/exploring-the-universe-of-langchaingo-with-hugging-face-a-go-adventure-448ad7bdff84'
    },
    {
      id: '6',
      title: 'Introducing the Spectacular New Feature of Pipe Library v0.0.2-beta',
      thumbnail: '/images/pipe-library-feature-1.png',
      url: 'https://devevangelista.medium.com/introducing-the-spectacular-new-feature-of-pipe-library-v0-0-2-beta-multiple-return-values-8be79e292f3f'
    },
    {
      id: '7',
      title: 'Functional Programming in Go: An Adventure with gofn and pipe',
      thumbnail: '/images/functional-go-gofn-pipe-1.png',
      url: 'https://devevangelista.medium.com/functional-programming-in-go-an-adventure-with-gofn-and-pipe-de42b3a76449'
    },
    {
      id: '8',
      title: 'Conjuring Code: Unleash the Magic of Google Gemma with LangChainGo',
      thumbnail: '/images/google-gemma-langchaingo-1.png',
      url: 'https://devevangelista.medium.com/conjuring-code-unleash-the-magic-of-google-gemma-with-langchaingo-3b3a042ef2f7'
    },
    {
      id: '9',
      title: 'Introducing Pipe: Unix-like Pipelines for Go',
      thumbnail: '/images/pipe-unix-pipelines-go-1.png',
      url: 'https://devevangelista.medium.com/introducing-pipe-unix-like-pipelines-for-go-8108b2fa68f2'
    },
    {
      id: '10',
      title: 'How the Circuit Breaker Pattern Can Save Your App from Catastrophic Failures',
      thumbnail: '/images/circuit-breaker-pattern-1.png',
      url: 'https://devevangelista.medium.com/how-the-circuit-breaker-pattern-can-save-your-app-from-catastrophic-failures-️-7a305d2dc79f'
    }
  ];

  return (
    <div className="min-h-screen bg-dracula-background">
      <header className="bg-dracula-current text-dracula-foreground p-8 relative overflow-hidden transition-all duration-500 ease-in-out hover:bg-dracula-selection">
        <div className="absolute inset-0 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-60">
          <img src={bannerImage} alt="Banner" className="w-full h-full object-cover object-center" style={{ minHeight: '300px' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold transition-transform duration-300 ease-in-out hover:scale-105 text-shadow">Alexandre Ferreira</h1>
          <p className="text-2xl mt-2 transition-all duration-300 ease-in-out hover:text-dracula-cyan text-shadow">Full Stack Developer | Microservices Specialist</p>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className={`mb-8 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={fadeInRef}>
          <h2 className="text-2xl font-semibold mb-4 text-dracula-pink">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dracula-current p-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-dracula-green">Microservices</h3>
              <p className="text-dracula-foreground">Experienced in designing and implementing scalable microservices architectures.</p>
            </div>
            <div className="bg-dracula-current p-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-dracula-green">Node.js</h3>
              <p className="text-dracula-foreground">Proficient in building server-side applications and APIs using Node.js and Express.</p>
            </div>
            <div className="bg-dracula-current p-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-dracula-green">Golang</h3>
              <p className="text-dracula-foreground">Skilled in developing high-performance applications and microservices using Go.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-dracula-pink">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "microservice-style-guide", description: "Guide on microservices best practices.", url: "https://github.com/devalexandre/microservice-style-guide" },
              { title: "gofn", description: "Library for using Golang functional programming.", url: "https://github.com/devalexandre/gofn" },
              { title: "pipe", description: "Package for creating Unix-like pipelines in Go.", url: "https://github.com/devalexandre/pipe" },
              { title: "mylangchaingo", description: "Resources for LangChainGo.", url: "https://github.com/devalexandre/mylangchaingo" },
              { title: "langsmithgo", description: "Client library for LangSmith API in Go.", url: "https://github.com/devalexandre/langsmithgo" },
              { title: "langflowgo", description: "Project related to LangFlow in Go.", url: "https://github.com/devalexandre/langflowgo" }
            ].map((project, index) => (
              <div key={index} className="bg-dracula-current p-4 rounded shadow transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-dracula-green">{project.title}</h3>
                <p className="mb-4 text-dracula-foreground">{project.description}</p>
                <a
                  href={project.url}
                  className="text-dracula-purple hover:text-dracula-cyan transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-dracula-pink">YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="bg-dracula-current p-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover mb-2 rounded" />
                <h3 className="text-xl font-semibold mb-2 text-dracula-green">{video.title}</h3>
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-dracula-purple hover:text-dracula-cyan transition duration-300 ease-in-out">
                  Watch on YouTube
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-dracula-pink">Medium Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumArticles.map((article) => (
              <div key={article.id} className="bg-dracula-current p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x225?text=Image+Not+Available';
                  }}
                />
                <h3 className="text-xl font-semibold mb-3 text-dracula-yellow">{article.title}</h3>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-dracula-purple text-dracula-background rounded hover:bg-dracula-cyan transition duration-300 ease-in-out"
                >
                  Read on Medium
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

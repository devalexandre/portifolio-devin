import React from 'react';
import pixelArtImage from './pixel-art-banner.png'; // Assuming you have this image in your src folder

function App() {
  const youtubeVideos = [
    {
      id: '1',
      title: 'Microservices com Go - Parte 1',
      thumbnail: 'https://img.youtube.com/vi/VW7SFTE9EpE/0.jpg',
      url: 'https://www.youtube.com/watch?v=VW7SFTE9EpE'
    },
    {
      id: '2',
      title: 'Microservices com Go - Parte 2',
      thumbnail: 'https://img.youtube.com/vi/yl4SYbOI9Lc/0.jpg',
      url: 'https://www.youtube.com/watch?v=yl4SYbOI9Lc'
    },
    {
      id: '3',
      title: 'Microservices com Go - Parte 3',
      thumbnail: 'https://img.youtube.com/vi/yl4SYbOI9Lc/0.jpg',
      url: 'https://www.youtube.com/watch?v=yl4SYbOI9Lc'
    },
    {
      id: '4',
      title: 'Golang para iniciantes',
      thumbnail: 'https://img.youtube.com/vi/WiGU_ZB-u0w/0.jpg',
      url: 'https://www.youtube.com/watch?v=WiGU_ZB-u0w'
    },
    {
      id: '5',
      title: 'Criando uma API com Go',
      thumbnail: 'https://img.youtube.com/vi/socM14c9Vfk/0.jpg',
      url: 'https://www.youtube.com/watch?v=socM14c9Vfk'
    }
  ];

  const mediumArticles = [
    {
      id: '1',
      title: 'Microservices com Go: Parte 1',
      thumbnail: 'https://miro.medium.com/max/1400/1*m2og9GnHIQ_PvQRDbUzuYA.jpeg',
      url: 'https://devevangelista.medium.com/microservices-com-go-parte-1-a2f1e3e8a3f9'
    },
    {
      id: '2',
      title: 'Microservices com Go: Parte 2',
      thumbnail: 'https://miro.medium.com/max/1400/1*m2og9GnHIQ_PvQRDbUzuYA.jpeg',
      url: 'https://devevangelista.medium.com/microservices-com-go-parte-2-3b5a5e9e9b9e'
    },
    {
      id: '3',
      title: 'Golang para iniciantes',
      thumbnail: 'https://miro.medium.com/max/1400/1*m2og9GnHIQ_PvQRDbUzuYA.jpeg',
      url: 'https://devevangelista.medium.com/golang-para-iniciantes-b5f5e6f7d8f9'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={pixelArtImage} alt="Pixel Art Banner" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Alexandre Ferreira</h1>
          <p className="text-xl">Full Stack Developer | Microservices Specialist</p>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Microservices</h3>
              <p>Experienced in designing and implementing scalable microservices architectures.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Node.js</h3>
              <p>Proficient in building server-side applications and APIs using Node.js and Express.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Golang</h3>
              <p>Skilled in developing high-performance applications and microservices using Go.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">microservice-style-guide</h3>
              <p>Guide on microservices best practices.</p>
              <a href="https://github.com/devalexandre/microservice-style-guide" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">gofn</h3>
              <p>Library for using Golang functional programming.</p>
              <a href="https://github.com/devalexandre/gofn" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">pipe</h3>
              <p>Package for creating Unix-like pipelines in Go.</p>
              <a href="https://github.com/devalexandre/pipe" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">mylangchaingo</h3>
              <p>Resources for LangChainGo.</p>
              <a href="https://github.com/devalexandre/mylangchaingo" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">langsmithgo</h3>
              <p>Client library for LangSmith API in Go.</p>
              <a href="https://github.com/devalexandre/langsmithgo" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">langflowgo</h3>
              <p>Project related to LangFlow in Go.</p>
              <a href="https://github.com/devalexandre/langflowgo" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="bg-white p-4 rounded shadow">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover mb-2 rounded" />
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Watch on YouTube
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Medium Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediumArticles.map((article) => (
              <div key={article.id} className="bg-white p-4 rounded shadow">
                <img src={article.thumbnail} alt={article.title} className="w-full h-40 object-cover mb-2 rounded" />
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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

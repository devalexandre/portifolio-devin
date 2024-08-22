import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Alexandre Ferreira</h1>
        <p className="text-xl">Full Stack Developer | Microservices Specialist</p>
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

        <section>
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
      </main>
    </div>
  );
}

export default App;

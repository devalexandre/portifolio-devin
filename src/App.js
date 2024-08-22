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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>Description of Project 1 from GitHub.</p>
              <a href="#" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>Description of Project 2 from GitHub.</p>
              <a href="#" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

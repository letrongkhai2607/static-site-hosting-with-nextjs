import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-700 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 shadow-md rounded-md overflow-hidden">
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2 text-blue-400">
                Project 1
              </h3>
              <p>
                A brief description of the project and the technologies used.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 shadow-md rounded-md overflow-hidden">
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2 text-blue-400">
                Project 2
              </h3>
              <p>
                A brief description of the project and the technologies used.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 shadow-md rounded-md overflow-hidden">
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2 text-blue-400">
                Project 3
              </h3>
              <p>
                A brief description of the project and the technologies used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

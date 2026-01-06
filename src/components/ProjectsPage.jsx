  import { useState } from "react";
  import { ArrowLeft, ExternalLink } from "lucide-react";
  import { projects } from "../data";
  import { motion } from "framer-motion";

  // Helper function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    try {
      const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  };

  const ProjectsPage = ({ setCurrentPage }) => {
    const [filter, setFilter] = useState("All");

    const categories = [
      "All",
      "Oracle Corporation",
      "Technology Innovation Institute (TII)",
      "Aarhus University",
      "University of Córdoba",
    ];

    const filteredProjects = projects.filter((project) => {
      if (filter === "All") return true;
      if (filter === "Others")
        return ![
          "Oracle Corporation",
          "Technology Innovation Institute",
          "Aarhus University",
          "University of Córdoba",
        ].includes(project.organization);
      return project.organization.toLowerCase() === filter.toLowerCase();
    });

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <button
              onClick={() => setCurrentPage("home")}
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my comprehensive portfolio of AI/ML, GPU computing, and
              software development projects.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileTap={{ scale: 0.95 }}
                animate={{
                  background:
                    filter === category
                      ? "linear-gradient(90deg, #6366f1, #a855f7)"
                      : "rgba(55, 65, 81, 1)",
                  boxShadow:
                    filter === category
                      ? "0px 0px 15px 4px rgba(99,102,241,0.6)" // glowing purple halo
                      : "0px 0px 0px rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.4 }}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  filter === category
                    ? "text-white border-indigo-400"
                    : "text-gray-200 border-gray-600 hover:border-indigo-400 hover:text-indigo-300"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isOracleProject =
              project.organization === "Oracle Corporation";
            const videoId = isOracleProject
              ? getYouTubeVideoId(project.link)
              : null;
            const thumbnailUrl = videoId
              ? `https://img.youtube.com/vi/${videoId}/0.jpg`
              : null;

            return (
              <div
                key={project.id}
                onClick={() => window.open(project.link, '_blank')}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                  {isOracleProject ? (
                    <div className="h-48 relative">
                      {thumbnailUrl ? (
                        <img
                          src={thumbnailUrl}
                          alt={`${project.title} thumbnail`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600" />
                      )}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="flex flex-end px-2 py-1 bg-white/20 backdrop-blur-sm text-black rounded-full text-xs font-medium">
                          {project.year}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 bg-yellow-500/20 backdrop-blur-sm text-yellow-100 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-0" />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default ProjectsPage;

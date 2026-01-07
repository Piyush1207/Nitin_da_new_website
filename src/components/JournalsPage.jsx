import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  journals,
  posters,
  conferences,
  seminars,
  techTalks,
  awards,
  certificates,
} from "../data";
import { motion } from "framer-motion";

const JournalsPage = ({ setCurrentPage }) => {
  const [filter, setFilter] = useState("All");

  // === Carousel State ===
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  const autoplayDelay = 3000; // 3s
  const extendedCertificates = [...certificates, ...certificates]; // duplicate for seamless loop

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, autoplayDelay);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= certificates.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const categories = [
    "All",
    "Journals",
    "Posters",
    "Conferences",
    "Seminars",
    "Tech Talks",
    "Awards & Achievements",
  ];

  // Combine all data sources with a type field
  const allPublications = [
    ...journals.map((item) => ({ ...item, type: "Journals" })),
    ...posters.map((item) => ({ ...item, type: "Posters" })),
    ...conferences.map((item) => ({ ...item, type: "Conferences" })),
    ...seminars.map((item) => ({ ...item, type: "Seminars" })),
    ...techTalks.map((item) => ({ ...item, type: "Tech Talks" })),
  ];

  // Group publications by type
  const groupedPublications = {
    Journals: allPublications.filter((pub) => pub.type === "Journals"),
    Posters: allPublications.filter((pub) => pub.type === "Posters"),
    Conferences: allPublications.filter((pub) => pub.type === "Conferences"),
    Seminars: allPublications.filter((pub) => pub.type === "Seminars"),
    "Tech Talks": allPublications.filter((pub) => pub.type === "Tech Talks"),
  };

  // === Render Publication Card ===
  const renderPublication = (pub) => (
    <motion.div
      key={pub.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 bg-gray-800/60 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-400/60 hover:shadow-indigo-500/30 transition duration-500 backdrop-blur-md"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm ${
                pub.type === "Journals"
                  ? "bg-blue-900/30 text-blue-300 border border-blue-700"
                  : pub.type === "Posters"
                  ? "bg-green-900/30 text-green-300 border border-green-700"
                  : pub.type === "Conferences"
                  ? "bg-orange-900/30 text-orange-300 border border-orange-700"
                  : pub.type === "Seminars"
                  ? "bg-purple-900/30 text-purple-300 border border-purple-700"
                  : pub.type === "Tech Talks"
                  ? "bg-yellow-900/30 text-yellow-300 border border-yellow-700"
                  : "bg-gray-700 text-gray-300 border border-gray-600"
              }`}
            >
              {pub.type}
            </span>
            <span className="text-sm text-indigo-400 font-medium">
              {pub.year || pub.date}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 hover:text-indigo-400 transition">
            {pub.title || pub.description}
          </h3>
          {pub.authors && (
            <p className="text-gray-400 mb-2 italic">{pub.authors}</p>
          )}
          {(pub.publication || pub.event || pub.location) && (
            <p className="text-indigo-400 font-medium mb-3">
              {pub.publication || pub.event}
              {pub.location ? `, ${pub.location}` : ""}
            </p>
          )}
          {pub.description && !pub.title && (
            <p className="text-gray-300 text-sm leading-relaxed">
              {pub.description}
            </p>
          )}
        </div>
        {pub.link && (
          <div className="flex flex-col gap-3 lg:ml-6">
            <a
              href={pub.link}
              className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-indigo-500/30"
              aria-label={`View ${pub.title || pub.description}`}
            >
              <ExternalLink size={16} className="mr-2" />
              View {pub.type}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => setCurrentPage("home")}
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Publications & Research
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive collection of my research publications in AI, GPU
            computing, medical imaging, and computer science, along with awards
            and achievements.
          </p>
        </div>

        {/* Filter Buttons */}
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
              }}
              transition={{ duration: 0.4 }}
              className={`px-5 py-2 rounded-full text-sm font-medium shadow-md border transition-all duration-300 ${
                filter === category
                  ? "text-white border-indigo-400 shadow-indigo-500/30"
                  : "text-gray-200 border-gray-600 hover:border-indigo-400 hover:text-indigo-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {filter === "Awards & Achievements" ? (
            <div>
              {/* Awards Section */}
              <div className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl">
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-10 text-center tracking-wider uppercase"
                >
                  Awards
                </motion.h3>

                {/* Awards Carousel */}
                <div
                  className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-gray-700/40 backdrop-blur-md"
                  onMouseEnter={stopAutoplay}
                  onMouseLeave={startAutoplay}
                >
                  <div
                    className={`flex ${
                      isTransitioning
                        ? "transition-transform duration-700 ease-in-out"
                        : ""
                    }`}
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                    onTransitionEnd={handleTransitionEnd}
                  >
                    {extendedCertificates.map((cert, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-full flex items-center justify-center bg-gray-900/60 p-6"
                      >
                        <img
                          src={cert.src}
                          alt={cert.alt}
                          className="h-[420px] w-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-16 rounded-2xl mt-12">
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-10 text-center tracking-wider uppercase"
                >
                  Achievements
                </motion.h3>
                <div className="max-w-4xl mx-auto">
                  <ul className="space-y-8">
                    {awards.map((award) => (
                      <motion.li
                        key={award.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="p-6 bg-gray-800/60 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-400/60 hover:shadow-indigo-500/30 transition duration-500 backdrop-blur-md"
                      >
                        <h3 className="text-lg font-semibold text-indigo-400 hover:text-indigo-300 transition">
                          {award.title}{" "}
                          <span className="text-sm text-gray-400">
                            ({award.year})
                          </span>
                        </h3>
                        <p className="text-gray-300 mt-3 leading-relaxed">
                          {award.description}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            // Publications Section
            (filter === "All"
              ? Object.keys(groupedPublications)
              : [filter]
            ).map(
              (type) =>
                groupedPublications[type]?.length > 0 && (
                  <div key={type} className="space-y-6">
                    <motion.h2
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 mb-6 text-center"
                    >
                      {type}
                    </motion.h2>
                    {groupedPublications[type].map(renderPublication)}
                  </div>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalsPage;

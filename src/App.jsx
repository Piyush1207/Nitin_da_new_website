import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
  useCallback,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TypeAnimation } from "react-type-animation";
import {
  OrbitControls,
  Sphere,
  Box,
  MeshDistortMaterial,
  Float,
} from "@react-three/drei";
import {
  ChevronDown,
  Menu,
  X,
  Github,
  Linkedin,
  Youtube,
  ExternalLink,
} from "lucide-react";
import ProjectsPage from "./components/ProjectsPage.jsx";
import JournalsPage from "./components/JournalsPage.jsx";
import {
  personalData,
  experiences,
  projects,
  journals,
  skillRows,
} from "../src/data.js";
import {
  FaMicrochip,
  FaBrain,
  FaNetworkWired,
  FaTree,
  FaChartLine,
  FaCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaCube,
} from "react-icons/fa";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiLinux,
  SiC,
  SiCplusplus,
  SiDocker,
  SiKubernetes,
  SiNvidia,
  SiGrafana,
  SiOpencv,
  SiOpenai,
  SiTerraform,
} from "react-icons/si";

const iconMap = {
  FaMicrochip,
  FaBrain,
  FaNetworkWired,
  FaTree,
  FaChartLine,
  FaCode,
  FaProjectDiagram,
  FaCube,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiLinux,
  SiC,
  SiCplusplus,
  SiDocker,
  SiKubernetes,
  SiNvidia,
  SiGrafana,
  SiOpencv,
  SiOpenai,
  SiTerraform,
};

// FloatingGeometry Component
const FloatingGeometry = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[0.8, 32, 32]} position={[1.5, 0, 0]}>
        <MeshDistortMaterial
          color="#4F46E5"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  );
};

// AnimatedBox Component
const AnimatedBox = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
      <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={[-1.5, 0.8, -1]}>
        <MeshDistortMaterial
          color="#EC4899"
          attach="material"
          distort={0.2}
          speed={1.2}
          roughness={0.2}
        />
      </Box>
    </Float>
  );
};

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Education",
    "Experience",
    "Projects",
    "Publications",
    "Skills",
  ];

  const handleNavigation = (item) => {
    if (item === "Projects") {
      setCurrentPage("projects");
    } else if (item === "Publications") {
      setCurrentPage("journals");
    } else {
      setCurrentPage("home");
      setTimeout(() => {
        document
          .getElementById(item.toLowerCase())
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo / Name */}
          <div
            className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            Dr. Nitin Satpute
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-900 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 rounded-lg shadow-lg mb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const getFov = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640 ? 80 : window.innerWidth < 1024 ? 70 : 60;
    }
    return 60;
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 overflow-hidden py-8 sm:py-12">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 4], fov: getFov() }}
          gl={{ antialias: true, powerPreference: "low-power" }}
          style={{ width: "100%", height: "100%" }}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[8, 8, 8]} intensity={0.8} />
            <FloatingGeometry />
            <AnimatedBox />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={1.0}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {personalData.name}
        </h1>
        <TypeAnimation
          sequence={["Exploring, Evaluating and Establishing.", 1000]}
          wrapper="h3"
          cursor={true}
          repeat={Infinity}
          className="text-[clamp(1rem,2.5vw,1.3rem)] font-medium text-gray-800 dark:text-white/95 mb-6"
        />
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          {personalData.title}
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <a
            href="/CV_Nitin_Satpute.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block px-6 py-2 rounded-xl text-white text-sm sm:text-base font-semibold shadow-lg text-center
     transform transition-all duration-300 overflow-hidden
     hover:scale-105 active:scale-95"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 
               bg-[length:200%_200%] animate-gradientMove"
            ></span>
            <span className="relative z-10">Download CV</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          size={20}
          className="text-gray-600 dark:text-gray-400"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Flex container */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          {/* Left Side: Image + Bullet Points */}
          <div className="w-full lg:w-3/5 space-y-7">
            {/* Image */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
              <img
                className="w-full h-auto object-cover"
                src="/images/main.jpg"
                alt="Dr. Nitin Satpute"
                loading="lazy"
              />
            </div>

            {/* Attended */}
            <div className="attended">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Attended:
              </h4>
              <ul className="text-sm sm:text-base text-gray-600 dark:text-gray-300 list-disc pl-6 space-y-2">
                {[
                  "MIT GSW at Novotel Hyderabad Convention Centre (Mar, 2016)",
                  "Deep Learning Training program by NVIDIA Deep Learning Institute, hosted by GPU Center of Excellence, IIT Bombay (Dec, 2016)",
                  '"The 2015 LOFAR Surveys Meeting" held at Leiden, Netherlands (Sept, 2015)',
                  '"AXIOM Face to Face Meet" held at BSC, Spain (Jun, 2015)',
                  "Assisted Prof. Donald Reay from Heriot-Watt University, UK, in conducting Faculty Development Program on DSP for Educators at IIIT Bangalore, VNIT Nagpur, and NIT Patna (Mar & Sep, 2016)",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Paragraphs */}
          <div className="w-full lg:w-3/5 space-y-6">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a Principal Cloud Architect – HPC/GPU & AI Platform Solutions
              at Oracle, Dubai, with a PhD in Computer Science from the
              University of Córdoba, Spain, under the Marie-Curie ESR
              Fellowship, and an M.E. in Embedded Systems from BITS Pilani. My
              technical expertise includes large language models (LLMs),
              high-performance computing (HPC), GPU programming with CUDA, and
              distributed AI. I have contributed to deep spiking neural
              networks, medical image analysis, and generative AI using Falcon,
              LLaMA, LangChain, and Hugging Face, and have collaborated with
              leading research institutions such as IISc Bangalore, University
              of Siena, NTNU, Oslo University Hospital, and Aarhus University.
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              My professional focus extends beyond research into building and
              delivering enterprise-scale AI and cloud solutions. I have led and
              influenced technical sales and solutions engineering efforts at
              the intersection of advanced infrastructure, AI platforms, and
              customer-driven innovation. This includes owning the technical
              narrative from early discovery and solution architecture through
              proof-of-concept execution and production deployment, while
              working closely with sales leadership and executive stakeholders.
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              In practice, I have guided cross-functional teams of solutions
              architects, platform engineers, and partners supporting strategic
              customers deploying large-scale AI and ML workloads. My experience
              includes GPU-accelerated infrastructure, Kubernetes-based
              platforms (OCI OKE), and distributed LLM training and inference
              using NVIDIA A100/H100 GPUs, vLLM, SGLang, and NeMo. I routinely
              translate complex technical capabilities into business-relevant
              outcomes such as performance, cost efficiency, scalability, and
              operational simplicity.
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I have also directly supported enterprise sales motions by shaping
              reference architectures, delivering executive-level technical
              briefings, and leading hands-on demonstrations and pilots. This
              includes end-to-end deployments of LLaMA and DeepSeek models on
              OKE, advising customers on RDMA-enabled multi-node GPU scaling,
              and addressing production-grade requirements such as security,
              authentication, observability, and operational readiness often
              coordinating across product, engineering, and field teams to
              ensure technical success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Component
const Education = () => {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="education-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center"
            id="education-title"
          >
            <FaGraduationCap
              className="mr-2 text-indigo-600 dark:text-indigo-400"
              size={32}
            />
            Education
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "PhD in Computer Science",
              duration: "Jun 2017 - Oct 2020",
              institution: "University of Córdoba (UCO)",
              location: "Córdoba, Spain",
              details: [
                "European Research Project: HiPerNav - High Performance soft tissue Navigation",
                "Thesis: GPU Acceleration for Liver Enhancement and Segmentation",
                "Award: Conferred 2nd prize in the thesis pitch competition at the European Innovation Fest-EIF2020",
              ],
              secondments: [
                "Norwegian University of Science and Technology (NTNU), Gjovik, Norway — April-June 2019",
                "Oslo University Hospital, Oslo, Norway — March-June 2018",
              ],
            },
            {
              title: "Master of Engineering in Embedded Systems",
              duration: "Aug 2011 - Jul 2013",
              institution: "Birla Institute of Technology and Science (BITS)",
              location: "Pilani, India",
              details: [
                "Thesis: FPGA realization of H.264 Video Decoder",
                "Indian Institute of Science (IISc), Bangalore, India — Thesis Semester, Jan-Jun 2013",
              ],
            },
            {
              title:
                "Bachelor of Engineering in Electronics and Telecommunication",
              duration: "Aug 2007 - Jul 2011",
              institution: "Yeshwantrao Chavan College of Engineering (YCCE)",
              location: "Nagpur, India",
              details: [
                "Thesis: Segmentation and Classification of MRI Brain Images using Texture Features",
              ],
            },
          ].map(
            (
              { title, duration, institution, location, details, secondments },
              index
            ) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="bg-indigo-600 text-white p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold">{title}</h3>
                  <span className="text-xs sm:text-sm opacity-90">
                    {duration}
                  </span>
                </div>
                <div className="p-4 sm:p-5 space-y-3">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    {institution}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                    {location}
                  </p>
                  {title.includes("PhD") && (
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                      Completed with Highest Distinction
                    </p>
                  )}
                  <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
                    {details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  {secondments && (
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                        Secondments:
                      </p>
                      <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 list-circle pl-5 space-y-1">
                        {secondments.map((secondment, idx) => (
                          <li key={idx}>{secondment}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-base sm:text-lg text-indigo-600 dark:text-indigo-400">
                    {exp.company}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {exp.location}
                  </p>
                </div>
                <span className="mt-2 sm:mt-0 px-3 sm:px-4 py-1 sm:py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm font-medium">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = ({ setCurrentPage }) => {
  const handleProjectsClick = useCallback(
    () => setCurrentPage("projects"),
    [setCurrentPage]
  );

  const selectedProjects = [
    projects.find((p) => p.organization === "Oracle Corporation"),
    projects.find(
      (p) => p.organization === "Technology Innovation Institute (TII)"
    ),
    projects.find((p) => p.organization === "Aarhus University"),
    projects.find((p) => p.organization === "University of Córdoba"),
  ].filter((p) => p !== undefined);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {selectedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full flex flex-col"
            >
              {/* Card Body */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stick Button to Bottom */}
                <div className="mt-auto">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm sm:text-base text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    aria-label={`View ${project.title} project`}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button
            className="group relative inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleProjectsClick}
            aria-label="View more projects"
          >
            <span className="flex items-center space-x-2">
              <span>View More</span>
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Publications Component
const Publications = ({ setCurrentPage }) => {
  const handleJournalsClick = useCallback(
    () => setCurrentPage("journals"),
    [setCurrentPage]
  );

  return (
    <section
      id="publications"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="space-y-6">
          {journals.slice(0, 3).map((pub) => (
            <div
              key={pub.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-medium">
                    {pub.publication}, {pub.year}
                  </p>
                </div>
                <a
                  href={pub.link}
                  className="mt-2 sm:mt-0 ml-0 sm:ml-4 p-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  aria-label={`View ${pub.title} publication`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button
            className="group relative inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleJournalsClick}
            aria-label="View more publications"
          >
            <span className="flex items-center space-x-2">
              <span>View More</span>
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {skillRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`marquee ${
                rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"
              }`}
            >
              <div className="marquee-content">
                {row.map((skill, index) => {
                  const IconComponent = skill.icon ? iconMap[skill.icon] : null;
                  return (
                    <div
                      key={index}
                      className="marquee-item flex items-center bg-white dark:bg-gray-900 rounded-xl shadow-lg px-3 sm:px-4 py-2 mx-2 sm:mx-3"
                    >
                      {IconComponent ? (
                        <IconComponent className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 mr-2" />
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          className="mr-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="24"
                            height="24"
                            rx="4"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="2"
                            className="stroke-indigo-600 dark:stroke-indigo-400"
                          />
                          <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="10"
                            fill="#4F46E5"
                            className="fill-indigo-600 dark:fill-indigo-400"
                          >
                            {skill.name.slice(0, 2).toUpperCase()}
                          </text>
                        </svg>
                      )}
                      <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
                {row.map((skill, index) => {
                  const IconComponent = skill.icon ? iconMap[skill.icon] : null;
                  return (
                    <div
                      key={`duplicate-${index}`}
                      className="marquee-item flex items-center bg-white dark:bg-gray-900 rounded-xl shadow-lg px-3 sm:px-4 py-2 mx-2 sm:mx-3"
                    >
                      {IconComponent ? (
                        <IconComponent className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 mr-2" />
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          className="mr-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="24"
                            height="24"
                            rx="4"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="2"
                            className="stroke-indigo-600 dark:stroke-indigo-400"
                          />
                          <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="10"
                            fill="#4F46E5"
                            className="fill-indigo-600 dark:fill-indigo-400"
                          >
                            {skill.name.slice(0, 2).toUpperCase()}
                          </text>
                        </svg>
                      )}
                      <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-6 md:px-12">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Dr. Nitin Satpute
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Principal Cloud Architect – HPC/GPU & AI Platform Solutions
          </p>

          {/* Social Buttons */}
          <div className="flex gap-3 mt-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nitin-satpute-23314957/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-md hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 fill-current text-indigo-500 group-hover:text-indigo-400 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.84 108C24.38 108 0 83.5 0 53.9A53.9 53.9 0 01107.78 54c0 29.6-24.38 54-53.94 54zM447.9 448h-92.68V305.4c0-34-12.1-57.2-42.4-57.2-23.1 0-36.8 15.5-42.8 30.6-2.2 5.2-2.8 12.4-2.8 19.7V448h-92.7s1.2-270.1 0-299.1h92.7v42.4c12.3-19 34.5-46 84-46 61.4 0 107.3 40 107.3 126.1z" />
                </svg>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@nitinsatpute3125"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-md hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 fill-current text-red-500 group-hover:text-red-400 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597C14.933 166.95 14.933 256 14.933 256s0 89.05 11.412 131.917c6.281 23.65 24.787 42.276 48.284 48.597C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.947 48.284-48.597C561.067 345.05 561.067 256 561.067 256s0-89.05-11.412-131.917zM232.145 338.883V173.117L361.955 256z" />
                </svg>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-lg border border-gray-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-md hover:shadow-xl hover:shadow-gray-500/30 hover:scale-105 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-gray-500/50 hover:bg-gradient-to-tr hover:from-gray-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 fill-current text-gray-400 group-hover:text-white transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.4-5.6-1.2-5.6-3.2 0-2 2.3-3.6 5.2-3.6 3.3-.4 5.6 1.2 5.6 3.2zm-31.8-1.8c-.8 1.6-3.2 2-5.6 1.2-2.3-.8-3.6-2.8-2.8-4.4.8-1.6 3.2-2 5.6-1.2 2.4.8 3.6 2.8 2.8 4.4zm44.4-1.2c-2.8.8-6-.4-6.8-2.8-1.2-2.4.4-5.2 3.2-6 2.8-.8 6 .4 6.8 2.8 1.2 2.4-.4 5.2-3.2 6zM244 8C109.2 8 0 117.6 0 252.4c0 108.8 70.8 201.2 169.2 233.6 12.8 2.4 17.2-5.6 17.2-12.4v-44c-68.8 14.8-83.2-33.2-83.2-33.2-11.6-29.2-28.4-36.8-28.4-36.8-23.6-16.4 1.6-16 1.6-16 25.6 1.6 39.6 25.6 39.6 25.6 22.8 39.6 59.6 28 74 21.2 2.4-16.4 9.6-28 17.6-34.4-54.8-6.4-112-27.2-112-121.6 0-27.2 9.6-49.6 25.6-67.2-2.8-6.4-11.2-32.4 2.4-67.2 0 0 20.8-6.8 68.8 25.6 19.6-5.6 40.8-8 61.6-8s42 2.4 61.6 8c48-32.4 68.8-25.6 68.8-25.6 13.6 34.8 5.2 60.8 2.4 67.2 16 17.6 25.6 40 25.6 67.2 0 94.4-57.6 115.2-112.8 121.6 9.6 8 18 23.6 18 47.2v70c0 6.8 4.8 12.8 17.6 12.4C425.2 453.6 496 361.2 496 252.4 496 117.6 386.8 8 252 8z" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#about" className="hover:text-indigo-300">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-indigo-300">
                Education
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-indigo-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#publications" className="hover:text-indigo-300">
                Publications
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-300">
                Skills
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
            Research Areas
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-300">
                Large Language Models
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-300">
                GPU Computing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-300">
                Computer Vision
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-300">
                Distributed Systems
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700/50 mt-6">
        <p className="text-center text-sm text-gray-500 py-4 flex justify-center items-center gap-4">
          © 2025 Dr. Nitin Satpute. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return <ProjectsPage setCurrentPage={setCurrentPage} />;
      case "journals":
        return <JournalsPage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects setCurrentPage={setCurrentPage} />
            <Publications setCurrentPage={setCurrentPage} />
            <Skills />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;

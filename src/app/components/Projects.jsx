"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring product catalog, shopping cart, and payment integration.",
      image: "no-1.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      demo: "https://your-ecommerce-demo.vercel.app",
      code: "https://github.com/username/ecommerce-platform",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/no-2.png",
      technologies: ["React", "Redux", "Firebase", "Material-UI"],
      demo: "https://task-buddy-app.vercel.app/",
      code: "https://github.com/username/task-manager",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "weather.png",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "Bootstrap"],
      demo: "https://weather-app-ochre-theta-77.vercel.app/",
      code: "https://github.com/username/weather-dashboard",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern portfolio website with smooth animations, dark mode toggle, and optimized performance.",
      image: "/portfolio.png",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      demo: "https://portfolio-orcin-omega-18.vercel.app/",
      code: "https://github.com/username/portfolio",
    },
    {
      id: 5,
      title: "Food Ordering App",
      description:
        "A front-end food ordering app with dynamic menu browsing, cart management, and responsive UI.",
      image: "/food.png",
      technologies: ["React", "Tailwind CSS", "Redux Toolkit"],
      demo: "https://food-hub-bx7m.vercel.app/",
      code: "https://github.com/username/food-app",
    },
    {
      id: 6,
      title: "WorkFotos-Style Front-End App",
      description:
        "A front-end photo-management app with project-based albums, photo uploads, client sharing links and interactive UI.",
      image: "/work.svg",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      demo: "https://work-fotos.vercel.app/",
      code: "https://github.com/username/workfotos-clone",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((project, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => [...prev, project.id]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-in-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            frontend development and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform
                ${
                  visibleProjects.includes(project.id)
                    ? "slide-in-up opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
                hover:shadow-xl hover:-translate-y-2 hover:scale-105
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 shake">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full pulse-slow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 font-medium shake"
                  >
                    View Demo
                  </Link>
                  <Link
                    href={project.code}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800 font-medium shake"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

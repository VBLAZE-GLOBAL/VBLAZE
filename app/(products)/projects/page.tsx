"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 8,
    name: "Positive Properties",
    description:
      "Top Real Estate in Dubai & UAE. Exceptional quality and prompt service for clients in their search for the right property.",
    image: "/images/client-10.png",
    link: "/projects/positive-properties",
    category: "Websites",
    subcategory: "React JS",
  },
  {
    id: 9,
    name: "Vision X Nexus",
    description:
      "Premium Real Estate in Sharjah & UAE. Experience serene living and explore a wide range of luxury real estate.",
    image: "/images/client-11.png",
    link: "/projects/vision-x-nexus",
    category: "Websites",
    subcategory: "React JS",
  },
  {
    id: 10,
    name: "Leaders Fort",
    description:
      "Leaders Fort is a trusted name in the UAE, providing innovative solutions and services.",
    image: "/images/client-12.png",
    link: "/projects/leaders-fort",
    category: "Websites",
    subcategory: "React JS",
  },
  {
    id: 1,
    name: "SavvyPool",
    description:
      "A comprehensive LMS app offering personalized LMS and real-time tracking.",
    image: "/images/client-07.png",
    link: "/projects/savvypool",
    category: "Websites",
    subcategory: "React JS",
  },
  {
    id: 2,
    name: "RHMS",
    description:
      "A comprehensive HMS app offering personalized workouts and real-time Hospital tracking.",
    image: "/images/client-08.png",
    link: "/projects/rhms",
    category: "Websites",
    subcategory: "React JS",
  },
  {
    id: 3,
    name: "Jovoy",
    description:
      "An all-in-one platform for tracking perfume metrics and building better habits.",
    image: "/images/client-01.png",
    link: "/projects/jovoy",
    category: "Websites",
    subcategory: "React JS",
  },

  {
    id: 4,
    name: "P18 Fitness",
    description:
      "A comprehensive fitness app offering personalized workouts and real-time tracking.",
    image: "/images/client-06.png",
    link: "/projects/p18-fitness",
    category: "Applications",
    subcategory: "React Native",
  },

  {
    id: 5,
    name: "Ras eCommerce",
    description:
      "A comprehensive ecommerce app offering personalized shopping and real-time.",
    image: "/images/client-09.png",
    link: "/projects/ras",
    category: "Websites",
    subcategory: "React JS",
  },

  {
    id: 6,
    name: "Fiesta23",
    description:
      "A community-driven fitness platform with workout challenges and rewards.",
    image: "/images/client-02.png",
    link: "/projects/fiesta",
    category: "Websites",
    subcategory: "WordPress",
  },
  {
    id: 7,
    name: "Royal Boutique",
    description:
      "A wellness app that integrates meditation, fitness, and nutrition tracking.",
    image: "/images/client-03.png",
    link: "/projects/rb",
    category: "Applications",
    subcategory: "Flutter",
  },
  {
    id: 11,
    name: "Media Market International",
    description:
      "Media Market International is a leading provider of media and marketing solutions, delivering innovative strategies for global clients.",
    image: "/images/client-13.png",
    link: "https://www.mediamarketint.com/",
    category: "Websites",
    subcategory: "Corporate",
  },
];

export default function ProjectsArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const filteredProjects = projects
    .filter((project) => {
      const matchCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchSubcategory =
        selectedSubcategory === "All" ||
        project.subcategory === selectedSubcategory;
      return matchCategory && matchSubcategory;
    })
    .filter(
      (project) =>
        ![
          "Vision X Nexus",
          "Positive Properties",
          "Leaders Fort"
        ].includes(project.name)
    );

  return (
    <section>
      <br />
      <br />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <div className="inline-flex items-center gap-3 pb-3">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Innovative Projects
            </span>
          </div>
          <h2 className="bg-gradient-to-r from-gray-200 via-indigo-300 to-gray-50 bg-clip-text text-4xl font-semibold text-transparent">
            Projects Archive
          </h2>
          <p className="text-lg text-indigo-200/65">
            Explore our portfolio of innovative and impactful projects.
          </p>
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap justify-center gap-4 pb-8">
          <button
            className={`btn-sm ${
              selectedCategory === "All"
                ? "bg-indigo-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
            onClick={() => {
              setSelectedCategory("All");
              setSelectedSubcategory("All");
            }}
          >
            All
          </button>
          <button
            className={`btn-sm ${
              selectedCategory === "Websites"
                ? "bg-indigo-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
            onClick={() => setSelectedCategory("Websites")}
          >
            Websites
          </button>
          <button
            className={`btn-sm ${
              selectedCategory === "Applications"
                ? "bg-indigo-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
            onClick={() => setSelectedCategory("Applications")}
          >
            Applications
          </button>
        </div>

        {/* Subcategories */}
        {selectedCategory !== "All" && (
          <div className="flex flex-wrap justify-center gap-4 pb-8">
            <button
              className={`btn-sm ${
                selectedSubcategory === "All"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
              onClick={() => setSelectedSubcategory("All")}
            >
              All {selectedCategory}
            </button>
            {selectedCategory === "Websites" && (
              <>
                <button
                  className={`btn-sm ${
                    selectedSubcategory === "WordPress"
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-800 text-gray-300"
                  }`}
                  onClick={() => setSelectedSubcategory("WordPress")}
                >
                  WordPress
                </button>
                <button
                  className={`btn-sm ${
                    selectedSubcategory === "React JS"
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-800 text-gray-300"
                  }`}
                  onClick={() => setSelectedSubcategory("React JS")}
                >
                  React JS
                </button>
              </>
            )}
            {selectedCategory === "Applications" && (
              <>
                <button
                  className={`btn-sm ${
                    selectedSubcategory === "React Native"
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-800 text-gray-300"
                  }`}
                  onClick={() => setSelectedSubcategory("React Native")}
                >
                  React Native
                </button>
                <button
                  className={`btn-sm ${
                    selectedSubcategory === "Flutter"
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-800 text-gray-300"
                  }`}
                  onClick={() => setSelectedSubcategory("Flutter")}
                >
                  Flutter
                </button>
              </>
            )}
          </div>
        )}

        {/* Projects Grid */}
        <div className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative h-full overflow-hidden rounded-2xl bg-gray-800"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                <div className="relative flex pt-3 justify-center items-center">
                  <Image
                    className="inline-flex"
                    src={project.image}
                    width={350}
                    height={288}
                    alt={project.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-indigo-200/65">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "P18 Fitness",
    description:
      "A comprehensive fitness app offering personalized workouts and real-time tracking.",
    image: "/images/client-06.png",
    link: "/projects/p18-fitness",
  },
  {
    id: 2,
    name: "Healthify",
    description:
      "An all-in-one platform for tracking health metrics and building better habits.",
    image: "/images/client-01.png",
    link: "/projects/healthify",
  },
  {
    id: 3,
    name: "FitZone",
    description:
      "A community-driven fitness platform with workout challenges and rewards.",
    image: "/images/client-02.png",
    link: "/projects/fitzone",
  },
  {
    id: 4,
    name: "WellnessPro",
    description:
      "A wellness app that integrates meditation, fitness, and nutrition tracking.",
    image: "/images/client-03.png",
    link: "/projects/wellnesspro",
  },
  {
    id: 5,
    name: "WellnessPro",
    description:
      "A wellness app that integrates meditation, fitness, and nutrition tracking.",
    image: "/images/client-04.png",
    link: "/projects/wellnesspro",
  },
  {
    id: 6,
    name: "WellnessPro",
    description:
      "A wellness app that integrates meditation, fitness, and nutrition tracking.",
    image: "/images/client-05.png",
    link: "/projects/wellnesspro",
  },
];

export default function ProjectsArchivePage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Innovative Projects
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Projects Archive
          </h2>
          <p className="text-lg text-indigo-200/65">
            Explore our portfolio of innovative and impactful projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={project.image}
                  width={350}
                  height={288}
                  alt={project.name}
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        View Details
                      </span>
                    </span>
                  </div>
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
    </section>
  );
}

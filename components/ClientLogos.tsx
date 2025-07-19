import Image from "next/image";
import ClientImg07 from "@/public/images/client-07.png";
import ClientImg01 from "@/public/images/client-01.png";
import ClientImg13 from "@/public/images/client-13.png";
import Spotlight from "@/components/spotlight";

export default function OurClients() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Clients
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-indigo-200/65">
              We are proud to work with industry-leading companies that trust us
              to deliver quality products and services.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
            {/* Media Market International */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="https://www.mediamarketint.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <div className="relative pt-3 flex justify-center items-center">
                  <Image
                    className="inline-flex"
                    src={ClientImg13}
                    width={350}
                    height={288}
                    alt="Media Market International"
                  />
                  {/* Client name on hover */}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-semibold">
                      Media Market International
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Global Media & Marketing
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Media Market International is a leading provider of media and marketing solutions, delivering innovative strategies for global clients.
                  </p>
                </div>
              </div>
            </a>
            {/* SavvyPool */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="/projects/savvypool"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <div className="relative pt-3 flex justify-center items-center">
                  <Image
                    className="inline-flex"
                    src={ClientImg07}
                    width={350}
                    height={288}
                    alt="SavvyPool"
                  />
                  {/* Client name on hover */}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-semibold">
                      SavvyPool
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Learning Management
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    A comprehensive LMS app offering personalized LMS and real-time tracking.
                  </p>
                </div>
              </div>
            </a>
            {/* Jovoy */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="/projects/jovoy"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Image */}
                <div className="relative pt-3 flex justify-center items-center">
                  <Image
                    className="inline-flex"
                    src={ClientImg01}
                    width={350}
                    height={288}
                    alt="Jovoy"
                  />
                  {/* Client name on hover */}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-semibold">
                      Jovoy
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Perfume Metrics Platform
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    An all-in-one platform for tracking perfume metrics and building better habits.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
          <a
            className="group relative mx-auto mt-12 flex h-12 w-48 items-center justify-center overflow-hidden rounded-full border border-gradient-to-r border-indigo-500 text-center transition-all duration-300 hover:scale-105"
            href="/projects"
          >
            <span className="relative z-10 text-lg font-medium text-indigo-500 transition-all duration-300 group-hover:text-indigo-400">
              MORE PROJECTS
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

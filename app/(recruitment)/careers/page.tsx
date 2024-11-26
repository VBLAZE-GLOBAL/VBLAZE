import React from "react";

export default function Careers() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20">
      <div className="absolute inset-0 -z-10 bg-indigo-500/50 opacity-75"></div>

      <div className="container mx-auto px-6">
        <div className="pb-12 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Job Opportunities
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Job Listing 1 */}
          <div className="relative group">
            <div className="relative z-20 h-full overflow-hidden rounded-lg bg-gray-800">
              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      Front-End Engineer
                    </span>
                  </span>
                </div>
                <p className="text-indigo-200/65">
                  We're looking for a front-end engineer to create modern and
                  interactive user interfaces.
                </p>
                <a
                  href="https://www.linkedin.com/company/vblaze/jobs"
                  className="mt-4 inline-block rounded-lg bg-indigo-600 px-6 py-2 text-white text-sm font-semibold hover:bg-indigo-700"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          {/* Job Listing 2 */}
          <div className="relative group">
            <div className="relative z-20 h-full overflow-hidden rounded-lg bg-gray-800">
              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      Back-End Engineer
                    </span>
                  </span>
                </div>
                <p className="text-indigo-200/65">
                  We're looking for a back-end engineer to build robust and
                  scalable systems.
                </p>
                <a
                  href="https://www.linkedin.com/company/vblaze/jobs"
                  className="mt-4 inline-block rounded-lg bg-indigo-600 px-6 py-2 text-white text-sm font-semibold hover:bg-indigo-700"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          {/* Job Listing 3 */}
          <div className="relative group">
            <div className="relative z-20 h-full overflow-hidden rounded-lg bg-gray-800">
              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      Product Manager
                    </span>
                  </span>
                </div>
                <p className="text-indigo-200/65">
                  We need a product manager to guide our projects from concept
                  to completion.
                </p>
                <a
                  href="https://www.linkedin.com/company/vblaze/jobs"
                  className="mt-4 inline-block rounded-lg bg-indigo-600 px-6 py-2 text-white text-sm font-semibold hover:bg-indigo-700"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <script
          id="chatbotkit-widget"
          src="https://static.chatbotkit.com/integrations/widget/v2.js"
          data-widget="cm3ygeox708bl2hqc7cmpa1c4"
        ></script>
      </div>
    </section>
  );
}

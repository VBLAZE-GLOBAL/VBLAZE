import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function ContributorsList() {
  const contributors = [
    {
      photo: "/images/testimonial-02.jpg",
      name: "Rheshikes",
      position: "Co-Founder",
    },
    {
      photo: "/images/testimonial-03.jpg",
      name: "Rasi KP",
      position: "Co-Founder",
    },
    {
      photo: "/images/testimonial-07.jpg",
      name: "Sishaj Sasi",
      position: "Co-Founder",
    },
    {
      photo: "/images/testimonial-05.jpg",
      name: "Minhaj",
      position: "Co-Founder",
    },
  ];

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Contributors
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Meet the Team Behind the Success
            </h2>
            <p className="text-lg text-indigo-200/65">
              Get to know the talented individuals who make it all happen.
            </p>
          </div>
          {/* Contributors Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2"
                aria-label={`Contributor ${index + 1}`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <Image
                    src={contributor.photo}
                    alt={contributor.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-indigo-200">
                    {contributor.name}
                  </h3>
                  <p className="text-sm text-indigo-300">
                    {contributor.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

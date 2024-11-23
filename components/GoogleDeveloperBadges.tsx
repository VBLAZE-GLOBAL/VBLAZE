import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function GoogleDeveloperBadges() {
  const badges = [
    {
      image:
        "https://developers.google.com/static/profile/badges/recognitions/learnings/learnings.svg",
      link: "https://developers.google.com/profile/u/i_yam_three_",
    },
    {
      image:
        "https://developers.google.com/static/profile/badges/activity/android/install-android-studio/badge.svg",
      link: "https://developers.google.com/profile/u/i_yam_three_",
    },
    {
      image:
        "https://developers.google.com/static/profile/badges/playlists/first-playlist/badge.svg",
      link: "https://developers.google.com/profile/u/i_yam_three_",
    },
    {
      image:
        "https://developers.google.com/static/profile/badges/playlists/firebase/add_firebase_to_flutter/firebase-flutter.svg",
      link: "https://developers.google.com/profile/u/i_yam_three_",
    },
    {
      image:
        "https://developers.google.com/static/profile/badges/codelabs/first-codelab/badge.svg",
      link: "https://developers.google.com/profile/u/i_yam_three_",
    },
    {
      image:
        "https://developers.google.com/static/profile/badges/profile/created-profile/created_profile.svg",
      link: "https://developers.google.com/profile/u/i_yam_three_",
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
                Certificates
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Showcasing Our Certifications
            </h2>
            <p className="text-lg text-indigo-200/65">
              A showcase of our team's expertise demonstrated through
              industry-recognized Certifications.
            </p>
          </div>
          {/* Badge Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {badges.map((badge, index) => (
              <a
                key={index}
                href={badge.link}
                className="flex flex-col items-center space-y-2"
                aria-label={`Google Developer badge ${index + 1}`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden transition-transform hover:scale-105">
                  <Image
                    src={badge.image}
                    alt={`Badge ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </a>
            ))}
          </div>
          {/* IEEE Logo */}
          <div className="mt-12 text-center">
            <a
              href="https://ieeexplore.ieee.org/author/527236028851625"
              aria-label="IEEE Logo"
            >
              <div className="w-24 h-24 mx-auto overflow-hidden transition-transform hover:scale-105">
                <Image
                  src="https://www.vectorlogo.zone/logos/ieee/ieee-ar21.svg"
                  alt="IEEE Logo"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaWhatsapp,
  FaTag,
} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

// Job data with additional details
const jobPosts = [
  {
    id: 1,
    title: "Flutter Developer",
    shortDescription: "Develop and maintain mobile apps using Flutter.",
    fullDescription:
      "As a Flutter Developer, you will work with our team to create stunning cross-platform mobile applications using the Flutter framework. You should have experience with Dart, Firebase, and an understanding of mobile app lifecycle management.",
    jobType: "Full-Time",
    location: "UAE",
    languages: ["English", "Arabic"],
    skills: ["Dart", "Flutter", "Firebase", "Mobile App Development"],
    active: true,
  },
  {
    id: 2,
    title: "React JS Developer",
    shortDescription: "Build and maintain web applications using ReactJS.",
    fullDescription:
      "We are looking for a ReactJS Developer who is passionate about building fast and scalable web applications. You should be proficient in JavaScript, React, Redux, and have a solid understanding of front-end development principles.",
    jobType: "Part-Time",
    location: "India",
    languages: ["English"],
    skills: ["JavaScript", "React", "Redux", "HTML", "CSS"],
    active: true,
  },
  {
    id: 3,
    title: "WordPress Developer",
    shortDescription: "Create and customize WordPress websites.",
    fullDescription:
      "As a WordPress Developer, you will be responsible for creating and maintaining WordPress sites. Proficiency in PHP, MySQL, HTML, CSS, and WordPress themes/plugins is required.",
    jobType: "Contract",
    location: "UAE",
    languages: ["English"],
    skills: ["PHP", "WordPress", "MySQL", "HTML", "CSS"],
    active: false,
  },
  {
    id: 4,
    title: "Graphic Designer",
    shortDescription: "Design graphics and branding materials for marketing.",
    fullDescription:
      "We are looking for a Graphic Designer who will design creative visuals for various marketing campaigns. Strong skills in Adobe Photoshop, Illustrator, and branding experience are essential.",
    jobType: "Freelance",
    location: "India",
    languages: ["English", "Hindi"],
    skills: ["Adobe Photoshop", "Illustrator", "Branding", "Graphic Design"],
    active: true,
  },
];

const RecruitmentPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState<string[]>([]);
  const [filterJobTitle, setFilterJobTitle] = useState<string[]>([]);
  const [filterLanguages, setFilterLanguages] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean | null>(null);

  const openModal = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  const handleApply = (method: string) => {
    toast.success(`Applied via ${method}!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    closeModal();
  };

  const handleLocationFilterChange = (location: string) => {
    setFilterLocation((prevState) =>
      prevState.includes(location)
        ? prevState.filter((item) => item !== location)
        : [...prevState, location]
    );
  };

  const handleJobTitleFilterChange = (title: string) => {
    setFilterJobTitle((prevState) =>
      prevState.includes(title)
        ? prevState.filter((item) => item !== title)
        : [...prevState, title]
    );
  };

  const handleLanguageFilterChange = (language: string) => {
    setFilterLanguages((prevState) =>
      prevState.includes(language)
        ? prevState.filter((item) => item !== language)
        : [...prevState, language]
    );
  };

  const filteredJobs = jobPosts.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterLocation.length ? filterLocation.includes(job.location) : true) &&
      (filterJobTitle.length ? filterJobTitle.includes(job.title) : true) &&
      (filterLanguages.length
        ? filterLanguages.some((lang) => job.languages.includes(lang))
        : true) &&
      (isActive !== null ? job.active === isActive : true)
    );
  });

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Job Opportunities
            </h1>
          </div>

          {/* Search and Filter Options */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <input
                type="text"
                className="w-full max-w-sm p-3 rounded-lg border border-gray-600 bg-gray-800 text-white"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Panel */}
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              {/* Locations */}
              <div>
                <label className="text-white">Locations</label>
                <div className="flex gap-2">
                  {["UAE", "India"].map((location) => (
                    <label key={location} className="text-gray-400">
                      <input
                        type="checkbox"
                        value={location}
                        checked={filterLocation.includes(location)}
                        onChange={() => handleLocationFilterChange(location)}
                        className="mr-2"
                      />
                      {location}
                    </label>
                  ))}
                </div>
              </div>

              {/* Job Titles */}
              <div>
                <label className="text-white">Job Titles</label>
                <div className="flex gap-2">
                  {[
                    "Flutter Developer",
                    "React JS Developer",
                    "WordPress Developer",
                    "Graphic Designer",
                  ].map((title) => (
                    <label key={title} className="text-gray-400">
                      <input
                        type="checkbox"
                        value={title}
                        checked={filterJobTitle.includes(title)}
                        onChange={() => handleJobTitleFilterChange(title)}
                        className="mr-2"
                      />
                      {title}
                    </label>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <label className="text-white">Languages</label>
                <div className="flex gap-2">
                  {["English", "Arabic", "Hindi"].map((language) => (
                    <label key={language} className="text-gray-400">
                      <input
                        type="checkbox"
                        value={language}
                        checked={filterLanguages.includes(language)}
                        onChange={() => handleLanguageFilterChange(language)}
                        className="mr-2"
                      />
                      {language}
                    </label>
                  ))}
                </div>
              </div>

              {/* Active Now */}
              <div>
                <label className="text-white">Active Now</label>
                <div className="flex gap-2">
                  <label className="text-gray-400">
                    <input
                      type="checkbox"
                      checked={isActive === true}
                      onChange={() =>
                        setIsActive(isActive === true ? null : true)
                      }
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="text-gray-400">
                    <input
                      type="checkbox"
                      checked={isActive === false}
                      onChange={() =>
                        setIsActive(isActive === false ? null : false)
                      }
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-800 border border-gray-600 p-4 rounded-lg hover:bg-gray-700 transition"
                >
                  <h2 className="text-2xl font-bold text-white">{job.title}</h2>
                  <p className="text-gray-300">{job.shortDescription}</p>
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => openModal(job)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">No job postings found.</p>
            )}
          </div>

          {/* Modal */}
          {isModalOpen && selectedJob && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-white">
                  {selectedJob.title}
                </h2>
                <p className="text-gray-400">{selectedJob.fullDescription}</p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">Details:</h3>
                  <p className="text-gray-300">
                    <FaMapMarkerAlt className="inline mr-2" />
                    Location: {selectedJob.location}
                  </p>
                  <p className="text-gray-300">
                    <FaRegEnvelope className="inline mr-2" />
                    Email: info@p18fitness.com
                  </p>
                  <p className="text-gray-300">
                    <FaWhatsapp className="inline mr-2" />
                    WhatsApp: +1234567890
                  </p>
                  <p className="text-gray-300">
                    <FaTag className="inline mr-2" />
                    Job Type: {selectedJob.jobType}
                  </p>
                  <p className="text-gray-300">
                    <BsFillPersonFill className="inline mr-2" />
                    Skills: {selectedJob.skills.join(", ")}
                  </p>
                </div>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => handleApply("Email")}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
                  >
                    Apply via Email
                  </button>
                  <button
                    onClick={() => handleApply("WhatsApp")}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
                  >
                    Apply via WhatsApp
                  </button>
                </div>
                <button
                  onClick={closeModal}
                  className="mt-4 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default RecruitmentPage;

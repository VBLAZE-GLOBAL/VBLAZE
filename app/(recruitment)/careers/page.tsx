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
  // Other job posts...
];

const RecruitmentPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState<string[]>([]);
  const [filterJobTitle, setFilterJobTitle] = useState<string[]>([]);
  const [filterLanguages, setFilterLanguages] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to toggle filter visibility

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
            <button
              onClick={() => setIsFilterOpen((prev) => !prev)} // Toggle filter visibility
              className="bg-blue-600 text-white p-3 rounded-lg"
            >
              Filters
            </button>

            {isFilterOpen && ( // Conditionally render the filter options
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
            )}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {job.shortDescription}
                      </p>
                    </div>
                    <button
                      onClick={() => openModal(job)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No job posts found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 text-white rounded-lg p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {selectedJob?.title}
            </h2>
            <p className="text-sm mb-4">{selectedJob?.fullDescription}</p>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {selectedJob?.location}
              </div>
              <div className="flex items-center">
                <FaRegEnvelope className="mr-2" />
                {selectedJob?.languages.join(", ")}
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2" />
                {selectedJob?.skills.join(", ")}
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <Link
                href="https://www.linkedin.com"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                target="_blank"
              >
                Apply on LinkedIn
              </Link>
              <button
                onClick={() => handleApply("WhatsApp")}
                className="bg-green-600 text-white py-2 px-4 rounded-lg flex items-center"
              >
                <FaWhatsapp className="mr-2" />
                Apply via WhatsApp
              </button>
            </div>
            <button
              onClick={closeModal}
              className="text-red-500 hover:text-red-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </section>
  );
};

export default RecruitmentPage;

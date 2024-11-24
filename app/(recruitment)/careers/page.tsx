"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTag,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Ensure toast is used.

const RecruitmentPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    languages: [],
    isActive: true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      shortDescription: "Develop software solutions",
      fullDescription:
        "Detailed description about the Software Engineer job...",
      location: "New York",
      jobType: "Full-time",
      languages: ["English", "Spanish"],
      isActive: true,
    },
    {
      id: 2,
      title: "UX Designer",
      shortDescription: "Design beautiful user interfaces",
      fullDescription: "Detailed description about the UX Designer job...",
      location: "San Francisco",
      jobType: "Part-time",
      languages: ["English", "French"],
      isActive: true,
    },
    // More jobs...
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesLocation = filters.location
      ? job.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesJobType = filters.jobType
      ? job.jobType === filters.jobType
      : true;
    const matchesLanguages = filters.languages.length
      ? filters.languages.some((lang) => job.languages.includes(lang))
      : true;
    const matchesActiveStatus = job.isActive === filters.isActive;
    return (
      matchesLocation &&
      matchesJobType &&
      matchesLanguages &&
      matchesActiveStatus
    );
  });

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked
          ? [...prevFilters[name], value] // Add language to the list
          : prevFilters[name].filter((v) => v !== value), // Remove language from the list
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleApply = (method) => {
    if (method === "Email") {
      // Apply via Email (mailto)
      window.location.href = "mailto:info@vblaze.org";
      toast.success("Application sent via Email");
    } else if (method === "WhatsApp") {
      // Apply via WhatsApp
      window.location.href = "https://wa.me/+971558291800";
      toast.success("Application sent via WhatsApp");
    }
    closeModal();
  };

  return (
    <section className="container mx-auto py-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filter Options */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white">Filters</h2>

            {/* Location Filter */}
            <div className="mt-4">
              <label className="text-white block">Location</label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="mt-2 p-2 w-full rounded-md bg-gray-700 text-white"
                placeholder="Search by location"
              />
            </div>

            {/* Job Type Filter */}
            <div className="mt-4">
              <label className="text-white block">Job Type</label>
              <select
                name="jobType"
                value={filters.jobType}
                onChange={handleFilterChange}
                className="mt-2 p-2 w-full rounded-md bg-gray-700 text-white"
              >
                <option value="">All</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>

            {/* Language Filter */}
            <div className="mt-4">
              <label className="text-white block">Languages</label>
              <div className="space-y-2">
                {["English", "Spanish", "French"].map((language) => (
                  <div key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      name="languages"
                      value={language}
                      checked={filters.languages.includes(language)} // Ensure checked is based on filter state
                      onChange={handleFilterChange} // Handle change correctly
                      className="text-white"
                    />
                    <label className="text-white ml-2">{language}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Status Filter */}
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={filters.isActive}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    isActive: !prevFilters.isActive,
                  }))
                }
                className="text-white"
              />
              <label className="text-white ml-2">Active Jobs Only</label>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3 space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-white">
                  {job.title}
                </h2>
                <p className="text-gray-400">{job.shortDescription}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex gap-2 items-center">
                    <FaMapMarkerAlt className="text-gray-400" />
                    <span className="text-gray-400">{job.location}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaTag className="text-gray-400" />
                    <span className="text-gray-400">{job.jobType}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <button
                    onClick={() => openModal(job)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No jobs found matching your filters.
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-8 rounded-lg w-96 relative">
            <h3 className="text-2xl text-white">{selectedJob.title}</h3>
            <p className="text-gray-400 mt-4">{selectedJob.fullDescription}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleApply("Email")}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                <FaRegEnvelope className="mr-2" />
                Apply via Email
              </button>
              <button
                onClick={() => handleApply("WhatsApp")}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                <FaWhatsapp className="mr-2" />
                Apply via WhatsApp
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </section>
  );
};

export default RecruitmentPage;

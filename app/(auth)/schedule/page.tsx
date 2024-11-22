"use client";

import React, { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const SignInPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitted(true);

    // Show success toast
    toast.success("Meeting scheduled successfully!");

    // Simulate form submission to FormSubmit (optional, for testing purposes)
    setTimeout(() => {
      (event.target as HTMLFormElement).submit();
    }, 1500);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Schedule a Meeting
            </h1>
          </div>
          {/* Meeting scheduling form */}
          <form
            className="mx-auto max-w-[400px]"
            action="https://formsubmit.co/vblaze.global@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="form-input w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="form-input w-full"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="date"
                >
                  Meeting Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  required
                  className="form-input w-full"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="time"
                >
                  Meeting Time
                </label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  required
                  className="form-input w-full"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="message"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input w-full"
                  placeholder="Any specific details for the meeting..."
                ></textarea>
              </div>
            </div>
            {/* Hidden input field for redirecting after submission */}
            <input
              type="hidden"
              name="_next"
              value="https://thanks.vblaze.org/"
            />
            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitted}
                className={`btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] ${
                  isSubmitted ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {isSubmitted ? "Submitting..." : "Schedule Meeting"}
              </button>
            </div>
          </form>
          {/* Toast Container */}
          <ToastContainer />
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Looking for something else?{" "}
            <Link className="font-medium text-indigo-500" href="/">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;

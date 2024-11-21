"use client";

import Link from "next/link";
import React, { FormEvent } from "react";

const SignInPage: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted");
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
            action="https://formsubmit.co/your@email.com"
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
            <div className="mt-6">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Schedule Meeting
              </button>
            </div>
          </form>
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

"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Type for the Timeline Data
interface TimelineData {
  phase: string;
  duration: number;
  description: string;
}

// TimelineChart Component
function TimelineChart({ data }: { data: TimelineData[] }) {
  return (
    <div className="h-[400px] mb-8 bg-white/5 backdrop-blur-sm rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" stroke="#ffffff80" />
          <YAxis dataKey="phase" type="category" stroke="#ffffff80" />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload as TimelineData;
                return (
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <p className="font-semibold text-[#6366f1]">{data.phase}</p>
                    <p className="text-white/80">
                      Duration: {data.duration} months
                    </p>
                    <p className="text-white/80">{data.description}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="duration"
            fill="url(#colorGradient)"
            radius={[0, 4, 4, 0]}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Section Component
function Section({
  title,
  content,
  children,
}: {
  title: string;
  content?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
        <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
          {title}
        </span>
      </div>
      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
        {content}
      </h2>
      {children}
    </motion.div>
  );
}

// Main ProjectPage Component
export default function ProjectPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.96]);

  // Mock data for the project
  const project = {
    screenshots: [
      "/images/projects/p1img1.png",
      "/images/projects/p1img2.png",
      "/images/projects/p1img3.png",
    ],
    name: "Project Phoenix",

    shortDescription:
      "A revolutionary app transforming fitness management with AI-powered training.",
    fullDescription:
      "Project Phoenix is a cutting-edge fitness management app that leverages artificial intelligence to personalize workout plans, track progress, and offer real-time insights. With features like voice recognition, real-time analytics, and cloud syncing, it provides an unmatched experience for users committed to their fitness journey.",
    features: [
      "AI-based workout personalization",
      "Real-time progress tracking",
      "Voice recognition for hands-free control",
      "Cloud sync for multi-device use",
      "Instant feedback and motivation",
      "Comprehensive performance analytics",
    ],

    caseStudy:
      "In the pilot program, Project Phoenix helped 100 users achieve 30% faster progress with personalized workout suggestions and tracking, leading to increased engagement and better results.",
    timelineData: [
      {
        phase: "Conceptualization",
        duration: 2,
        description: "Defining project scope and initial user research",
      },
      {
        phase: "Development",
        duration: 6,
        description: "Building core features and design iterations",
      },
      {
        phase: "Testing",
        duration: 3,
        description: "Extensive user testing and feature refinement",
      },
      {
        phase: "Launch",
        duration: 1,
        description: "Public release and marketing push",
      },
      {
        phase: "Post-Launch",
        duration: 4,
        description: "Ongoing support, bug fixes, and updates",
      },
    ],
    collaborators: [
      {
        name: "John Doe",
        role: "Project Manager",
        image: "/images/testimonial-01.jpg",
      },
      {
        name: "Jane Smith",
        role: "Lead Developer",
        image: "/images/testimonial-02.jpg",
      },
      {
        name: "Michael Brown",
        role: "UX/UI Designer",
        image: "/images/testimonial-05.jpg",
      },
    ],
    clientFeedback:
      "Project Phoenix has completely changed how we approach fitness. The real-time analytics and personalized insights have pushed our training to the next level.",
    technicalSpecs: [
      { name: "AI Model", value: "Custom machine learning algorithms" },
      { name: "Backend", value: "Node.js, Express.js" },
      { name: "Frontend", value: "React, Tailwind CSS" },
    ],
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="px-6 py-16">
      <Section title="Overview" content={project.shortDescription}>
        <p className="text-white/80">{project.fullDescription}</p>
      </Section>

      <Section title="Features" content="Key Features of Project Phoenix">
        <ul className="list-disc pl-6 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="text-white/80">
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Screenshots" content="Project Screenshots">
        <div className="relative my-8">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <Image
              src={project.screenshots[currentImage]}
              alt={`Screenshot ${currentImage + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </Section>

      <Section title="Timeline" content="Project Phases & Timeline">
        <TimelineChart data={project.timelineData} />
      </Section>

      <Section title="Collaborators" content="Meet the Team">
        <div className="flex gap-6">
          {project.collaborators.map((collaborator) => (
            <div key={collaborator.name} className="text-center">
              <Image
                src={collaborator.image}
                alt={collaborator.name}
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
              <p className="mt-2 text-white font-semibold">
                {collaborator.name}
              </p>
              <p className="text-white/80">{collaborator.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Client Feedback" content="What Our Client Says">
        <p className="text-white/80">{project.clientFeedback}</p>
      </Section>

      <Section title="Technical Specifications" content="Technical Details">
        <ul className="space-y-2">
          {project.technicalSpecs.map((spec, index) => (
            <li key={index} className="text-white/80">
              <strong>{spec.name}: </strong>
              {spec.value}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

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

// Main P18Fitness ProjectPage Component
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

  // Mock data for the P18 Fitness project
  const project = {
    screenshots: [
      "/images/projects/p1img1.png",
      "/images/projects/p1img2.png",
      "/images/projects/p1img3.png",
    ],
    name: "P18 Fitness",

    shortDescription:
      "A comprehensive fitness app that offers personalized workout plans, progress tracking, and expert coaching.",
    fullDescription:
      "P18 Fitness is an innovative app designed to help users achieve their fitness goals through personalized training plans, detailed progress tracking, and direct access to certified coaches. With a focus on providing users with a holistic fitness experience, the app combines AI-driven insights and expert guidance to maximize results.",
    features: [
      "Personalized workout plans based on user goals",
      "Real-time progress tracking and analytics",
      "One-on-one coaching with fitness experts",
      "Access to exclusive workout videos",
      "Integration with health tracking devices",
      "Community-driven support and motivation",
    ],

    caseStudy:
      "During the beta phase, P18 Fitness saw a 50% increase in user engagement and a 30% improvement in workout adherence, thanks to its personalized approach and easy-to-use interface.",
    timelineData: [
      {
        phase: "Research & Planning",
        duration: 2,
        description: "Market research and defining core features.",
      },
      {
        phase: "Design & Development",
        duration: 6,
        description: "Building the platform and designing the user experience.",
      },
      {
        phase: "Testing & Iteration",
        duration: 3,
        description: "User testing and iterative improvements.",
      },
      {
        phase: "Launch",
        duration: 1,
        description: "Public release and marketing campaigns.",
      },
      {
        phase: "Post-Launch Support",
        duration: 4,
        description: "Customer support, bug fixes, and feature updates.",
      },
    ],
    collaborators: [
      {
        name: "Alex Johnson",
        role: "Lead Developer",
        image: "/images/testimonial-01.jpg",
      },
      {
        name: "Emma Williams",
        role: "UI/UX Designer",
        image: "/images/testimonial-02.jpg",
      },
      {
        name: "Michael Brown",
        role: "Fitness Expert",
        image: "/images/testimonial-03.jpg",
      },
    ],
    clientFeedback:
      "P18 Fitness has revolutionized my workout routine. The personalized workout plans and expert guidance keep me on track and motivated every day.",
    technicalSpecs: [
      {
        name: "AI Algorithms",
        value: "Custom-built for workout personalization",
      },
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

      <Section title="Features" content="Key Features of P18 Fitness">
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
          <div className="relative w-full h-[50vw] sm:h-[60vh] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
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

      <Section title="Project Timeline" content="Development Phases">
        <TimelineChart data={project.timelineData} />
      </Section>

      <Section title="Client Feedback" content="Client's Experience">
        <blockquote className="text-white/80 italic">
          "{project.clientFeedback}"
        </blockquote>
      </Section>

      <Section title="Technical Specifications" content="Tech Stack & Tools">
        <ul className="list-disc pl-6 space-y-2">
          {project.technicalSpecs.map((spec, index) => (
            <li key={index} className="text-white/80">
              <strong>{spec.name}:</strong> {spec.value}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Collaborators" content="Meet the Team">
        <div className="grid grid-cols-3 gap-8">
          {project.collaborators.map((collaborator, index) => (
            <div key={index} className="text-center">
              <Image
                src={collaborator.image}
                alt={collaborator.name}
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
              <p className="font-semibold text-white">{collaborator.name}</p>
              <p className="text-white/80">{collaborator.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

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

// Main Ras Shopping E-commerce ReactJS Website Page Component
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

  // Ras Shopping Project data
  const project = {
    screenshots: [
      "/images/projects/error.png",
      "/images/projects/error.png",
      "/images/projects/error.png",
    ],
    name: "Ras Shopping - E-commerce ReactJS Website",
    shortDescription:
      "Ras Shopping is a modern and responsive e-commerce platform built with ReactJS, designed for seamless shopping experiences online.",
    fullDescription:
      "Ras Shopping is an e-commerce platform that offers an intuitive shopping experience for customers. Featuring product catalogs, cart management, and secure payment integrations, Ras Shopping empowers businesses to reach customers across the globe. The platform also includes user authentication, order tracking, and an admin dashboard to manage products, users, and orders efficiently.",
    features: [
      "Responsive design for mobile and desktop",
      "Real-time product catalog updates",
      "User authentication and profile management",
      "Shopping cart and order tracking",
      "Secure payment integration (Stripe, PayPal)",
      "Admin dashboard for product and order management",
    ],
    caseStudy:
      "Since its launch, Ras Shopping has seen a 35% increase in customer engagement and a 25% boost in sales. The platform’s streamlined shopping process and secure checkout have led to higher conversion rates.",
    timelineData: [
      {
        phase: "Design & Prototyping",
        duration: 1,
        description:
          "Creating wireframes, UI/UX design, and initial prototypes for an intuitive user experience.",
      },
      {
        phase: "Frontend Development",
        duration: 3,
        description:
          "Developing the frontend of the website using ReactJS, integrating product displays, and user authentication.",
      },
      {
        phase: "Backend Integration & Payment Systems",
        duration: 2,
        description:
          "Integrating backend services for order management, secure payments, and product data storage.",
      },
      {
        phase: "Testing & Launch",
        duration: 1,
        description:
          "Testing the platform for usability, security, and compatibility before launch.",
      },
    ],
    collaborators: [
      {
        name: "Alex Johnson",
        role: "Project Manager",
        image: "/images/testimonial-01.jpg",
      },
      {
        name: "Emma Lee",
        role: "React Developer",
        image: "/images/testimonial-02.jpg",
      },
      {
        name: "David Smith",
        role: "Backend Developer",
        image: "/images/testimonial-03.jpg",
      },
    ],
    clientFeedback:
      "Ras Shopping has transformed our online sales. The user-friendly interface and smooth checkout process have boosted our sales significantly.",
    technicalSpecs: [
      {
        name: "Frontend",
        value: "ReactJS, Redux, CSS Modules",
      },
      { name: "Backend", value: "Node.js, Express, MongoDB" },
      { name: "Payment Integration", value: "Stripe, PayPal" },
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

      <Section title="Features" content="Key Features of Ras Shopping">
        <ul className="list-disc pl-6 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="text-white/80">
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Screenshots" content="Explore Ras Shopping Platform">
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

      <Section
        title="Project Timeline"
        content="Development Phases of Ras Shopping"
      >
        <TimelineChart data={project.timelineData} />
      </Section>

      <Section title="Client Feedback" content="What Our Clients Say">
        <p className="text-white/80">{project.clientFeedback}</p>
      </Section>

      <Section title="Technical Specifications" content="Tech Stack">
        <ul className="list-disc pl-6 space-y-2">
          {project.technicalSpecs.map((spec, index) => (
            <li key={index} className="text-white/80">
              <strong>{spec.name}:</strong> {spec.value}
            </li>
          ))}
        </ul>
      </Section>

      {/* <Section title="Collaborators" content="Meet the Team">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.collaborators.map((collaborator, index) => (
            <div key={index} className="text-center">
              <Image
                src={collaborator.image}
                alt={collaborator.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-white font-semibold">{collaborator.name}</h4>
              <p className="text-white/80">{collaborator.role}</p>
            </div>
          ))}
        </div>
      </Section> */}
    </div>
  );
}

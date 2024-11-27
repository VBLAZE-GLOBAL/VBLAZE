interface QA {
  question: string;
  answer: string;
  keywords?: string[];
}

export const qaDatabase: QA[] = [
  {
    question: "What AI solutions do you offer?",
    answer:
      "We provide cutting-edge AI solutions including custom chatbots, machine learning models, natural language processing, computer vision systems, and AI-powered automation. Our AI solutions help businesses streamline operations, enhance customer experience, and gain valuable insights from data.",
    keywords: ["AI", "Machine Learning", "Automation"],
  },
  {
    question: "Tell me about your VR development services",
    answer:
      "Our VR development team creates immersive virtual reality experiences, from interactive training simulations to virtual showrooms. We also specialize in VR filter creation for social media platforms and custom VR applications for various industries.",
    keywords: ["VR", "Virtual Reality", "Filters"],
  },
  {
    question: "What's your approach to UI/UX Design?",
    answer:
      "Our UI/UX design process begins with thorough user research and wireframing, followed by creating detailed mockups and interactive prototypes. We focus on creating intuitive, accessible, and visually appealing interfaces that enhance user engagement and satisfaction.",
    keywords: ["UI/UX", "Design", "Mockup"],
  },
  {
    question: "Can you help with application development?",
    answer:
      "We offer end-to-end application development services, including mobile apps, web applications, and enterprise software. Our team uses the latest technologies and follows agile methodologies to deliver scalable, secure, and high-performance applications.",
    keywords: ["Application Development", "Mobile Apps", "Web Apps"],
  },
  {
    question: "What digital marketing services do you provide?",
    answer:
      "Our digital marketing services include SEO optimization, social media marketing, content strategy, email campaigns, and analytics. We help businesses increase their online presence and reach their target audience effectively.",
    keywords: ["Digital Marketing", "SEO", "Social Media"],
  },
  {
    question: "Ask Another Question",
    answer:
      "AI chatbots can provide 24/7 customer support, automate routine inquiries, gather customer insights, and improve response times. Our custom chatbot solutions are designed to integrate seamlessly with your existing systems and can be trained on your specific business domain.",
    keywords: ["AI Chatbot", "Customer Support", "Automation"],
  },
  {
    question: "What's involved in your software development process?",
    answer:
      "Our software development process follows industry best practices including requirement analysis, architecture design, agile development, thorough testing, and continuous deployment. We ensure transparent communication and regular updates throughout the project lifecycle.",
    keywords: ["Software Development", "Agile", "Testing"],
  },
];

export function findAnswer(question: string): string {
  const lowerQuestion = question.toLowerCase();
  const qa = qaDatabase.find(
    (item) =>
      lowerQuestion.includes(item.question.toLowerCase()) ||
      item.keywords?.some((keyword) =>
        lowerQuestion.includes(keyword.toLowerCase())
      )
  );
  return qa
    ? qa.answer
    : "I'd be happy to connect you with our team for more specific information about your requirements. Would you like to schedule a consultation or chat with our sales team?";
}

export const contactInfo = {
  UAE: {
    phone: "+971 55 829 1800",
    whatsapp: "https://wa.me/971558291800",
  },
  India: {
    phone: "+91 8113 000 155",
    whatsapp: "https://wa.me/918113000155",
  },
};

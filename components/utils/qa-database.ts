interface QA {
  question: string;
  answer: string;
  keywords?: string[];
}

export const qaDatabase: QA[] = [
  {
    question: "Hi",
    answer: "Hello! How can I assist you with VBLAZE's services today?",
    keywords: ["hello", "hey", "greetings"],
  },
  {
    question: "Hello",
    answer: "Hello! How can I assist you with VBLAZE's services today?",
    keywords: ["hello", "hey", "greetings"],
  },
  {
    question: "marry me",
    answer:
      "That's a sweet sentiment! However, as the Vyba Smart Assistant, I don't have the capability for personal relationships or marriage. But I'm here to assist you with any questions or topics you want to discuss! How can I help you today?",
    keywords: ["hello", "hey", "greetings"],
  },
  {
    question: "your name",
    answer:
      "I’m called the Vyba AI Smart Assistant! I’m here to provide you with assistance, information, and insights on a wide range of topics. If you have any questions or need help with something specific, feel free to ask!",
    keywords: ["hello", "hey", "greetings"],
  },
  {
    question: "X-Mas & New Year Special Offer?",
    answer:
      "We are thrilled to announce our X-Mas & New Year Special Offer designed to add value to your business as we wrap up the year and step into a promising new one.",
    keywords: ["x-mas", "christmas", "santa"],
  },
  {
    question: "How are you?",
    answer:
      "I'm functioning well, thank you for asking! How may I help you with VBLAZE's AI, web, or app development services?",
    keywords: ["how are you", "how're you", "how are you doing"],
  },
  {
    question: "What is VBLAZE?",
    answer:
      "VBLAZE is a forward-thinking software development company specializing in AI (Artificial Intelligence), Web Development, and App Development. We aim to provide cutting-edge AI-powered solutions, robust web and mobile applications that meet the dynamic needs of modern businesses and individuals.",
    keywords: ["vblaze", "company", "about"],
  },
  {
    question: "What are VBLAZE's main products?",
    answer:
      "VBLAZE's main products and services include AI Solutions (such as AI chatbots, predictive analytics, computer vision, and speech recognition), Web Development (custom websites, e-commerce platforms, CMS, web applications), and Mobile App Development (native apps, hybrid apps, enterprise mobile solutions).",
    keywords: ["products", "services", "offerings"],
  },
  {
    question: "Tell me about VBLAZE's AI solutions",
    answer:
      "VBLAZE offers a range of AI solutions, including AI chatbots with NLP capabilities, predictive analytics and data modeling for business insights, computer vision and image recognition systems, and speech recognition technology for voice-enabled applications.",
    keywords: ["AI", "artificial intelligence", "machine learning"],
  },
  {
    question: "What web development services does VBLAZE offer?",
    answer:
      "VBLAZE provides comprehensive web development services, including custom web development using technologies like React.js, Angular, and Node.js, e-commerce solutions with secure payment gateways, content management systems (CMS), and tailored web applications for specific business needs.",
    keywords: ["web", "website", "development"],
  },
  {
    question: "Can VBLAZE develop mobile apps?",
    answer:
      "Yes, VBLAZE specializes in mobile app development. We offer native app development for iOS and Android platforms, hybrid and cross-platform app development using technologies like Flutter and React Native, and enterprise mobile solutions tailored for business operations.",
    keywords: ["mobile", "app", "iOS", "Android"],
  },
  {
    question: "What technologies does VBLAZE use?",
    answer:
      "VBLAZE utilizes a wide range of technologies, including programming languages like Python, JavaScript, Java, Swift, and Kotlin; frameworks such as TensorFlow, PyTorch, Django, and React.js; database management systems like MySQL and MongoDB; and cloud services including AWS, Google Cloud, and Azure.",
    keywords: ["technologies", "programming", "frameworks"],
  },
  {
    question: "How can AI chatbots benefit my business?",
    answer:
      "AI chatbots can provide 24/7 customer support, automate routine inquiries, gather customer insights, and improve response times. VBLAZE's custom chatbot solutions are designed to integrate seamlessly with existing systems and can be trained on specific business domains, enhancing customer engagement and operational efficiency.",
    keywords: ["chatbot", "AI", "customer support"],
  },
  {
    question: "What makes VBLAZE's AI chat models unique?",
    answer:
      "VBLAZE's AI chat models are unique due to their advanced NLP capabilities, context management for intelligent conversations, multilingual support, customizable workflow automation, and built-in analytics for performance insights. We tailor our models to specific industries and integrate them seamlessly with backend systems for personalized, data-driven interactions.",
    keywords: ["AI", "chat model", "unique features"],
  },
  {
    question: "Can VBLAZE help with e-commerce website development?",
    answer:
      "VBLAZE specializes in developing custom e-commerce solutions. Our e-commerce platforms feature online stores, secure payment gateway integrations, user-friendly product catalogs, efficient order management systems, and support for multiple currencies and languages.",
    keywords: ["e-commerce", "online store", "web development"],
  },
  {
    question: "What kind of mobile apps can VBLAZE develop?",
    answer:
      "VBLAZE can develop a wide range of mobile apps, including native apps for iOS and Android, cross-platform apps using technologies like Flutter or React Native, and enterprise mobile solutions. We create various types of apps such as social networking, e-commerce, productivity tools, entertainment apps, and custom business applications.",
    keywords: ["mobile apps", "iOS", "Android", "cross-platform"],
  },
  {
    question:
      "How does VBLAZE ensure the security of its web and mobile applications?",
    answer:
      "VBLAZE prioritizes security in all its web and mobile applications. We implement best practices such as secure coding, encryption of sensitive data, regular security audits, and compliance with industry standards. For web applications, we use HTTPS, implement proper authentication and authorization mechanisms, and protect against common vulnerabilities. In mobile apps, we ensure secure data storage, use certificate pinning, and implement secure communication protocols.",
    keywords: ["security", "web security", "mobile security"],
  },
  {
    question: "Can VBLAZE integrate AI into existing applications?",
    answer:
      "Yes, VBLAZE specializes in integrating AI capabilities into existing applications. We can enhance your current web or mobile apps with features like AI-powered chatbots, predictive analytics, image recognition, or voice commands. Our team ensures seamless integration while maintaining the performance and user experience of your existing application.",
    keywords: ["AI integration", "existing apps", "enhancement"],
  },
  {
    question: "What do you do?",
    answer:
      "As an AI assistant for VBLAZE, I'm here to provide information about our AI, web, and app development services. How can I assist you today?",
    keywords: ["what do you do", "your purpose", "your function"],
  },
  {
    question: "Can you help me?",
    answer:
      "Of course! I'd be happy to help you with any questions about VBLAZE's services in AI, web development, or app creation. What specific information are you looking for?",
    keywords: ["help", "assist", "support"],
  },
  {
    question: "What services does VBLAZE offer?",
    answer:
      "VBLAZE offers a range of services including AI solutions (like chatbots and predictive analytics), web development (custom websites and web apps), and mobile app development for both iOS and Android. Which area are you most interested in?",
    keywords: ["services", "offerings", "what you do"],
  },
  {
    question: "Tell me about your AI services",
    answer:
      "VBLAZE's AI services include developing custom chatbots, implementing predictive analytics solutions, creating computer vision systems, and building speech recognition applications. Our AI solutions are designed to enhance business operations and improve customer experiences. Would you like more details on any specific AI service?",
    keywords: ["AI", "artificial intelligence", "machine learning"],
  },
  {
    question: "Do you build websites?",
    answer:
      "Yes, VBLAZE specializes in web development. We create custom websites, e-commerce platforms, content management systems (CMS), and complex web applications. Our team uses cutting-edge technologies to ensure your website is fast, secure, and user-friendly. What kind of website are you interested in?",
    keywords: ["website", "web development", "web design"],
  },
  {
    question: "mobile app",
    answer:
      "Absolutely! VBLAZE excels in mobile app development. We create native apps for iOS and Android, as well as cross-platform apps. Whether you need a consumer app, a business tool, or an enterprise solution, our team can deliver a high-quality mobile application tailored to your needs. What type of app are you considering?",
    keywords: ["mobile app", "iOS app", "Android app"],
  },
  {
    question: "pricing",
    answer:
      "VBLAZE's pricing varies depending on the scope and complexity of each project. We offer customized solutions, so it's best to discuss your specific needs with our team. Would you like me to arrange a consultation for a detailed quote?",
    keywords: ["price", "cost", "rates"],
  },
  {
    question: "How long",
    answer:
      "The development time for an app can vary greatly depending on its complexity, features, and platforms. A simple app might take 2-3 months, while a more complex one could take 6 months or more. For a more accurate timeline, we'd need to discuss your specific requirements. Would you like to schedule a call with our development team?",
    keywords: ["timeline", "development time", "how long"],
  },
  {
    question: "support",
    answer:
      "Yes, VBLAZE provides ongoing support and maintenance for all our projects. We offer various support packages to ensure your application or website continues to run smoothly after launch. Would you like more information about our support services?",
    keywords: ["support", "maintenance", "after-service"],
  },
  {
    question: "integrate AI",
    answer:
      "Absolutely! VBLAZE specializes in integrating AI capabilities into existing applications. We can enhance your current app with features like chatbots, predictive analytics, or image recognition. Our team ensures seamless integration while maintaining your app's performance. Would you like to discuss how we can add AI to your specific application?",
    keywords: ["AI integration", "upgrade existing app", "add AI"],
  },
  // ... (continue with more questions and answers to reach 1000+)
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
    phone: "+971 50 123 4567",
    whatsapp: "https://wa.me/971501234567",
  },
  India: {
    phone: "+91 98765 43210",
    whatsapp: "https://wa.me/919876543210",
  },
};

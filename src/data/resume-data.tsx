import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  mulearnlogo,
} from "@/images/logos"; // Ensure mulearnlogo is imported
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sravan S Nair",
  initials: "SSN",
  location: "Mavelikara, Allapuzha, Kerala",
  locationLink: "https://maps.app.goo.gl/pMrrjhKvn65y737d8",
  about: "A Learner Focused on Learning Business and Technology",
  summary:
    "Dedicated learner with a strong focus on merging business and technology. Proven adaptability, analytical skills, and commitment to ongoing professional development. Ready to contribute innovative insights to enhance efficiency at the nexus of business and technology.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "sravansnairofficial@gmail.com",
    tel: "+918130963211",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/livelysravan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sravan-s-nair-340b77213/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/livelysravan",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      College: "Sree Buddha College of Engineering",
      degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Gtech Mulearn",
      link: "https://mulearn.org/",
      badges: ["Hybrid"],
      title: "YIP Project Co-ordinator",
      logo: mulearnlogo, // Ensure this is defined or imported
      start: "June 2023",
      end: "August 2023",
      description:
        "Worked as YIP Project Intern to drive the expansion of Young Innovators Programme initiatives by conducting comprehensive orientation classes across multiple colleges. Engaged in proactive discussions and brainstorming sessions with key stakeholders within various Kerala government departments, focusing on identifying and addressing their operational challenges.",
    },
  ],
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "I talk well",
    "UI-UX",
    "SQL",
  ],
  projects: [
    {
      title: "Daily Progress Tracker",
      techStack: ["Side Project", "JavaScript", "HTML-CSS", "Mongo-Db"],
      description:
        "It's basically a Daily Success Tracker that asks if the scheduled task is completed or not and prompts for feedback. The feedback collected is then shown in a chart at the end of the week. It was developed to help me overcome my own procrastination, and it has been somewhat successful.",
    },
    {
      title: "AI Fitness Trainer",
      techStack: ["Side Project", "Python", "OpenCV", "HTML-CSS"],
      description:
        "AI fitness trainer employs cutting-edge OpenCV technology to monitor and analyze body movements during workouts. By accurately tracking repetitions and steps for a range of exercises, it offers personalized feedback on form and technique in real-time.",
    },
    {
      title: "Video Speech Language Translator",
      techStack: ["Side Project", "Python", "OpenCV", "Flask"],
      description:
        "This project pioneers a custom speech-to-speech translation system, seamlessly converting spoken Malayalam into English. Distinct from standard methods reliant on external APIs, we've engineered our solution using sequence-to-sequence (seq2seq) models. It covers audio extraction, transcription, translation, text-to-speech synthesis, and integrates into a Flask-based web app.",
    },
  ],
} as const;

export const basicPlanData = {
  name: "Basic",
  description: "Ideal starter plan",
  price: 290.67,
  discount: 36,
  buttonText: "Go Basic",
  features: [
    "Remove watermark",
    "Subtitles 12 hr/yr",
    "No Upload Size Limit",
    "Full HD 1080p Exports",
  ],
  isHighlighted: false,
};
export const proPlanData = {
  name: "Pro",
  description: "For pro video creation",
  price: 599,
  discount: 21,
  buttonText: "Go Pro",
  features: [
    "Subtitles 24 hr/yr",
    "Clean Audio",
    "Eye Contact Correction",
    "Stock Audio & Video Library",
    "Download Subtitles",
  ],
  isHighlighted: true,
};

export const businessPlanData = {
  name: "Business",
  description: "For up to 5 people",
  price: 1500,
  discount: 14,
  buttonText: "Go Business",
  features: [
    "AI Avatars 4 hr/yr",
    "Subtitles 134 hr/yr",
    "Translate to 50+ Languages",
    "Text to Speech 60 hr/yr",
    "Customizable Video Templates",
    "4k Export Quality",
  ],
  isHighlighted: false,
};

export const customPlanData = {
  name: "Enterprise",
  description: "Scale video across your team",
  price: "Let's Talk",
  buttonText: "Book a Demo",
  features: [
    "Personalized AI avatars",
    "Brand assets & templates",
    "Multiple workspaces",
    "Custom usage limits",
    "Creator training",
    "Account manager",
  ],
  isHighlighted: false,
};

export const downArrow = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    className="h-2.5 w-2.5 transition-transform duration-300 group-hover:rotate-180 group-hover:text-accent"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
  </svg>
);

export const product1 = {
  title: "Video Editor",
  description:
    "Create videos with a single click. Add subtitles, remove background noise and more",
};

export const product2 = {
  title: "Screen Recorder",
  description:
    "Automatically add subtitles to your videos. Super-fast, accurate transcriptions in seconds",
};

export const product3 = {
  title: "Subtitbles & Transcription",
  description:
    "Screen & webcam recordings that are easy to edit and share online",
};

export const forBusiness1 = {
  title: "VEED for Business",
  description: "Video for teams that require collaboration, access and privacy",
};

export const forBusiness2 = {
  title: "Security & Privacy",
  description: "Data privacy, SSO and more",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  role: string;
  impact: string;
};

export const projects: Project[] = [
  {
    title: 'AI-Powered Resume Builder',
    description:
      'A three-tier web application that helps job seekers improve ATS alignment with guided data entry, modern templates, and intelligent keyword-gap analysis.',
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'spaCy', 'Transformers', 'Rasa'],
    role: 'Frontend Lead & UI/UX Designer',
    impact: 'Average resume score improvement of +32 with a 100% ATS pass rate.',
  },
  {
    title: 'Brain Tumor Segmentation Tool',
    description:
      'A deep learning workflow for MRI-based tumor segmentation that translates clinical imagery into explainable, actionable insights.',
    tags: ['Python', 'PyTorch', 'Deep Learning', 'MRI', 'Computer Vision'],
    role: 'ML Developer',
    impact: 'Built an end-to-end prototype for medical imaging analysis.',
  },
  {
    title: 'MovieSent',
    description:
      'A sentiment-analysis system combining dual NLP approaches to classify user opinions and extract meaningful signals from text.',
    tags: ['Python', 'NLP', 'Sentiment Analysis', 'FastAPI'],
    role: 'Data Science Intern',
    impact: 'Delivered a robust dual-approach sentiment pipeline.',
  },
  {
    title: 'AI-Powered Cold Email Generator',
    description:
      'An LLM-assisted outreach tool designed to generate tailored contact emails with clearer messaging and improved personalization.',
    tags: ['Python', 'Prompt Engineering', 'Generative AI', 'Automation'],
    role: 'ML Intern',
    impact: 'Created a practical prototype for more effective outreach.',
  },
];

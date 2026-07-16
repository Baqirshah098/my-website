export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming & Databases',
    items: ['Python', 'C++', 'SQL', 'MATLAB', 'PostgreSQL', 'JavaScript (React.js)', 'HTML/CSS'],
  },
  {
    title: 'AI & ML',
    items: ['Machine Learning', 'Deep Learning', 'NLP (spaCy, Hugging Face)', 'Audio Signal Processing', 'Prompt Engineering', 'Generative AI'],
  },
  {
    title: 'Software Engineering',
    items: ['System Architecture', 'REST APIs (FastAPI)', 'Testing & Debugging', 'QA', 'UML Modeling', 'Tkinter GUI'],
  },
  {
    title: 'Data & Cloud',
    items: ['Data Engineering', 'Microsoft Azure', 'Data Preprocessing', 'Predictive Analytics'],
  },
  {
    title: 'Cybersecurity',
    items: ['Auditing', 'Ethical Hacking', 'Cisco Packet Tracer'],
  },
  {
    title: 'Soft Skills',
    items: ['Public Speaking', 'Scientific Writing', 'Creative Writing/Poetry', 'Problem Solving', 'Collaboration'],
  },
];

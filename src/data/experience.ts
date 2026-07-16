export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  rating?: string;
};

export const experience: Experience[] = [
  {
    title: 'Data Science (ML) Intern',
    company: 'Ezitech Institute',
    period: 'Aug 2025 – Oct 2025',
    location: 'Rawalpindi (Remote)',
    bullets: [
      'Built a brain tumor segmentation tool using deep learning on MRI scans.',
      'Developed MovieSent, a sentiment-analysis system with dual NLP approaches.',
      'Created an AI-powered cold email generator to improve outreach workflows.',
    ],
    rating: 'Very Good',
  },
  {
    title: 'Machine Learning / IT Intern',
    company: 'National Assembly of Pakistan',
    period: 'Jun 2025 – Aug 2025',
    location: 'Islamabad',
    bullets: [
      'Built an AI-based speaker recognition system for identifying MNAs and cabinet members from live audio.',
      'Designed audio pipelines with Python, Librosa, and PySoundFile for noisy environments.',
      'Used WebRTC VAD and deque-based buffering to improve speech detection accuracy.',
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export const education: EducationItem[] = [
  {
    degree: 'BS Software Engineering',
    institution: 'Sukkur IBA University',
    period: 'Fall 2022 – Present',
    details: 'CGPA 2.7. Coursework: DBMS, Information Security, Software Quality Engineering, Software Design & Architecture, Operations Research.',
  },
  {
    degree: 'HSSC (Pre-Engineering)',
    institution: 'Public School & College Shikarpur',
    period: '2020',
    details: 'B Grade (741/1100).',
  },
  {
    degree: 'SSC (Science)',
    institution: 'Galaxy Model School & College Shikarpur',
    period: '2018',
    details: 'A1 Grade (691/850).',
  },
];

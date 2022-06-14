interface Section {
  title: string;
  description: string;
  data?: any;
  colorClass: string;
  fontColor: string;
}

interface ContentWebsite {
  [index: string]: Section;
}

const contentSection: ContentWebsite = {
  aboutMe: {
    title: 'About me',
    description: `Hello guys... \n -- I'm Andres Florez as engineer that love beer, coding, travel and dream to become a DJ's some day`,
    data: {},
    colorClass: 'bg-primary-100',
    fontColor: 'text-primary-900',
  },
  myPassions: {
    title: 'My passions',
    description: `Dream to become to...`,
    data: {
      dreams: [
        { title: 'soccer' },
        { title: 'travel' },
        { title: 'festivals' },
        { title: 'dj' },
      ],
    },
    colorClass: 'bg-primary-400',
    fontColor: 'text-primary-900',
  },
  engineeringProcess: {
    title: 'Engineering process',
    description: `All steps to build a competetive website`,
    data: {
      phases: [
        { title: 'ideation' },
        { title: 'setup' },
        { title: 'c4 models' },
        { title: 'implementation' },
      ],
    },
    colorClass: 'bg-primary-100',
    fontColor: 'text-primary-900',
  },
  contactMe: {
    title: 'Contact me (?)',
    description: `All steps to build a competetive website`,
    data: {
      information: [
        { title: 'cellphone', value: 3197232650 },
        { title: 'linkedin', value: 'https://wwww.linkedin.com' },
      ],
    },
    colorClass: 'bg-primary-900',
    fontColor: 'text-primary-100',
  },
};

export default contentSection;

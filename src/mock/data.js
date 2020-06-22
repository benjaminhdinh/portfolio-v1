import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a software engineering student based in Silicon Valley, specializing in full-stack development.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'benjamindinh909@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv4(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv4(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/benjamin-dinh/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/benjamin-dinh',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Benjamin Dinh', 
  lang: 'en',
  description: "Welcome to my website!", 
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Benjamin',
  subtitle: 'I am a developer!',
  cta: 'Learn more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a software engineering student based in Silicon Valley, specializing in full-stack development.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1gcHcfZugDA7305ATUEJE0Ev-qfPJkUFo/view?usp=sharing', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'project1.png',
    title: 'UC Davis Graduate Yearbook 2020',
    info: 'Built a website that allows graduates to upload personal profiles to display on a yearbook website. Involved APIs, databases, Google log-ins, and image uploads. Coded the front-end with React and the back-end with Express.',
    info2: '',
    url: 'https://hazel-boundless-yearbook.glitch.me',
    repo: 'https://github.com/benjamin-dinh/yearbook', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'project2.png',
    title: 'Postcard Creator',
    info: 'Created a web application where users can create personal postcards with custom fonts, colors, messages, and image uploads. Dealt with browser-side with basic HTML/CSS/Javascript and server-side programming with Express.',
    info2: '',
    url: 'https://foggy-climbing-carob.glitch.me/',
    repo: 'https://github.com/benjamin-dinh/postcard-database-implementation', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'project3.png',
    title: 'Stephan Kaltenbach Exhibit',
    info: 'Front-end project for an exhibit at the UC Davis Manetti Shrem Museum of Art. Learned how to implement a carousel slideshow and usable buttons on the webpage. Finetuned CSS skills through this simple webpage.',
    info2: '',
    url: 'https://shore-conscious-supply.glitch.me/',
    repo: 'https://github.com/benjamin-dinh/museum-website', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to reach out to me?',
  btn: "Send me an email",
  email: 'benjamindinh909@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
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

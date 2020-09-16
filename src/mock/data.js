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
  subtitle: 'I am a software developer!',
  cta: 'Learn more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a software engineering student based in Silicon Valley.',
  paragraphTwo: 'My goal is to develop technology that can not only solve problems but also deliver unique experiences. Currently, I am exploring the interdisciplinary field of network analysis under the UC Davis Social and Political Interacting Networks research group where I contribute code to the Maoz Network Program.',
  paragraphThree: 'Away from the computer, you can find me cooking up yummy meals, browsing through YouTube, or exploring hiking trails. I love trying new things!',
  // resume: 'https://drive.google.com/file/d/12RGZN1ZWXFLfBdvNH6nz2mMuberIKR4H/view?usp=sharing', 
  resume: 'BenjaminDinh2020.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'project4.jpg',
    title: 'AggieFeed',
    info: 'Built an Android app that accessed a REST API to render the university’s newsfeed, AggieFeed, where any element can be tapped on to show a more detailed view.',
    info2: 'Overview: Kotlin, OkHTTP, GSON',
    url: 'https://drive.google.com/file/d/1vH078U3TXIbzWwnw4dqZkSJPtS7ijEUe/view?usp=sharing',
    repo: 'https://github.com/benjamin-dinh/IETAndroidAppProject', 
  },
  {
    id: uuidv4(),
    img: 'project1.png',
    title: 'UC Davis Graduate Yearbook',
    info: 'Built a website that allows graduates to upload personal profiles to display on a yearbook website.',
    info2: 'Overview: Figma, React, Express, Google Log-In Authentication, Flickr API',
    url: 'https://hazel-boundless-yearbook.glitch.me',
    repo: 'https://github.com/benjamin-dinh/yearbook', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'project2.png',
    title: 'Postcard Creator',
    info: 'Created a web application where users can create personal postcards with custom fonts, colors, messages, and image uploads.',
    info2: 'Overview: HTML, CSS, Javascript, Express',
    url: 'https://foggy-climbing-carob.glitch.me/',
    repo: 'https://github.com/benjamin-dinh/postcard-database-implementation', // if no repo, the button will not show up
  },
  // {
  //   id: uuidv4(),
  //   img: 'project3.png',
  //   title: 'Stephan Kaltenbach Exhibit',
  //   info: 'Front-end project for an exhibit at the UC Davis Manetti Shrem Museum of Art. Learned how to implement a carousel slideshow and usable buttons on the webpage.',
  //   info2: 'Overview: HTML, CSS, Javascript',
  //   url: 'https://shore-conscious-supply.glitch.me/',
  //   repo: 'https://github.com/benjamin-dinh/museum-website', // if no repo, the button will not show up
  // },
  {
    id: uuidv4(),
    img: 'behance.jpg',
    title: 'Side Hobby: Art',
    info: 'In my free time, I make art! From painting to graphic design, I use a variety of mediums to create fun pieces.',
    info2: '',
    url: 'https://www.behance.net/gallery/99370465/Personal-Art',
    repo: '', // if no repo, the button will not show up
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
      name: 'behance',
      url: 'https://www.behance.net/benjamin-dinh',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/benjamin-dinh',
    },
  ],
};


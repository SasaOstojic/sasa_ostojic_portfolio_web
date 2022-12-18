// import images
import Hero_person from "./assets/images/Hero/sasa_image.png";

import figma from "./assets/images/Skills/figma.png";
import js from "./assets/images/Skills/js.png";
import wp from "./assets/images/Skills/wordpress.jpeg";
import reactjs from "./assets/images/Skills/react.png";
import reactnative from "./assets/images/Skills/reactnative.png";
import php from "./assets/images/Skills/php.jpeg";
import bootstrap from "./assets/images/Skills/bootstrap.jpeg";
import sass from "./assets/images/Skills/sass.png";
import tailwind from "./assets/images/Skills/index.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/imlek_kravica.jpeg";
import project2 from "./assets/images/Projects/travel.png";
import project3 from "./assets/images/Projects/audio.jpeg";
import project4 from "./assets/images/Projects/smartcat.png";
import project5 from "./assets/images/Projects/crveni.png";
import person_project from "./assets/images/Projects/sasa_image.png";

import avatar1 from "./assets/images/Testimonials/uros.png";
import avatar2 from "./assets/images/Testimonials/milan.png";
import avatar3 from "./assets/images/Testimonials/jovana.png";
import avatar4 from "./assets/images/Testimonials/sinisa.png";

import Hireme_person from "./assets/images/Hireme/sasa_image.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Sasa",
    LastName: "Ostojic",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in Web development",
      },
      {
        count: "10+",
        text: "Projects worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      
      {
        name: "Javascript",
        para: "I have been using Javascript in my React and Wordpress projects mostly on DOM manipulation, creating beautiful sliders, modals, popups an adding logic to changing behaviuor of certain elements.",
        logo: js,
      },
      {
        name: "React",
        para: "Currently my focus is on learning React with Redux. I have created several React projects with extern API communication, login systems, communication with Firebase, filtering and searching functionalities, amazing sliders and implemented some very interesting libraries to find excellent UX.",
        logo: reactjs,
      },
      {
        name: "WordPress",
        para: "Wordpress was my top focus for the past two years. Mostly my professional experience was tied to WP creating fullstack custom websites with zero page builders involved. Pure JS and PHP development. I have 4 full custom WordPress project deployed live on Internet that you can check in the section bellow. You should deffinetely checked it. Websites are loading less than 0.5s in your browser. They have live search functionality, blog sections, numerous pages, sliders, mega menus, category tabs and much more. They are fully backed by PHP",
        logo: wp,
      },
      {
        name: "PHP",
        para: "PHP is my second language that I'm improving on daily basis. My PHP knowledge is mainly tied to Wordpress for creating beautiful themes and content management.",
        logo: php,
      },
      {
        name: "React Native",
        para: "I have one cross platform React Native project that you can download on the App store. It is informative project that you can find very helpfull.",
        logo: reactnative,
      },
      {
        name: "Bootstrap",
        para: "I have been using bootstrap to boost my fontend development in various projects when I hve common usecase. Mostly using for Grid, Containers, Modals, Cards and responsive layout",
        logo: bootstrap,
      },
      {
        name: "Tailwind",
        para: "Tailwind is very usefull technology that I'm currently interested in and I have been using this CSS framework in a few projects and helped me a lot to create nice looking layouts and fast. My personal porfolio website is bases on Tailwind so it's definitely worth checking.",
        logo: tailwind,
      },
      {
        name: "Sass",
        para: "I'm using Sass on a daily basis and it is life saviour when it comes to writing css. ",
        logo: sass,
      },
      {
        name: "Figma",
        para: "When it comes to extracting images, typography and reading a design, Figma and Zeplin definitely comes to play.",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Throw on me any design and I will build it using HTML, CSS, Javascript and React!",
        logo: services_logo1,
      },
      {
        title: "Custom Wordpress Theme building (PHP, JS, SASS)",
        para: "Im building full functional custom wordpress themes in PHP and Javascript without any kind of page builders. Pure coding. You have design, I have knowledge. Let's do it!",
        logo: services_logo2,
      },
      {
        title: "REACT Projects",
        para: "I love working in React, so I enjoy developing websites using this technology using Redux, SASS, Bootstrap or Tailwind.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Imlek Moja Kravica",
        image: project1,
        link: 'https://www.imlek.rs/jogurt-moja-kravica/'
      },
      {
        title: "Travel House",
        image: project2,
        link: 'https://www.travelhouse.rs/'
      },
      {
        title: "Audiovox",
        image: project3,
        link: 'https://audiovox.rs/'
      },
      {
        title: "SmartCat",
        image: project4,
        link: 'https://smartcat.io/'
      },
      {
        title: "Crveni Krst Beograd",
        image: project5,
        link: 'https://play.google.com/store/apps/details?id=rs.org.crvenikrst011.prvapomoc&hl=en&gl=US'
      },
     
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“ Fully dedicated developer on any pace. That is why my future project I dedicate to Sasa like my previous one..”",
        img: avatar1,
        name: "Uros Orolic",
      },
      {
        review:
          "“We are in developing stage of my new website about selling and maintaining cars... I'm more than satisfied about our daily communication!”",
        img: avatar2,
        name: "Milan Kostic",
      },
      {
        review:
          "“My project went live recently, website is so fast and functionality works very well as I expected! ”",
        img: avatar3,
        name: "Jovana Markovic",
      },
      {
        review:
          "“Sasa is very skilled developer. Nothing more, nothing less...”",
        img: avatar4,
        name: "Sinisa Stefanovic",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    para: "If you are looking for developer that will turn your plans and design in full functional website on wich you can rely your bussines on, feel free to contact me.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sasa_ostojic88@hotmail.com",
        icon: GrMail,
        link: "mailto:sasa_ostojic88@hotmail.com",
      },
      {
        text: "+381649917674",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};


import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import NavBar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'

import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosBrush } from "react-icons/io";
import { TbPaintFilled } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa6";
import { PiShareNetworkFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import GraphicDesign from './components/GraphicDesign/GraphicDesign'
import UiUx from './components/UiUx/UiUx'
import Coding from './components/Coding/Coding'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {

  const navbarInfo = {
  logo : '/',
  brand : 'Haidar Ghanem',
  links : [ 
      {
      text : 'Home' ,
      href : 'hero__container'
      },
      {
      text : 'About',
      href : 'about__container'
      },
      {
      text : 'Services' ,
      href : 'services__container'
      },
      {
      text : 'Skills',
      href : 'skills__container'
      },
      {
      text : 'Projects' ,
      href : 'graphic__container'
      },
      {
      text : 'Contact',
      href : 'contact__container'
      } 
  ]
  }
  const heroInfo = {
    welcome : "hello, I'm",
    name : "Haidar Ghanem",
    role : "Fullstack MERN developer",
    hireBtn : "Hire me !",
    cvBtn : "Download My CV",
    character : "images/logo.svg",
    alt : "Haidar",
    links : [
      {
        url : "https://www.facebook.com/profile.php?id=61564105944315",
        icon : <FaFacebookF />
      },
      {
        url : "https://www.instagram.com/haidarghanem23?igsh=ZnhreXdleHE2ZXA5",
        icon : <RiInstagramFill />
      },
      {
        url : "https://www.linkedin.com/in/haidar-ghanem",
        icon : <FaLinkedinIn />
      },
      {
        url : "https://github.com/HaidarGhanem",
        icon : <TbBrandGithubFilled />
      }
    ]
  }
  const aboutInfo = {
    img : 'images/me.png',
    alt : 'Haidar Ghanem',
    name : 'Haidar Ghanem',
    role : 'IT Engineer',
    text : "I'm a multifaceted freelancer who thrives at the intersection of creativity and technology. As a graphic designer, ensuring every pixel tells a story. With a strong foundation in UI/UX . As a full-stack web developer, I transform those designs into dynamic websites, seamlessly integrating front-end aesthetics with robust back-end functionality. I'm also a network engineer, ensuring that the digital landscape is not just beautiful but functional and secure.",
    fire : " Let's collaborate on your next project and turn your ideas into a stunning reality!",
    cvBtn : 'Download My CV',
    contactBtn : 'Contact Now !'
  }
  const servicesInfo = [
    {
      icon : <IoIosBrush /> ,
      title : 'Graphic Design',
      text : '+4 years as graphic designer branding & rebranding using adobe Photoshop & adobe Illustrator'
    },
    {
      icon : <TbPaintFilled /> ,
      title : 'Ui / Ux',
      text : '+3 years merging my graphics design skills to give a new User Interface & Experience touch'
    },
    {
      icon : <MdOutlineWeb /> ,
      title : 'MERN stack',
      text : '+3 years MERN developer , still on fire improving my skills to master it with all passion'
    },
    {
      icon : <FaNodeJs /> ,
      title : 'Node.js Developer',
      text : '+3 years back-end developer , its all started with Node.js until it became my only weapon'
    },
    {
      icon : <FaReact /> ,
      title : 'React.js Developer',
      text : '+2 years front-end developer , turning my desings into interactive real client side applications'
    },
    {
      icon : <PiShareNetworkFill /> ,
      title : 'Network Automation',
      text : 'improving networking as a network engineer is my goal by automating tasks & enhancing performance'
    }
  ]
  const skillsInfo = [
    {
      name : 'Node.js',
      score : '95%'
    },
    {
      name : 'React.js',
      score : '75%'
    },
    {
      name : 'Graphic Design',
      score : '92%'
    },
    {
      name : 'Ui / Ux',
      score : '90%'
    },
    {
      name : 'Networking',
      score : '96%'
    },
    {
      name : 'Python',
      score : '67%'
    },
  ]
  const graphicInfo = [
    {
      img : 'images/Design/1.png',
      type : 'small'
    },
    {
      img : 'images/Design/1-1.png',
      type : 'big'
    },
    {
      img : 'images/Design/1-2.png',
      type : 'big'
    },
    {
      img : 'images/Design/1-3.png',
      type : 'small'
    },
    {
      img : 'images/Design/1-4.png',
      type : 'big'
    },
    {
      img : 'images/Design/2.png',
      type : 'big'
    },
    {
      img : 'images/Design/2-1.png',
      type : 'big'
    },
    {
      img : 'images/Design/2-2.png',
      type : 'big'
    },
    {
      img : 'images/Design/3.png',
      type : 'small'
    },
    {
      img : 'images/Design/3-1.png',
      type : 'small'
    },
    {
      img : 'images/Design/4.png',
      type : 'small'
    },
    {
      img : 'images/Design/5.png',
      type : 'small'
    },
    {
      img : 'images/Design/5-1.png',
      type : 'small'
    },
    {
      img : 'images/Design/5-2.png',
      type : 'small'
    },
    {
      img : 'images/Design/6.png',
      type : 'small'
    },
    {
      img : 'images/Design/6-1.png',
      type : 'small'
    },
    {
      img : 'images/Design/7.png',
      type : 'small'
    },
    {
      img : 'images/Design/7-1.png',
      type : 'small'
    },
    {
      img : 'images/Design/7-2.png',
      type : 'small'
    },
    {
      img : 'images/Design/7-3.png',
      type : 'small'
    },
    {
      img : 'images/Design/7-4.png',
      type : 'small'
    },
    {
      img : 'images/Design/8.png',
      type : 'small'
    },
    {
      img : 'images/Design/9.png',
      type : 'small'
    },
    {
      img : 'images/Design/9-1.png',
      type : 'small'
    },
    {
      img : 'images/Design/9-2.png',
      type : 'small'
    },
    {
      img : 'images/Design/10.jpg',
      type : 'small'
    },
    {
      img : 'images/Design/10-1.jpg',
      type : 'small'
    },
    {
      img : 'images/Design/11.png',
      type : 'small'
    },
    {
      img : 'images/Design/11-1.jpg',
      type : 'small'
    },
    {
      img : 'images/Design/12.png',
      type : 'small'
    },
    {
      img : 'images/Design/12-1.png',
      type : 'small'
    },
    {
      img : 'images/Design/12-3.png',
      type : 'small'
    },
    {
      img : 'images/Design/14.png',
      type : 'small'
    },
    {
      img : 'images/Design/15.png',
      type : 'small'
    },
    {
      img : 'images/Design/16.jpg',
      type : 'small'
    },
    {
      img : 'images/Design/17.png',
      type : 'small'
    },
    {
      img : 'images/Design/17-1.png',
      type : 'small'
    },
    {
      img : 'images/Design/17-2.png',
      type : 'small'
    },
    {
      img : 'images/Design/17-3.png',
      type : 'small'
    },
    {
      img : 'images/Design/17-4.png',
      type : 'small'
    },
    {
      img : 'images/Design/17-5.png',
      type : 'small'
    }

  ]
  const uiInfo = [
    {
      img : 'images/UiUx/Home.png'
    },
    {
      img : 'images/UiUx/Menu.png'
    },
    {
      img : 'images/UiUx/Offer.png'
    },
    {
      img : 'images/UiUx/Buying.png'
    },
    {
      img : 'images/UiUx/Palette.png'
    },
    {
      img : 'images/UiUx/Android Large - 1.png'
    },
    {
      img : 'images/UiUx/Android Large - 2.png'
    },
    {
      img : 'images/UiUx/Android Large - 3.png'
    },
    {
      img : 'images/UiUx/Android Large - 4.png'
    },
    {
      img : 'images/UiUx/Android Large - 5.png'
    },
    {
      img : 'images/UiUx/Android Large - 6.png'
    },
    {
      img : 'images/UiUx/Android Large - 7.png'
    },
    {
      img : 'images/UiUx/Android Large - 8.png'
    },
    {
      img : 'images/UiUx/Android Large - 9.png'
    },
    {
      img : 'images/UiUx/Android Large - 10.png'
    },
    {
      img : 'images/UiUx/Android Large - 12.png'
    },
  ]
  const codingInfo = [
    {
      icon : <FaNodeJs />,
      tech : 'backend | node.js',
      title : 'Personal Blog',
      desc : 'full posters website application APIs login / signup , CRUD blogs using MongoDB',
      url : 'https://github.com/HaidarGhanem/Personal-Blog-Node.js-MnogoDB'
    },
    {
      icon : <FaNodeJs />,
      tech : 'backend | node.js',
      title : 'JWT Authentication',
      desc : 'authentication project with node.js and mongodb using JOI for validation and JWT for making tokens',
      url : 'https://github.com/HaidarGhanem/JWT_authenticationV2'
    },
    {
      icon : <FaNodeJs />,
      tech : 'backend | node.js',
      title : 'Authentication V1 Session',
      desc : 'authentication project with node.js and mongodb using ejs for layouts also made sessions functionality',
      url : 'https://github.com/HaidarGhanem/Authentication-Node-Mongo'
    },
    {
      icon : <FaNodeJs />,
      tech : 'backend | node.js',
      title : 'News Blog API',
      desc : 'node.js project using ejs layout and fetching news from external api to be displayed',
      url : 'https://github.com/HaidarGhanem/News-Blog-API-Nodejs'
    },
    {
      icon : <FaReact />,
      tech : 'frontkend | react.js',
      title : 'Medical Landing Page',
      desc : 'full react project using react and ract-bootrap to make complete dynamic and responsive website',
      url : 'https://HaidarGhanem.github.io/React_Medical_Website'
    },
    {
      icon : <PiShareNetworkFill />,
      tech : 'networking',
      title : 'Network Automation',
      desc : "using Python scripts to automate network's tasks , preparing APIs using node.js",
      url : 'https://github.com/HaidarGhanem/NetworkDashboard'
    },
  ]
  const contactInfo = {
    location : 'Syria - Tartus',
    phone : '+963 934 937 147',
    gmail : 'haidar23ghanem@gmail.com'
  }

  return (
    <>
      {navbarInfo && <NavBar navbarInfo={navbarInfo} /> }
      <Hero heroInfo={heroInfo}/>
      <About aboutInfo={aboutInfo} />
      <Services servicesInfo={servicesInfo}/>
      <Skills skillsInfo={skillsInfo}/>
      <GraphicDesign  graphicInfo={graphicInfo}/>
      <UiUx uiInfo={uiInfo} />  
      <Coding codingInfo={codingInfo}/> 
      <Contact contactInfo={contactInfo} />
      <Footer />
    </>
  )
}

export default App

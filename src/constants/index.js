import {
  FaHome,
  FaFileAlt,
  FaConfluence,
  FaPiedPiperSquare,
  FaDna,
  FaPhone,
  FaMap,
  FaMailBulk,
  FaServicestack,
  FaLanguage,
  FaUser,
  FaPlay,
} from 'react-icons/fa';
import HomePage from '../pages/Home';
import ContactPage from '../pages/Contact';
import PortofolioPage from '../pages/Portofolio';
import PublicationsPage from '../pages/Publications';
import ResumePage from '../pages/Resume';
import backend from '../assets/backend.png';
import mobile from '../assets/mobile.png';
import web from '../assets/web.png';
import hrdash from '../assets/hrdash.png';
import mywebsite from '../assets/mywebsite.png';
import nbdash from '../assets/nbdash.png';
import ode from '../assets/ode.png';
import odeon from '../assets/odeon.png';
import odsag from '../assets/odsag.png';
import promptopia from '../assets/promptopia.png';
import qualityogd from '../assets/qualityogd.png';
import storedash from '../assets/storedash.png';
import storyogd from '../assets/storyogd.png';
import citizenapps from '../assets/citizenapps.png';

export const navLinks = [
  {
    id: 'home',
    name: 'Home',
    icon: FaHome,
    path: '/',
    page: HomePage,
  },
  {
    id: 'resume',
    name: 'Resume',
    icon: FaFileAlt,
    path: '/resume',
    page: ResumePage,
  },
  {
    id: 'portofolio',
    name: 'Portofolio',
    icon: FaConfluence,
    path: '/portofolio',
    page: PortofolioPage,
  },
  {
    id: 'publications',
    name: 'Publications',
    icon: FaPiedPiperSquare,
    path: '/publications',
    page: PublicationsPage,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: FaDna,
    path: '/contact',
    page: ContactPage,
  },
];

export const aboutMe = `I have earned two Masters degrees
in Computer Science from the University of La Rochelle and the University of
Vietnam, as well as an engineer degree in Telecommunications from the
University of Abomey Calavi. Currently, I am pursuing a PhD, where I am creating
automated tools to facilitate citizens' utilization of open government data. My
extensive background in information technology encompasses a broad range of IT
development areas, such as web application development, mobile application
development, desktop application development, ERP development and ETL applications.
Furthermore, I have led a team of 12 developers using the agile method.`;

export const personalInfo = [
  {
    icon: FaUser,
    title: 'FullName',
    details: 'Abiola Paterne CHOKKI',
    color: 'primary',
    link: '',
  },
  {
    icon: FaPhone,
    title: 'Phone',
    details: '+32 491 33 73 96',
    color: 'primary',
    link: 'tel:+32491337396',
  },
  {
    icon: FaMap,
    title: 'Location',
    details: 'Namur, Belgium',
    color: 'secondary',
    link: '',
  },
  {
    icon: FaMailBulk,
    title: 'Mail',
    details: 'cpeterabiola@gmail.com',
    color: 'green-light',
    link: 'mailto:cpeterabiola@gmail.com',
  },
  {
    icon: FaLanguage,
    title: 'Languages',
    details: 'French (Native Language), English (B2)',
    color: 'green-light',
    link: '',
  },
  {
    icon: FaPlay,
    title: 'Hobbies',
    details: 'Movies, Music, Cooking',
    color: 'primary',
    link: '',
  },
];

export const services = [
  {
    icon: FaServicestack,
    title: 'Web Development',
    details:
      'Develop web applications using Django, Laravel, React, Nextjs, Angular, Wordpress',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Mobile Development',
    details: 'Develop mobile applications using Ionic, Flutter',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Ecommerce Development',
    details: 'Develop ecommerce applications using Wordpress and Woocommerce',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Data Engineering',
    details:
      'Collect, clean, check quality your data and make them available for analysis',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Data Science',
    details: 'Convert your data into insightful stories',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Chatbot Integration',
    details: 'Creation of chatbot on your own data',
    color: 'gray-light',
  },
];

export const experiences = [
  {
    title: 'Researcher in Data Storytelling with OGD',
    company_name: 'Faculty of Computer Science, UNamur , Belgium',
    icon: backend,
    iconBg: '#383E56',
    date: 'December 2019 - November 2023',
    points: [
      `Collaborated with diverse OGD stakeholders in Wallonia, encompassing municipal authorities, infomediaries, and citizens, to gather their specific needs.`,
      `Gained proficiency in ETL processes and created a comprehensive and
      versatile data storytelling tool, similar to Tableau, using Django, Angular,
      Plotly Pandas, and PostgreSQL. This tool was designed to facilitate a rapid
      comprehension of open government data for OGD stakeholders.`,
      `Proficiently documented stakeholder requirements, further disseminating
      insights through 10 scientific publications.`,
    ],
  },
  {
    title:
      'Assistant for Python programming course & Member of the faculty council',
    company_name: 'Faculty of Computer Science, UNamur , Belgium',
    icon: backend,
    iconBg: '#383E56',
    date: '2022 - 2023',
    points: [
      `Conducting programming practical sessions for students within the faculty.`,
      `Offering tailored assistance to students struggling with comprehension.`,
    ],
  },
  {
    title: 'Co-Founder',
    company_name: 'AhoueFa.com, Benin',
    icon: backend,
    iconBg: '#383E56',
    date: '2020 - Present',
    points: [
      `Designed and implemented AhoueFa's web and mobile platforms using Wordpress, Java, and MySQL, facilitating connections between real estate agencies, customers, buyers, sellers, and service providers.`,
      `Shaped AhoueFa’s marketing strategy with Facebook Ads, successfully accumulating 10,000 classified listings and 8,000 real estate properties to date.`,
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company_name: 'Freelance',
    icon: backend,
    iconBg: '#383E56',
    date: '2016 - Present',
    points: [
      `Designed, developed, and sustained web, mobile, and ERP solutions tailored to client needs, leveraging tools like Yii, Laravel, Vue, Ionic, React, Odoo (Python), Wordpress, MySQL, and PostgreSQL.`,
      `Led a 12-member team of developers and testers within a SCRUM environment to implement the University of Laos' management system.`,
      `Designed and sustained a Human Resources Management System for Nam Theun 1 Power Company using Odoo and PostgreSQL.`,
      `Configuring and managing CPanel or VPS hosting for various web projects.`,
      `Configuring and managing Google Play and Apple Store hosting for mobile projects.`,
      `Writing documentation and manuals and training end users.`,
    ],
  },
  {
    title: 'IT Consultant',
    company_name: 'Sysmatik IT Solution, Laos',
    icon: web,
    iconBg: '#383E56',
    date: 'November 2018 - November 2019',
    points: [
      `Engineered and sustained the firm's in-house and client projects, encompassing E-commerce platforms, payment gateways, delivery systems, and websites with Laravel, Vue, Ionic, WordPress, and MySQL.`,
      `Conduct a study on banking systems and supervise the development of the mobile application of BIC Laos bank.`,
      `Led a team of 3 developers in a SCRUM environment.`,
      `Meeting with clients to obtain their needs.`,
      `Analyzing and identifying appropriate technologies to use.`,
      `Designing project databases.`,
      `Building development teams for different projects.`,
      `Developing key modules for each project.`,
      `Supervising the work done by developers.`,
      `Ensuring that designs conform to specifications.`,
      `Configuring and managing CPanel hosting.`,
      `Configuring firewall and SSL to secure hosting access.`,
    ],
  },
  {
    title: 'ERP (Odoo) Project Manager',
    company_name: 'Cyberia, Laos',
    icon: web,
    iconBg: '#383E56',
    date: 'October 2014 - November 2018',
    points: [
      `Develop and maintain ERP, mobile and web applications based on client requirements using Odoo, Yii, Ionic, MySQL, and PostgreSQL.`,
      `Spearheaded full project lifecycles, from requirement analysis to implementation and training.`,
      `Manage a team of 5 developers using SCRUM method.`,
      `Pioneered internal products, boosting the software department's revenue by 20% initially, with consistent yearly growth of 5-10%.`,
      `Meeting clients to obtain their requirements.`,
      `Analyzing and identifying appropriate modules to use in the case of ERP projects.`,
      `Writing reports on internal and external project specifications.`,
      `Designing project databases.`,
      `Implementing applications from scratch or customizing existing ones.`,
      `Contributing to all phases of the project implementation lifecycle.`,
      `Writing well designed, testable, and efficient code.`,
      `Ensuring designs conform to specifications.`,
      `Writing manuals and training end users.`,
      `Configuring and managing CPanel and Cloud hosting (for ERP projects).`,
      `Configuring firewall and SSL to secure hosting access.`,
      `Writing batch scripts for daily data backup and securing hosting access..`,
    ],
  },
  {
    title: 'End of Master degree internship',
    company_name: 'University Toulouse 1, France',
    icon: mobile,
    iconBg: '#383E56',
    date: 'October 2014 - November 2018',
    points: [
      `Propose and implement a solution allowing the generation of localized synthetic population from aggregated data using JAVA and the GAMA simulator.`,
    ],
  },
  {
    title: 'Assistant to the General Manager and Application Developer',
    company_name: 'HESystems, Benin',
    icon: web,
    iconBg: '#383E56',
    date: 'March 2012 - September 2012',
    points: [
      `Write bidding documents for tenders.`,
      `Develop and maintain web and Windev applications.`,
    ],
  },
  {
    title: 'End of engineering degree internship',
    company_name: 'LETIA/UAC(University of Abomey-Calavi), Benin',
    icon: mobile,
    iconBg: '#383E56',
    date: 'August 2011 - February 2012',
    points: [
      `Propose and implement an improved version of the AODV protocol to enable mobility in hybrid networks using C++ and the NS2 simulator.`,
    ],
  },
];

export const educations = [
  {
    title: 'PhD in Computer Science',
    university: 'University of Namur, Belgium',
    date: '2019 - 2023',
  },
  {
    title: 'Master degree in Interactive Systems Engineering',
    university: 'University of Rochelle, France',
    date: '2012 - 2014',
  },
  {
    title: 'Master degree in Intelligent Systems and Multimedia',
    university: 'International Francophone Institute, Vietnam',
    date: '2012 - 2014',
  },
  {
    title: 'Engineer degree in Computer Engineering and Telecommunications',
    university: 'University of Abomey Calavi, Benin',
    date: '2006 - 2011',
  },
];

export const skills = [
  {
    title: 'Frontend',
    details: ['Angular', 'Vue', 'React', 'HTML/CSS', 'JavaScript', 'JQuery'],
  },
  {
    title: 'Backend',
    details: [
      'Django',
      'Lavarel',
      'Yii',
      'Node',
      'Express',
      'NextJS',
      '.NET',
      'JSP',
      'Spring',
    ],
  },
  {
    title: 'Mobile',
    details: ['Ionic', 'Flutter'],
  },
  {
    title: 'ERP',
    details: ['Odoo'],
  },
  {
    title: 'CMS',
    details: ['Wordpress', 'Joomla'],
  },
  {
    title: 'Programming languages',
    details: ['Python', 'PHP', 'Java', 'C#'],
  },
  {
    title: 'Databases',
    details: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Data analysis and visualization tools',
    details: [
      'Pandas',
      'Numpy',
      'Plotly',
      'HighCharts',
      'Tableau',
      'Power BI',
      'Excel (Power View)',
    ],
  },
  {
    title: 'Data management skills',
    details: [
      'Data collection',
      'Data processing',
      'Data quality',
      'Data visualization',
      'Data storytelling',
    ],
  },
  {
    title: 'Generative AI (LLMs)',
    details: ['GPT 3/4', 'LLAMA', 'Hugging Face'],
  },
  {
    title: 'Project management method',
    details: ['SCRUM'],
  },
  {
    title: 'Dev Tools',
    details: ['Git', 'Postman'],
  },
];

export const certificates = [
  {
    title: 'Project management',
    institution: 'Mooc GdP',
    date: '2023',
    link: 'https://moocgdp.gestiondeprojet.pm/certificates/b84f934f9a474e7c8928799e50fcbf55',
  },
  {
    title: 'Project team management',
    institution: 'Mooc GdP',
    date: '2023',
    link: 'https://moocgdp.gestiondeprojet.pm/certificates/f9daf2067c414e7c939d009803b10fe9',
  },
  {
    title: 'Tools and web applications for project management',
    institution: 'Mooc GdP',
    date: '2023',
    link: 'https://moocgdp.gestiondeprojet.pm/certificates/89bb4528fbbb49fa9a1d66fff665b30f',
  },
  {
    title: 'Tools and methodology for problem solving',
    institution: 'Mooc GdP',
    date: '2023',
    link: 'https://moocgdp.gestiondeprojet.pm/certificates/946c7c9851c0404091e9970c818aad42',
  },
  {
    title: 'Fundamentals of digital marketing',
    institution: 'Google',
    date: '2020',
    link: '#',
  },
];

export const portofolios = [
  {
    name: 'My Website',
    description:
      'This project presents an overview of myself, services offered, projects done and research publications.',
    tags: ['Web'],
    technologies: ['ReactJs', 'TailwindCSS'],
    image: mywebsite,
    source_code_link: 'https://github.com/chokkipaterne/chokkipaterne',
    preview: '',
  },
  {
    name: 'Promptopia',
    description:
      'Promptopia is a community-driven platform dedicated to discovering and sharing unique and effective prompts for AI language models. Our goal is to expand the creative horizons of AI developers, enthusiasts, and researchers by providing a curated list of prompts from the community, for the community.',
    tags: ['Web'],
    technologies: ['ReactJs', 'TailwindCSS', 'NextJs', 'Mongodb'],
    image: promptopia,
    source_code_link: 'https://github.com/chokkipaterne/promptopia',
    preview: 'https://promptopia-drab-alpha.vercel.app/',
  },
  {
    name: 'Sales Dashboard',
    description:
      'Case study based on Sales dataset. The objective is to help Sales manager to get an overview of sales, budgets and more.',
    tags: ['Data'],
    technologies: ['Power BI'],
    image: storedash,
    source_code_link: 'https://github.com/chokkipaterne/powerbi_store',
    preview: '',
  },
  {
    name: 'HR Dashboard',
    description:
      'Case study based on a HR dataset. The objective is to help HR manager to have an overview of the performance of employees but also know how need to be promoted orto be laid off due to the economical issue in the enterprise.',
    tags: ['Data'],
    technologies: ['Power BI'],
    image: hrdash,
    source_code_link: 'https://github.com/chokkipaterne/powerbi_hr',
    preview: '',
  },
  {
    name: 'QualityOGD',
    description:
      'QualityOGD, a conventional agent for Open Government Data Quality Assessment.',
    tags: ['Web'],
    technologies: ['Django', 'Angular', 'Python'],
    image: qualityogd,
    source_code_link: 'https://github.com/chokkipaterne/qualityogd',
    preview: 'http://79.143.180.14:7071/',
  },
  {
    name: 'ODEON',
    description:
      'ODEON (Open Data Exchange solutiON) is a centralized repository whose objective is to facilitate communication between Open Government Data (OGD) stakeholders: citizens, developers and publishers.',
    tags: ['Web'],
    technologies: ['Django', 'Python', 'PostgreSQL'],
    image: odeon,
    source_code_link: 'https://github.com/chokkipaterne/odeon',
    preview: 'http://79.143.180.14:7001/',
  },
  {
    name: 'ODE',
    description:
      'Open Data Explorer (ODE) is a generic and end-to-end tool which helps users through the different data storytelling stages.',
    tags: ['Web', 'Data'],
    technologies: ['Django', 'Python', 'PostgreSQL'],
    image: ode,
    source_code_link: 'https://github.com/chokkipaterne/ode',
    preview: 'http://79.143.180.14:7001/home-proto',
  },
  {
    name: 'StoryOGD',
    description:
      'StoryOGD provides open data publishers with a tool to easily convert any conventional portal into storytelling portal that citizens can easily understand.',
    tags: ['Web', 'Data'],
    technologies: ['Django', 'Python', 'PostgreSQL', 'JQuery', 'Javascript'],
    image: storyogd,
    source_code_link: 'https://github.com/chokkipaterne/ode',
    preview: 'http://79.143.180.14:7001/home-trans',
  },
  {
    name: 'ODSAG',
    description:
      'ODSAG (Open Data Semantic Annotation and Graph), a chrome extension that automatically an- notates any open dataset and creates graphs (minimal and full graphs) from it.',
    tags: ['Web'],
    technologies: ['Django', 'Python', 'Javascript'],
    image: odsag,
    source_code_link: 'https://github.com/chokkipaterne/odsag',
    preview: '',
  },
  {
    name: 'Namur Budget Dashboard',
    description:
      'NBDash (Namur Budget Dashboard) is an interactive dashboard using two budget datasets (Namur-Ordinary Budget by function & Namur-Extraordinary Budget by function ) available on the Namur open data portal.',
    tags: ['Data'],
    technologies: ['Python', 'Dash Plotly', 'Plotly'],
    image: nbdash,
    source_code_link: 'https://github.com/chokkipaterne/nbdash',
    preview: 'http://79.143.180.14:8050/apps/budget',
  },
  {
    name: 'CitizenApps',
    description:
      " A mobile application that raises citizens' awareness of the existence and usefulness of open data.",
    tags: ['Mobile'],
    technologies: ['Java', 'Django', 'Python'],
    image: citizenapps,
    source_code_link: '',
    preview: 'http://79.143.180.14:8050/apps/budget',
  },
];

export const tags = ['All', 'Web', 'Mobile', 'Data'];

export const publications = [
  {
    authors:
      'Chokki, A., Clarinval, A., Simonofski, A., Frénay, B., & Vanderose, B.',
    year: '2023',
    details: `Evaluating a Conversational Agent for Open Government Data Quality Assessment. In 29th Americas Conference on Information Systems, pages 1–10.`,
    type: 'Conference',
  },
  {
    authors: 'Chokki, A., & Vanderose, B.',
    year: '2023',
    details: `From Conventional Open Government Data Portals to Storytelling Portals : The StoryOGD Prototype. In 24th Annual International Conference on Digital Government Research, pages 1–2.`,
    type: 'Conference',
  },
  {
    authors:
      'Chokki, A., Alexopoulos, C., Saxena, S., Frénay, B., Vanderose, B., & Ali, M.',
    year: '2022',
    details: `Metadata quality matters in Open Government Data (OGD) evaluation! An empirical investigation of OGD portals of the GCC constituents: An empirical investigation of OGD portals of the GCC constituents. Transforming Government: People, Process and Policy.`,
    type: 'Journal',
  },
  {
    authors: 'Chokki, A., Simonofski, A., Frénay, B., & Vanderose, B.',
    year: '2022',
    details: `Open government data awareness: eliciting citizens’ requirements for application design. Transforming Government: People, Process and Policy.`,
    type: 'Journal',
  },
  {
    authors: 'Chokki, A., Simonofski, A., Frénay, B., & Vanderose, B. ',
    year: '2022',
    details: `Engaging Citizens with Open Government Data: The Value of Dashboards Compared to Individual Visualizations. Digital Government: Research and Practice, 3(3), 1–20.`,
    type: 'Journal',
  },
  {
    authors: 'Chokki, A., Frénay, B., & Vanderose, B.',
    year: '2022',
    details: `Open Data Explorer: An End-to-end Tool for Data Storytelling using Open Data. In AMCIS 2022.`,
    type: 'Conference',
  },
  {
    authors: 'Chokki, A., Simonofski, A., Frénay, B., & Vanderose, B.',
    year: '2022',
    details: `Increasing Awareness and Usefulness of Open Government Data: An Empirical Analysis of Communication Methods. In International Conference on Research Challenges in Information Science.`,
    type: 'Conference',
  },
  {
    authors:
      'Chokki, A., Simonofski, A., Clarinval, A., Frénay, B., & Vanderose, B.',
    year: '2022',
    details: `Fostering Interaction between Open Government Data Stakeholders: An Exchange Platform for Citizens, Developers and Publishers. Electronic Government.`,
    type: 'Conference',
  },
  {
    authors: 'Chokki, A., Abida, R., Frénay, B., Vanderose, B., & Cleve, A.',
    year: '2022',
    details: `ODSAG: Enhancing Open Data Discoverability and Understanding through Semantic Annotation. EGOV-CeDEM-ePart 2022, 120.`,
    type: 'Conference',
  },
  {
    authors: 'Chokki, A., Simonofski, A., Frénay, B., & Vanderose, B.',
    year: '2021',
    details: `Open Government Data for Non-expert Citizens: Understanding Content and Visualizations’ Expectations. In International Conference on Research Challenges in Information Science (pp. 602–608).`,
    type: 'Conference',
  },
  {
    authors:
      'Kasereka, S., Kasoro, N., Kyamakya, K., Goufo, E.F., Chokki, A., & Yengo, M.',
    year: '2018',
    details: `Agent-Based Modelling and Simulation for evacuation of people from a building in case of fire. Procedia Computer Science, 130, 10–17.`,
    type: 'Journal',
  },
  {
    authors: 'Chokki, A.',
    year: '2014',
    details: `Génération de population synthétique localisée.`,
    type: 'Book',
  },
  {
    authors: 'Chokki, A., Kasereka, S., Kasoro, N.',
    year: '2014',
    details: `Un modele centre agents interactifs pour simuler la propagation de la grippe aviaire. Annales de la Faculté des Sciences de l’Université de Kinshasa, 1, 59–68.`,
    type: 'Journal',
  },
  {
    authors: 'Kasereka, S., Kasoro, N., & Chokki, A.',
    year: '2014',
    details: `A hybrid model for modeling the spread of epidemics: Theory and simulation. In 2014 4th international symposium isko-maghreb: Concepts and tools for knowledge management (isko-maghreb) (pp. 1–7).`,
    type: 'Conference',
  },
  {
    authors: 'Adédjouma, S., Chokki, A., & Dagba, T.',
    year: '2013',
    details: `An Extended AODV Protocol to Support Mobility in Hybrid Networks. International Journal of Computer and Information Technology, 2(3), 500–505.`,
    type: 'Conference',
  },
];

export const tagPublications = ['All', 'Conference', 'Journal', 'Book'];

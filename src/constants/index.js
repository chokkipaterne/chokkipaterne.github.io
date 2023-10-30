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
import nbdash from '../assets/nbdash.png';
import ode from '../assets/ode.png';
import odeon from '../assets/odeon.png';
import odsag from '../assets/odsag.png';
import promptopia from '../assets/promptopia.png';
import qualityogd from '../assets/qualityogd.png';
import storedash from '../assets/storedash.png';
import storyogd from '../assets/storyogd.png';
import citizenapps from '../assets/citizenapps.png';
import chatone from '../assets/chatone.png';
import mywebsite from '../assets/mywebsite.png';
import hrattendance from '../assets/hrattendance.png';
import supplychain from '../assets/supplychain.png';
import hospitality from '../assets/hospitality.png';
import cvpdf from '../assets/cv.pdf';
import marketingpdf from '../assets/marketing.pdf';

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
export const nameAuthor = 'Abiola Paterne CHOKKI, PhD';
export const titleAuthor =
  'Co-Founder of AhoueFa.com | PostDoc Researcher | Full Stack Developer | Data Engineer/Analyst';
export const aboutMe = `
I obtained my #PhD in Computer Science# from the #University of Namur, Belgium#, in October 2023 and currently serve as a #PostDoc Researcher# at the same institution's Faculty of Computer Science. My role primarily involves gathering and recording researchers' roles and tasks for the WP2 segment of the #Trusted AI# project under #ARIAC#.
My comprehensive IT experience spans diverse domains, including #web, mobile, desktop, and ERP application development, as well as ETL applications#. I've also had the privilege of leading a #12-member development team#, employing #agile# methodologies.`;

export const github = 'https://github.com/chokkipaterne';
export const researchgate =
  'https://www.researchgate.net/profile/Paterne-Chokki';
export const googlescholar = '';
export const linkedin = 'https://www.linkedin.com/in/paternechokki/';
export const cv = cvpdf;

export const personalInfo = [
  {
    icon: FaMailBulk,
    title: 'Mail',
    details: 'cpeterabiola@gmail.com',
    color: 'green-light',
    link: 'mailto:cpeterabiola@gmail.com',
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
    details: 'Develop web applications',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Mobile Development',
    details: 'Develop mobile applications',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Ecommerce Development',
    details: 'Develop ecommerce applications',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Data Engineering',
    details:
      'Collect, clean, check quality data and make them available for analysis',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Data Analysis',
    details: 'Convert data into insightful stories',
    color: 'gray-light',
  },
  {
    icon: FaServicestack,
    title: 'Chatbot Integration',
    details: 'Creation of chatbot on customized input data',
    color: 'gray-light',
  },
];

export const experiences = [
  {
    title: 'PostDoc Researcher',
    company_name: 'Faculty of Computer Science, UNamur , Belgium',
    icon: backend,
    iconBg: '#383E56',
    date: 'November 2023 - Current',
    points: [
      `Collect and document researchers' responsibilities within the WP2 of ARIAC project: Trusted AI.`,
      `Introduce an AI-enhanced tool for Systematic Literature Reviews, aiming to cut research time by 40% (Pending validation).`,
    ],
  },
  {
    title: 'Researcher in Data Storytelling with OGD',
    company_name: 'Faculty of Computer Science, UNamur , Belgium',
    icon: backend,
    iconBg: '#383E56',
    date: 'December 2019 - October 2023',
    points: [
      `Collaborated with diverse #OGD stakeholders in Wallonia#, encompassing municipal authorities, infomediaries, and citizens, to gather their specific needs.`,
      `Gained proficiency in #ETL# processes and created a comprehensive and
      versatile data storytelling tool, similar to #Tableau#, using #Django, Angular,
      Plotly, Pandas, and PostgreSQL#. This tool was designed to facilitate a #rapid#
      comprehension of open government data for OGD stakeholders.`,
      `Proficiently documented stakeholder requirements, further disseminating
      insights through #10 scientific publications#.`,
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
      `Offering #tailored assistance# to students struggling with comprehension.`,
    ],
  },
  {
    title: 'Co-Founder',
    company_name: 'AhoueFa.com, Benin',
    icon: backend,
    iconBg: '#383E56',
    date: '2020 - Present',
    points: [
      `Designed and implemented AhoueFa's web and mobile platforms using #Wordpress, Java, and MySQL#, facilitating connections between #real estate agencies, customers, buyers, sellers, and service providers#.`,
      `Shaped AhoueFa’s marketing strategy with #Facebook Ads#, successfully accumulating #10,000 classified listings and 8,000 real estate properties# to date.`,
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company_name: 'Freelance',
    icon: backend,
    iconBg: '#383E56',
    date: '2016 - Present',
    points: [
      `Designed, developed, and sustained #web, mobile, and ERP# solutions tailored to client needs, leveraging tools like #Yii, Laravel, Vue, Ionic, React, Odoo (Python), Wordpress, MySQL, and PostgreSQL#.`,
      `Led a #12-member team of developers and testers# within a #SCRUM# environment to implement the University of Laos' management system.`,
      `Designed and sustained a Human Resources Management System for Nam Theun 1 Power Company using #Odoo and PostgreSQL#.`,
      `Configuring and managing #CPanel or VPS# hosting for various web projects.`,
      `Configuring and managing #Google Play and Apple Store# hosting for mobile projects.`,
      `Writing #documentation# and #manuals# and #training# end users.`,
    ],
  },
  {
    title: 'IT Consultant',
    company_name: 'Sysmatik IT Solution, Laos',
    icon: web,
    iconBg: '#383E56',
    date: 'November 2018 - November 2019',
    points: [
      `Engineered and sustained the firm's in-house and client projects, encompassing #E-commerce platforms, payment gateways, delivery systems#, and websites with #Laravel, Vue, Ionic, WordPress, and MySQL#.`,
      `Conduct a study on #banking systems# and supervise the development of the #mobile application# of BIC Laos bank.`,
      `Led a team of #3 developers# in a #SCRUM# environment.`,
      `Meeting with clients to #obtain their needs#.`,
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
      `Develop and maintain #ERP, mobile and web applications# based on client requirements using #Odoo, Yii, Ionic, MySQL, and PostgreSQL#.`,
      `Spearheaded full project lifecycles, from #requirement analysis to implementation and training#.`,
      `Manage a team of #5 developers# using #SCRUM# method.`,
      `Pioneered internal products, boosting the #software department's revenue by 20% initially#, with consistent #yearly growth of 5-10%#.`,
      `Meeting clients to obtain their requirements.`,
      `Analyzing and identifying appropriate modules to use in the case of ERP projects.`,
      `Writing reports on internal and external project specifications.`,
      `Designing project databases.`,
      `Implementing applications from scratch or customizing existing ones.`,
      `Contributing to all phases of the project implementation lifecycle.`,
      `Writing well designed, testable, and efficient code.`,
      `Ensuring designs conform to specifications.`,
      `Writing #manuals and training# end users.`,
      `Configuring and managing #CPanel and Cloud hosting# (for ERP projects).`,
      `Configuring #firewall and SSL# to secure hosting access.`,
      `Writing #bash scripts# for daily data backup and securing hosting access..`,
    ],
  },
  {
    title: 'End of Master degree internship',
    company_name: 'University Toulouse 1, France',
    icon: mobile,
    iconBg: '#383E56',
    date: 'October 2014 - November 2018',
    points: [
      `Propose and implement a solution allowing the generation of localized synthetic population from aggregated data using #JAVA# and the #GAMA# simulator.`,
    ],
  },
  {
    title: 'Assistant to the General Manager and Application Developer',
    company_name: 'HESystems, Benin',
    icon: web,
    iconBg: '#383E56',
    date: 'March 2012 - September 2012',
    points: [
      `Write #bidding documents for tenders#.`,
      `Develop and maintain web and Windev applications using #Java, PHP, Windev, and MySQL#.`,
    ],
  },
  {
    title: 'End of engineering degree internship',
    company_name: 'LETIA/UAC(University of Abomey-Calavi), Benin',
    icon: mobile,
    iconBg: '#383E56',
    date: 'August 2011 - February 2012',
    points: [
      `Propose and implement an improved version of the AODV protocol to enable mobility in hybrid networks using #C++# and the #NS2 simulator#.`,
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
    details: ['Angular', 'Vue', 'React', 'HTML/CSS', 'JavaScript', 'jQuery'],
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
    ],
  },
  {
    title: 'Mobile',
    details: ['Ionic', 'React Native', 'Flutter'],
  },
  {
    title: 'ERP',
    details: ['Odoo'],
  },
  {
    title: 'CMS',
    details: ['Wordpress'],
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
    link: marketingpdf,
  },
];

export const portofolios = [
  {
    name: 'ODE',
    description:
      'An end-to-end Open Data storytelling tool, akin to Tableau/Power BI, enabling users of all skill levels to craft data stories from government portals without coding. Features include OGD portal data collection, processing, quality checks, visualization recommendations, and story creation.',
    tags: ['Web', 'Data Project'],
    technologies: ['Django', 'Python', 'PostgreSQL'],
    image: ode,
    source_code_link: 'https://github.com/chokkipaterne/ode',
    preview: 'http://79.143.180.14:7001/home-proto',
  },
  {
    name: 'Promptopia',
    description:
      'A community-oriented platform focused on uncovering and sharing distinctive prompts for AI language models.',
    tags: ['Web'],
    technologies: ['ReactJs', 'TailwindCSS', 'NextJs', 'MongoDB'],
    image: promptopia,
    source_code_link: 'https://github.com/chokkipaterne/promptopia',
    preview: 'https://promptopia-drab-alpha.vercel.app/',
  },
  {
    name: 'ChatOne',
    description:
      'A Q&A system leveraging LLMs (like GPT4ALL, LLAMA, GPT3, GPT4) for queries across diverse formats including csv, xls, pdf, web pages, and YouTube videos.',
    tags: ['Web', 'Data Project', 'Chatbot'],
    technologies: ['Streamlit', 'Python', 'Pandas'],
    image: chatone,
    source_code_link: 'https://github.com/chokkipaterne/chatone',
    preview: '',
  },
  {
    name: 'Supply Chain Data Analytics',
    description:
      'A Power BI dashboard showcasing key KPIs (on-time delivery (OT) %, in-full delivery (IF) %, and on-time in full (OTIF) %) aiding a manufacturer in pinpointing and resolving key customer issues prior to business expansion.',
    tags: ['Data Project'],
    technologies: ['Power BI', 'Excel'],
    image: supplychain,
    source_code_link: 'https://github.com/chokkipaterne/powerbi_supplychain',
    preview: '',
  },
  {
    name: 'CitizenApps',
    description:
      "An Android application aggregating global Open Government Data services, apps, and visualizations into one platform with the aim to raise citizens' awareness of the existence and usefulness of open data.",
    tags: ['Mobile'],
    technologies: ['Java', 'Webview'],
    image: citizenapps,
    source_code_link: 'https://github.com/chokkipaterne/citizenapps',
    preview:
      'https://play.google.com/store/apps/details?id=com.ogd.citizenapps&pli=1',
  },
  {
    name: 'Retail Insights',
    description:
      'A Power BI dashboard presenting sales metrics (like top customers, leading products, regional sales, and sales volume) for a store, aiding in data-driven decision-making.',
    tags: ['Data Analysis'],
    technologies: ['Power BI', 'Excel'],
    image: storedash,
    source_code_link: 'https://github.com/chokkipaterne/powerbi_store',
    preview: '',
  },
  {
    name: 'HR Attendance Data analytics',
    description:
      'A Power BI dashboard to track employee data for the HR team, including working hours, attendance, performance, and leaves.',
    tags: ['Data Project'],
    technologies: ['Power BI', 'Excel'],
    image: hrattendance,
    source_code_link: 'https://github.com/chokkipaterne/powerbi_hr_attendance',
    preview: '',
  },
  {
    name: 'Revenue Analysis for Hospitality',
    description:
      'A Power BI dashboard highlighting vital KPIs (such as Revenue per available rooom (RevPar), Average Daily Rate (ADR), Occupancy %) to assist hotels in understanding their revenue patterns.',
    tags: ['Data Project'],
    technologies: ['Power BI', 'Excel'],
    image: hospitality,
    source_code_link: 'https://github.com/chokkipaterne/powerbi_hospitality',
    preview: '',
  },
  {
    name: 'HR Dashboard',
    description:
      'A Power BI dashboard to help HR manager to have an overview of the performance of employees but also know how need to be promoted orto be laid off due to the economical issue in the enterprise.',
    tags: ['Data Project'],
    technologies: ['Power BI', 'Excel'],
    image: hrdash,
    source_code_link: 'https://github.com/chokkipaterne/powerbi_hr',
    preview: '',
  },
  {
    name: 'QualityOGD',
    description:
      'A conventional agent for users to conveniently evaluate content and metadata quality (completeness, accuracy, findability, understandability, etc.) of open government datasets.',
    tags: ['Web', 'Chatbot'],
    technologies: ['Django', 'Angular', 'Python', 'Pandas'],
    image: qualityogd,
    source_code_link: 'https://github.com/chokkipaterne/qualityogd',
    preview: 'http://79.143.180.14:7071/',
  },
  {
    name: 'ODEON',
    description:
      'A collaborative platform connecting citizens, developers, and data providers. Features include citizens proposing OGD service ideas and developers communicating data needs and issues to publishers.',
    tags: ['Web'],
    technologies: ['Django', 'Python', 'PostgreSQL'],
    image: odeon,
    source_code_link: 'https://github.com/chokkipaterne/odeon',
    preview: 'http://79.143.180.14:7001/',
  },
  {
    name: 'StoryOGD',
    description:
      'An enhanced ODE tool allowing publishers to transform traditional OGD portals into storytelling platforms .',
    tags: ['Web', 'Data Project'],
    technologies: ['Django', 'Python', 'PostgreSQL', 'jQuery', 'Javascript'],
    image: storyogd,
    source_code_link: 'https://github.com/chokkipaterne/ode',
    preview: 'http://79.143.180.14:7001/home-trans',
  },
  {
    name: 'ODSAG',
    description:
      'A chrome extension that automatically annotates any open dataset and creates graphs (minimal and full graphs) from it.',
    tags: ['Web'],
    technologies: ['Django', 'Python', 'Javascript', 'jQuery'],
    image: odsag,
    source_code_link: 'https://github.com/chokkipaterne/odsag',
    preview: '',
  },
  {
    name: 'Portofolio Website',
    description:
      'A comprehensive look at my background, services provided, completed projects, and research publications.',
    tags: ['Web'],
    technologies: ['ReactJs', 'TailwindCSS'],
    image: mywebsite,
    source_code_link: 'https://github.com/chokkipaterne/chokkipaterne',
    preview: '',
  },
  {
    name: 'Namur Budget Dashboard',
    description: `An interactive dashboard designed to offer insights into the allocation of Namur's budget, utilizing two datasets (Namur-Ordinary Budget by function & Namur-Extraordinary Budget by function) from the Namur open data portal.`,
    tags: ['Data Project'],
    technologies: ['Python', 'Dash Plotly', 'Plotly'],
    image: nbdash,
    source_code_link: 'https://github.com/chokkipaterne/nbdash',
    preview: 'http://79.143.180.14:8050/apps/budget',
  },
];

export const tags = ['All', 'Web', 'Mobile', 'Chatbot', 'Data Project'];

export const publications = [
  {
    authors:
      '#Chokki, A.#, Clarinval, A., Simonofski, A., Frénay, B., & Vanderose, B.',
    year: '2023',
    details: `Evaluating a Conversational Agent for Open Government Data Quality Assessment. In 29th Americas Conference on Information Systems, pages 1–10.`,
    type: 'Conference',
  },
  {
    authors: '#Chokki, A.#, & Vanderose, B.',
    year: '2023',
    details: `#(Best Poster Award)# From Conventional Open Government Data Portals to Storytelling Portals : The StoryOGD Prototype. In 24th Annual International Conference on Digital Government Research, pages 1–2.`,
    type: 'Conference',
  },
  {
    authors:
      '#Chokki, A.#, Alexopoulos, C., Saxena, S., Frénay, B., Vanderose, B., & Ali, M.',
    year: '2022',
    details: `Metadata quality matters in Open Government Data (OGD) evaluation! An empirical investigation of OGD portals of the GCC constituents: An empirical investigation of OGD portals of the GCC constituents. Transforming Government: People, Process and Policy.`,
    type: 'Journal',
  },
  {
    authors: '#Chokki, A.#, Simonofski, A., Frénay, B., & Vanderose, B.',
    year: '2022',
    details: `Open government data awareness: eliciting citizens’ requirements for application design. Transforming Government: People, Process and Policy.`,
    type: 'Journal',
  },
  {
    authors: '#Chokki, A.#, Simonofski, A., Frénay, B., & Vanderose, B. ',
    year: '2022',
    details: `Engaging Citizens with Open Government Data: The Value of Dashboards Compared to Individual Visualizations. Digital Government: Research and Practice, 3(3), 1–20.`,
    type: 'Journal',
  },
  {
    authors: '#Chokki, A.#, Frénay, B., & Vanderose, B.',
    year: '2022',
    details: `Open Data Explorer: An End-to-end Tool for Data Storytelling using Open Data. In AMCIS 2022.`,
    type: 'Conference',
  },
  {
    authors: '#Chokki, A.#, Simonofski, A., Frénay, B., & Vanderose, B.',
    year: '2022',
    details: `Increasing Awareness and Usefulness of Open Government Data: An Empirical Analysis of Communication Methods. In International Conference on Research Challenges in Information Science.`,
    type: 'Conference',
  },
  {
    authors:
      '#Chokki, A.#, Simonofski, A., Clarinval, A., Frénay, B., & Vanderose, B.',
    year: '2022',
    details: `Fostering Interaction between Open Government Data Stakeholders: An Exchange Platform for Citizens, Developers and Publishers. Electronic Government.`,
    type: 'Conference',
  },
  {
    authors: '#Chokki, A.#, Abida, R., Frénay, B., Vanderose, B., & Cleve, A.',
    year: '2022',
    details: `ODSAG: Enhancing Open Data Discoverability and Understanding through Semantic Annotation. EGOV-CeDEM-ePart 2022, 120.`,
    type: 'Conference',
  },
  {
    authors: '#Chokki, A.#, Simonofski, A., Frénay, B., & Vanderose, B.',
    year: '2021',
    details: `Open Government Data for Non-expert Citizens: Understanding Content and Visualizations’ Expectations. In International Conference on Research Challenges in Information Science (pp. 602–608).`,
    type: 'Conference',
  },
  {
    authors:
      'Kasereka, S., Kasoro, N., Kyamakya, K., Goufo, E.F., #Chokki, A.#, & Yengo, M.',
    year: '2018',
    details: `Agent-Based Modelling and Simulation for evacuation of people from a building in case of fire. Procedia Computer Science, 130, 10–17.`,
    type: 'Journal',
  },
  {
    authors: '#Chokki, A.#',
    year: '2014',
    details: `Génération de population synthétique localisée.`,
    type: 'Book',
  },
  {
    authors: '#Chokki, A.#, Kasereka, S., Kasoro, N.',
    year: '2014',
    details: `Un modele centre agents interactifs pour simuler la propagation de la grippe aviaire. Annales de la Faculté des Sciences de l’Université de Kinshasa, 1, 59–68.`,
    type: 'Journal',
  },
  {
    authors: 'Kasereka, S., Kasoro, N., & #Chokki, A.#',
    year: '2014',
    details: `A hybrid model for modeling the spread of epidemics: Theory and simulation. In 2014 4th international symposium isko-maghreb: Concepts and tools for knowledge management (isko-maghreb) (pp. 1–7).`,
    type: 'Conference',
  },
  {
    authors: 'Adédjouma, S., #Chokki, A.#, & Dagba, T.',
    year: '2013',
    details: `An Extended AODV Protocol to Support Mobility in Hybrid Networks. International Journal of Computer and Information Technology, 2(3), 500–505.`,
    type: 'Conference',
  },
];

export const tagPublications = ['All', 'Conference', 'Journal', 'Book'];

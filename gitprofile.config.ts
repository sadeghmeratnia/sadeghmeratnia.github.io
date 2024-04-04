// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'msorkhpar', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Mohammad \'Mo\' Sorkhpar (msorkhpar), a Senior Software Engineer based in Dallas.',
    description: 'Explore the portfolio of Mo Sorkhpar, a Dallas-based Senior Software Engineer with over 8 years of expertise in Java, Python, Spring Framework, and cloud technologies. A proud holder of a Master\'s in Computer Science from Indiana State University, Mo has contributed to innovative projects leveraging his diverse tech stack to solve complex challenges.',
    imageURL: 'https://avatars.githubusercontent.com/u/5176686?v=4',
    schema: {
      '@context': 'http://schema.org',
      '@type': 'Person',
      name: 'Mo Sorkhpar',
      alternateName: [
        'Mohammad Sorkhpar',
        'Mohammad.K Sorkhpar',
        'msorkhpar',
        'Sorkhpar',
        'محمد سرخ‌پر',
        'محمد کاظم سرخ‌پر',
        'سرخ‌پر',
      ],
      email: 'msorkhpar@outlook.com',
      familyName: 'Sorkhpar',
      givenName: 'Mo',
      knowsLanguage: ['English', 'Persian'],
      jobTitle: 'Senior Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Indiana State University',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Indiana State University',
      },
      url: 'https://sorkhpar.dev',
      image: 'https://avatars.githubusercontent.com/u/5176686?v=4',
      sameAs: [
        'http://www.linkedin.com/in/msorkhpar',
        'http://www.github.com/msorkhpar',
        'http://msorkhpar.github.io/',
        'https://scholar.google.com/citations?user=1M5LFmIAAAAJ',
        'https://orcid.org/0009-0006-2856-9225',
        'https://www.researchgate.net/profile/Mo-Sorkhpar',
      ],
      workLocation: {
        '@type': 'Place',
        address: {
          '@type': '75230',
          addressLocality: 'Dallas',
          addressRegion: 'TX',
        },
      },
    },
  },
  social: {
    linkedin: 'msorkhpar',
    twitter: '',
    mastodon: '',
    researchGate: '',
    googleScholar: { name: 'Mo Sorkhpar', user: '1M5LFmIAAAAJ' },
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'msorkhpar@outlook.com',
  },
  resume: {
    fileUrl: 'https://sorkhpar.dev/Mo-Sorkhpar-Resume.pdf' // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'OOP',
    'Design Patterns',
    'Spring Boot',
    'Docker',
    'Kubernetes',
    'Microservices',
    'RESTful API',
    'RabbitMQ',
    'Apache Kafka',
    'PostgreSQL',
    'Orcale DB',
    'MongoDB',
    'Neo4j',
    'Redis',
    'Hibernate',
    'JPA',
    'Maven',
    'Gradle',
    'NetowrkX',
    'Junit',
    'Mockito',
    'TestContainers',
    'Jenkins',
    'Gitlab CI/CD',
    'Bitbucket',
    'Jira',
    'Git',
  ],
  banner: {
    imageURL: 'https://raw.githubusercontent.com/msorkhpar/msorkhpar/main/Who-I-am-large.gif',
    name: 'Mo Sorkhpar Portfolio',
  },
  experiences: [
    {
      company: 'Indiana State University',
      position: 'Graduate Research Assistant',
      from: '08/2022',
      to: '05/2024',
      companyLink: 'https://cs.indstate.edu',
      achievements: [
        'Spearheaded the integration of Wikidata and Wikipedia dumps to create a comprehensive dataset for graph entity summarization, utilizing Java, Python, Neo4j, Linux, and AWS to build a new standard dataset for machine learning research in graph summarization.',
        'Advanced an RGCN-based entity summarization algorithm in Knowledge Graphs with PyTorch and Optuna.',
        'Developed a Mixed Integer solver for the optimal vertex ordering problem in bipartite graphs, applying Python, NetworkX, and PostgreSQL, translating complex models into practical solutions.',
      ],
    },
    {
      company: 'Intellias',
      position: 'Senior Software Engineer',
      from: '10/2021',
      to: '07/2022',
      companyLink: 'https://intellias.com',
      achievements: [
        'Developed a reactive microservices-based sales platform for a German telecom’s ePOS system using Kotlin, Spring, MongoDB, Oracle DB, Kubernetes, and Apache Wicket, enhancing operational efficiency across 3,000 retail branches.',
        'Implemented a cost-effective contract service solution, replacing an expensive licensing model with an open-source tool. This yielded an annual savings of $10,000 and maintained system adaptability for future infrastructure changes.',
        'Orchestrated a team of 8 in a scrum-based environment, collaborating with over 70 developers.',
      ],
    },
    {
      company: 'Routetitan',
      position: 'Senior Software Engineer',
      from: '04/2021',
      to: '10/2021',
      companyLink: 'https://routetitan.com',
      achievements: [
        'Spearheaded the back-end development of a Route Optimizer application for DHL Netherlands, enhancing delivery efficiency by solving up to 5000 vehicle routing problems daily with Java, Quarkus, PostgreSQL, MongoDB, Stripe API, and Google-OR tools. Achieved a groundbreaking improvement in system performance, reducing load times from 1800ms to 200ms.',
        'Persuaded the team to adopt a strategic pivot to a Product-as-a-Service (PaaS) model, fostering Routetitan’s growth by optimizing resource allocation, aligning business processes with market demands, and establishing an innovative and competitive path.',
        ' Led the deployment architecture overhaul using Terraform and Gitlab CI, integrating Hetzner-Cloud, GCP, and AWS, which optimized deployment processes and significantly cut operational costs.',
      ],
    },
    {
      company: 'Devolon',
      position: 'Software Developer',
      from: '02/2020',
      to: '02/2021',
      companyLink: 'https://www.devolon.fi',
      achievements: [
        'Engineered the PCKT children’s money management application, empowering parents with tools to monitor and control their children’s spending. Integral in leveraging ISO-8583 and jPOS for secure banking communications, facilitating seamless transaction processing.',
        'Initiated a Grafana and Prometheus-based monitoring system, which reduced customer support calls by 80% and boosted operational efficiency by enabling rapid detection and resolution of system issues.',
        'Collaborated within a diverse, scrum-based international team, focusing on API services and back-office management.',
      ],
    },
    {
      company: 'Farazpardazan',
      position: 'Senior Software Engineer',
      from: '12/2016',
      to: '01/2020',
      companyLink: 'https://www.farazpardazan.com',
      achievements: [
        'Delivered the Hamrahcard Payment Assistant application, overseeing its growth to over 12 million users and managing 2 million daily financial transactions. This marked a significant contribution to the company’s portfolio and user base expansion.',
        'Enhanced SQL query performance, achieving a 90% improvement in report generation speed and reduced execution times for complex queries, boosting system responsiveness and user satisfaction.',
        'Implemented and maintained a robust suite of internal services supporting continuous integration and continuous delivery pipelines, including Jira, Gitlab, Gitlab CI/CD, Nginx, SonarQube, Artifactory, and Nexus, laying the foundation for agile development practices.',
        'Directed the development of a Personal Financial Management application as Product Owner, overseeing a scrum team of 6. Achieved a milestone of 500K active users by enhancing user engagement and product features.',
        'Streamlined the software development life cycle by integrating System Requirements Specifications (SRS), wireframes, UI designs, and API contracts, significantly improving efficiency and clarity in production processes.',
      ],
    },
    {
      company: 'PartGames Studio',
      position: 'Java Back-end Developer',
      from: '01/2016',
      to: '11/2016',
      companyLink: 'https://www.partgames.com',
      achievements: [
        'Crafted a high-performance back-end service for an online physics game with 230K players, utilizing Java, Spring, MySQL, Redis, Vaadin, and WebSocket. Introduced comprehensive features, including real-time interactions, payment management, and a versatile back-office system for user and parameter management.',
        'Created and commercialized a scalable leaderboard management service, handling up to 5,000 requests per minute for 7 multiplayer games. This innovation extended beyond studio use, offering an API to external services and marking a significant contribution to the studio’s technological portfolio.',
      ],
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Indiana State University',
      degree: 'Master of Science in Computer Science',
      from: '08/2022',
      to: '05/2024',
    },
    {
      institution: 'University of Mazandaran',
      degree: 'Bachelor of Engineering in Information Technology',
      from: '2012',
      to: '2016',
    },
  ],
  publications: [
    {
      title: 'Vertex Ordering with Precedence Constraints',
      conferenceName: 'FCT 2023',
      journalName: '',
      authors: 'Jeff Kinne, Akbar Rafiey, Arash Rafiey & Mohammad Sorkhpar (alphabetical order)',
      link: 'https://doi.org/10.1007/978-3-031-43587-4_22',
      description:
        'We study bipartite graph ordering problem, which arises in various domains such as production management, bioinformatics, and job scheduling with precedence constraints. In the bipartite vertex ordering problem, we are given a bipartite graph H=(B,S,E) where each vertex in B has a cost and each vertex in S has a profit. The goal is to find a minimum K together with an ordering < of the vertices of H, so that i<j whenever i∈B is adjacent to j∈S . Moreover, at each sub-order the difference between the costs and profits of the vertices in the sub-order does not exceed K.'
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-RJ2GES11E6', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: false,
};

export default CONFIG;

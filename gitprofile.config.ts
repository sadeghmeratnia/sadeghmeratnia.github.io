// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sadeghmeratnia', // Your GitHub org/user name. (This is the only required config)
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
    title: 'Sadegh Meratnia, Senior iOS Engineer.',
    description: 'Explore the portfolio of Sadegh Meratnia, a Brighton-based Senior Software Engineer with over 6 years of expertise in iOS development',
    imageURL: 'https://raw.githubusercontent.com/msorkhpar/msorkhpar/main/Who-I-am.png',
    schema: {
      '@context': 'http://schema.org',
      '@type': 'Person',
      name: 'Sadegh Meratnia',
      alternateName: [
        'Sadegh Meratnia',
        'S Meratnia',
        'Smeratnia',
        'Smerat',
        'Meratnia',
        'Merat',
        'صادق مرآت نیا',
        'صادق مرات نیا',
        'صادق مرآت‌نیا',
        'صادق مرات‌نیا',
        'صادق مرآت',
        'صادق مرات',
        'مراآت نیا',
        'مرات نیا',
        'مرآت',
        'مرات',
      ],
      email: 'sadegh@meratnia.me',
      familyName: 'Meratnia',
      givenName: 'Sadegh',
      knowsLanguage: ['English', 'Persian'],
      jobTitle: 'Senior iOS Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'StoreLab Ltd',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Azad University of Tehran',
      },
      url: 'https://meratnia.me',
      image: 'https://raw.githubusercontent.com/msorkhpar/msorkhpar/main/Who-I-am.png',
      sameAs: [
        'http://www.linkedin.com/in/sadeghmeratnia',
        'http://www.github.com/sadeghmeratnia',
        'http://sadeghmeratnia.github.io/',
      ],
      workLocation: {
        '@type': 'Place',
        address: {
          '@type': '75230',
          addressLocality: 'Brighton',
          addressRegion: 'UK',
        },
      },
    },
  },
  social: {
    linkedin: 'sadeghmeratnia',
    twitter: '',
    mastodon: '',
    researchGate: '',
    googleScholar: '',
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
    email: 'sadegh@meratnia.me',
  },
  resume: {
    fileUrl: '' // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Swift',
    'SwiftUI',
    'UIKit',
    'Animation',
    'Multi-Threading',
    'Combine',
    'RxSwift',
    'Xcode',
    'Fastlane',
    'Firebase',
    'CocoaPods',
    'SPM',
    'SOLID',
    'Design Patterns',
    'Clean',
    'VIPER',
    'MVVM',
    'MVC',
    'Coordinator Pattern',
    'Agile',
    'Scrum',
    'TDD',
    'Core Data',
    'Keychain',
    'SQLite',
    'Unit Testing',
    'Performance Testing',
    'Instruments',
    'Publishing app to App Store',
    'Gitlab CI/CD',
    'Bitbucket',
    'Clickup',
    'Jira',
    'Git',
  ],
  banner: {
    imageURL: 'https://raw.githubusercontent.com/msorkhpar/msorkhpar/main/Who-I-am-large.gif',
    name: 'Sadegh Meratnia Portfolio',
  },
  experiences: [
    {
      company: 'StoreLab Ltd',
      position: 'Senior iOS Developer',
      from: '01/2024',
      to: 'now',
      companyLink: 'https://storelab.app',
      achievements: [
        ''
      ],
    },
    {
      company: 'Intellias',
      position: 'Senior Software Engineer',
      from: '10/2021',
      to: '07/2022',
      companyLink: 'https://intellias.com',
      achievements: [
        'Developed a reactive microservices-based sales platform for a telecom’s ePOS system using Kotlin, Spring, MongoDB, Oracle DB, Kubernetes, and Apache Wicket, enhancing operational efficiency across 3,000 retail branches.',
        'Implemented a cost-effective contract service solution, replacing an expensive licensing model with an open-source tool. This yielded an annual savings of $10,000 and maintained system adaptability for future infrastructure changes.',
        'Orchestrated a team of 8 in a scrum-based environment, collaborating with over 70 developers.',
      ],
    },
    {
      company: 'Routetitan',
      position: 'Senior Software Engineer',
      from: '03/2020',
      to: '10/2021',
      companyLink: 'https://routetitan.com',
      achievements: [
        'Spearheaded the back-end development of a Route Optimizer application, enhancing delivery efficiency by solving up to 5000 vehicle routing problems daily with Java, Quarkus, PostgreSQL, MongoDB, and Stripe API. Achieved a groundbreaking improvement in system performance, reducing load times from 1800ms to 200ms.',
        'Persuaded the team to adopt a strategic pivot to a Product-as-a-Service (PaaS) model, fostering Routetitan’s growth by optimizing resource allocation, aligning business processes with market demands, and establishing an innovative and competitive path.',
        'Led the deployment architecture overhaul using Terraform and Gitlab CI, integrating Hetzner-Cloud, GCP, and AWS, which optimized deployment processes and significantly cut operational costs.',
        'Note:  I continued working with this company till 06/2022 as a part-time consultant.',
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
      from: '01/2015',
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
      institution: 'Azad University of Tehran',
      degree: 'Bachelor of Software Engineering',
      from: '2017',
      to: '2021',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
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

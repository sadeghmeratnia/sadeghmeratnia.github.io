// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'msorkhpar' // Your GitHub org/user name. (This is the only required config)
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
          projects: [] // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        }
      },
      manual: {
        // Properties for manually specifying projects
        projects: [] // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      }
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: []
    }
  },
  seo: {
    title: 'Portfolio of Mo Sorkhpar',
    description: '',
    imageURL: ''
  },
  social: {
    linkedin: 'msorkhpar',
    twitter: '',
    mastodon: '',
    researchGate: 'https://www.researchgate.net/profile/Mo-Sorkhpar',
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
    email: 'msorkhpar@outlook.com'
  },
  resume: {
    fileUrl: 'https://raw.githubusercontent.com/msorkhpar/msorkhpar.github.io/main/Mo-Sorkhpar-Resume.pdf' // Empty fileUrl will hide the `Download Resume` button.
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
    'Git'
  ],
  experiences: [
    {
      company: 'Intellias',
      position: 'Senior Software Engineer',
      from: '10/2021',
      to: '07/2022',
      companyLink: 'https://intellias.com'
    },
    {
      company: 'Routetitan',
      position: 'Senior Software Engineer',
      from: '04/2021',
      to: '10/2021',
      companyLink: 'https://routetitan.com'
    },
    {
      company: 'Devolon',
      position: 'Software Developer',
      from: '02/2020',
      to: '02/2021',
      companyLink: 'https://www.devolon.fi'
    },
    {
      company: 'Farazpardazan',
      position: 'Senior Software Engineer',
      from: '12/2016',
      to: '01/2020',
      companyLink: 'https://www.farazpardazan.com'
    },
    {
      company: 'PartGames Studio',
      position: 'Java Back-end Developer',
      from: '01/2016',
      to: '11/2016',
      companyLink: 'https://www.partgames.com'
    }
  ],
  certifications: [],
  educations: [
    {
      institution: 'Indiana State University',
      degree: 'Master of Science in Computer Science',
      from: '08/2022',
      to: '05/2024'
    },
    {
      institution: 'University of Mazandaran',
      degree: 'Bachelor of Engineering in Information Technology',
      from: '2012',
      to: '2016'
    }
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
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0 // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-DK8GGHDHQY' // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6
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
      'procyon'
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem'
    }
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: false
};

export default CONFIG;

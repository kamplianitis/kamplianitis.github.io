// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kamplianitis',
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['kamplianitis/SingleCycleProcessor', 'kamplianitis/SystemsSecurity', 'kamplianitis/Parallel-Computation-Map-Reduce-Algorithm', 'kamplianitis/MinCut_Algorithm', 'kamplianitis/Multi-Cycled-Pipelined-Processor', 'kamplianitis/TinyOsFinal', 'kamplianitis/Twitter_Parser_Editor', 'kamplianitis/DSPProjects', 'kamplianitis/RandomAccessQueries', 'kamplianitis/Theory_Of_Computation_TUC_Comiler'],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Amplianitis Konstantinos Portfolio',
    description: 'Github page portfolio of Konstantinos Amplianitis',
    imageURL: '',
  },
  social: {
    linkedin: 'https://linkedin.com/in/konstantinos-amplianitis-487664277',
    twitter: 'kostasamplia99',
    mastodon: '',
    researchGate: '',
    facebook: 'kostas.amplianitis.1',
    instagram: 'kostas_amplia',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: 'amplianitis.konsantinos',
    telegram: '',
    website: '',
    phone: '',
    email: 'amplianitiskonstantinos@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/19xwat60HmXfkHLi2tEGhgVq6zTSGrx0l/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'VHDL',
    'C',
    'Java',
    'PostgreSQL',
    'Django',
    'MongoDB',
    'Git',
    'Docker',
    'Linux',
    'Assembly',
    'Matlab',

  ],
  experiences: [
    {
      company: 'Sphynx Technology Solutions',
      position: 'Sofware Engineer',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://sphynx.ch',
    },
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'Technical University of Crete',
      degree: 'Electrical and Computer Engineer',
      from: '2017',
      to: '2023',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  themeConfig: {
    defaultTheme: 'luxury',

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
    ],

  },

  enablePWA: false,
};

export default CONFIG;

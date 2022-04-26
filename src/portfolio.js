/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Islam Abdo",
  title: "Hi all, I'm Islam",
  subTitle: emoji("A passionate Embedded Software Developer 🚀 having an experience of working with Microcontrollers, Sensors, Firmwares, and Real-Time Operating Systems. Good working knowledge in C, Python, and Circuit Design."),
  resumeLink:
    "https://drive.google.com/drive/folders/1sa5V7hjf66fkZuOpJz1Th2jQNC9WBKOk?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  //   /* Your Social Media Link */
  github: "https://github.com/Eslam-Abdo",
  linkedin: "https://www.linkedin.com/in/Islam-Abdo/",
  youtube: "https://www.youtube.com/channel/UC8Vd3gI4ckdl9JJMLO09oXA",
  gmail: "eng-islam.abdo1722@alexu.edu.eg",
  facebook: "https://www.facebook.com/islam.abdo.925/",
  instagram: "https://www.instagram.com/islamabd0/",
  hackerrank: "https://www.hackerrank.com/Eslam_Abdo",
  kaggle: "https://www.kaggle.com/islamabd0",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOPING FIRMWARE OF MICROCONTROLLERS AND DESIGNING HARDWARE CIRCUIT (PCBs)",
  skills: [
    emoji("⚡ Design and implement software of Embedded devices and systems."),
    emoji("⚡ Working on test and debug tools like logic analyzer, Oscilloscope, etc"),
    emoji("⚡ Working on tools like Keil, Eclipse, Truestudio, VScode, Eagle, etc. "),
    emoji("⚡ Design Electronics circuits and hardware PCBs")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery 
https://iconify.design/
*/

  softwareSkills: [
    {
      skillName: "C",
      classname: "logos:c"
    },
    {
      skillName: "python",
      classname: "logos:python",
    },
    // {
    //   skillName: "Embedded C",
    //   classname: "fab fa-css3-alt"
    // },
    {
      skillName: "Microcontroller",
      classname: "uil:processor"
    },
    {
      skillName: "AVR",
      classname: "file-icons:assembly-avr"
    },
    {
      skillName: "ARM",
      classname: "file-icons:assembly-arm"
    },
    {
      skillName: "STM32",
      classname: "simple-icons:stmicroelectronics"
    },
    {
      skillName: "Arduino",
      classname: "logos:arduino"
    },
    {
      skillName: "ESP8622",
      classname: "simple-icons:espressif"
    },
    {
      skillName: "Raspberry pi",
      classname: "logos:raspberry-pi"
    },
    {
      skillName: "NVIDIA Jetson Nano",
      classname: "simple-icons:nvidia"
    },
    {
      skillName: "Eclipse",
      classname: "logos:eclipse-icon"
    },
    // {
    //   skillName: "Keil",
    //   classname: "fab fa-docker"
    // },
    // {
    //   skillName: "Eagle",
    //   classname: "fab fa-docker"
    // },
    {
      skillName: "PCB design",
      classname: "flat-color-icons:electronics"
    },
    {
      skillName: "Linux",
      classname: "logos:linux-tux"
    },
    {
      skillName: "Matlab",
      classname: "vscode-icons:file-type-matlab"
    },
     {
      skillName: "VScode",
      classname: "vscode-icons:file-type-vscode"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Alexandria University",
      logo: require("./assets/images/Alexandria_University_logo.png"), 
      subHeader: "Bachelor of Engineering in Electronics & Communications",
      duration: "September 2017 - June 2022",
      desc: "Took courses about Software Engineering, Operating Systems, Embedded, Electronics, Communications ...",
      descBullets: [
        "I have studied basic software engineering subjects like Programming, OS, Embedded, Electronics, Communications etc.",
        "Apart from this, I have done courses on Embedded System, ARM, C/C++, ect.",
        "I was joined a technical team as a student activity and I was involved a robotics competitions.",
      ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Robotics Instructor",
      company: "Techno Future Egypt",
      companylogo: require("./assets/images/TechnoFuture_logo.png"),
      date: "OCT 2021 - MAR 2022",
      // location: "Alexandria, Eygpt",
      desc:
        "Taught kids how to build robots, and how to program them using sequence programming methods, Problem Solving, Robot Design, Lego pieces, EV3 programming, and PID Controller.",
    },
    {
      role: "Embedded Engineer",
      company: "Freelancer",
      companylogo: require("./assets/images/embedded_desien.jpg"),
      date: "SEP 2020 - SEP 2021",
      // location: "Alexandria, Eygpt",
      desc:
      " I was working as a PCB design Engineer. PCB design is my profession as well as my hobby. I have delivered many PCB layouts for successful products. I would like to give my best service and talent to the projects.",
    },
    {
      role: "Electrical Team Member",
      company: "M.I.A Robotics",
      companylogo: require("./assets/images/MIA_logo.png"),
      date: "JUN 2018 - JAN 2020",
      // location: "Alexandria, Eygpt",
      desc:
        "M.I.A is a technical team of Alexandria University students. I was involved in ABU Robocon which is a robotics competition.",
      descBullets: [
        "Designed control circuits used in the quadruped robot.",
        "Worked on a wireless communications system with the wheeled robot and ps2 joystick (pilot).",
        "Worked on Reversed engineering for cytron 10-A motor driver.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20-1116162620",
  email_address: "eng-islam.abdo1722@alexu.edu.eg"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

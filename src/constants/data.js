import images from "./images";
import {FaUserGraduate,FaBriefcase, FaRocket, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;
//
const education = [
    {
        id: 1,
        icon: <FaUserGraduate style = {{ fill: gradient }} />,
        title: "BSc Physics ~ Walter Sisulu University",
        text: "This degree was an invaluable educational journey where I was introduced to the fundamental aspects of nature as a whole.",
        link: 'https://www.wsu.ac.za/'
    },
    {
        id: 2,
        icon: <FaBriefcase style = {{ fill: gradient }} />,
        title: "Software Dev Intern ~ CapaCiTi",
        text: "I focused on responsive design and cross-browser compatibility, actively participated in code reviews, and provided constructive feedback",
        link: 'https://uvuafrica.com/capaciti/'
    },
    {
        id: 3,
        icon: <FaBriefcase style = {{ fill: gradient }} />,
        title: "Junior Software Dev ~ Younglings",
        text: "I specialize in web app dev technologies like MERN stack & I collaborate with cross-functional teams, ensuring high-quality products",
        link: 'https://www.younglings.academy/'
    },

];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Ideas & Plans",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Prompt Strategies",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    }
];

const features = [
    {
        id: 10,
        title: "Digital Marketing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 11,
        title: "Trade Shows",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 12,
        title: "Branding",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 13,
        title: "Content Creation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }, 
    {
        id: 14,
        title: "Graphic Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 15,
        title: "Media Buying",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }
];

const portfolio = [
    {
        id: 16,
        title: "The ChatApp is a messaging platform designed for seamless communication between users, It enables individuals to exchange text messages.",
        text: "Node JS | React | MongoDB | Socket.io",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "The Code X Banking system app is a digital platform that allows users to manage their finances conveniently from their mobile devices.",
        text: "Python | CustomTkinter",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "A gadget borrowing website allows users to rent or borrow various gadgets and electronic devices from other users within a community.",
        text: "HTML | CSS | JavaScript ",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "CSS3",
        text: "Styling",
        image: images.customer_img_1,
        rating: 4
    },
    {
        id: 20,
        name: "Figma",
        text: "Design",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "HTML5",
        text: "Markup",
        image: images.customer_img_3,
        rating: 4
    },
    {
        id: 22,
        name: "Java",
        text: "Language",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Node",
        text: "Framework",
        image: images.customer_img_5,
        rating: 4
    },
    {
        id: 24,
        name: "JavaScript",
        text: "Language",
        image: images.customer_img_6,
        rating: 4
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+425 235 712",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "solnhub@info.com",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "United Kingdom, New Street",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
]
const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: '../assets/images/Creative.PNG',
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: '../assets/images/ChatApp.PNG',
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: '../assets/images/BankApp.PNG',
      source_code_link: "https://github.com/",
    },
  ];


const sections = {education, about, qualities, features, portfolio, testimonials, contact, projects};

export default sections;
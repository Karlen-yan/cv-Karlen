import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: {
        home: "Home",
        about: "About",
        experience: "Experience",
        languege: "Language",
        contact: "Contact",
        formations: "Education",
        downloadCV: "Download",
        indexParagraph1:
          "I have experience in web development using a variety of technologies, including Java, Vue.js, PHP, Node.js, Express, and MongoDB. I am also familiar with relational databases like MySQL and PostgreSQL, and I have skills in version control systems like Git and GitHub.",
        indexParagraph2:
          "Additionally, I have knowledge in front-end technologies such as HTML5 and CSS3, and I have worked with modern frameworks like Next.js and Bootstrap 5. I also have experience using UI libraries like Material UI to create attractive and responsive interfaces.",
        indexParagraph3:
          "In the backend development field, I have worked with Node.js and Express to create robust and scalable APIs. I have also used NoSQL databases like MongoDB for efficient data storage.",
        indexParagraph4:
          "Furthermore, I have experience using Flask, a Python framework, for rapid web application development. I have also explored the field of big data using Pandas and Matplotlib for data analysis and visualization.",
        " indexParagraph5":
          "I also have knowledge in WordPress for website creation and customization, as well as a strong understanding of object-oriented programming in Java, Python, JavaScript, and PHP.",
        indexParagraph6:
          "Although I am a junior developer, I am committed to continue learning and improving my technical skills in web development.",
        welcomeTitle: "Welcome to my interactive full-stack web development CV",
        technicalSkillsTitle: "My technical skills",

        aboutTitle: "About Me",
        aboutContent: {
          paragraph1:
            "Hello everyone! My name is Karlen Hakobyan and I'm delighted to share a little bit about myself with you. I am a passionate web developer with a strong desire to turn ideas into reality.",
          paragraph2:
            "I have completed a Higher Degree in Web Development, where I acquired a solid set of skills and knowledge necessary to face the challenges of the programming world. However, my passion for music is what truly defines me.",
          paragraph3:
            "For a long time, I have been playing Armenian wind instruments such as the duduk, zurna, parkapzuk, and shvi. Music is my true escape and an endless source of inspiration for my work as a web developer.",
          paragraph4:
            "Creativity is one of the key elements that I apply in web design and development. I always seek new ideas and innovative solutions to make my projects stand out and provide an exceptional experience.",
          paragraph5:
            "Before embarking on my web design training, I started learning on my own as a self-taught learner. It was then that I discovered my passion for this field and decided to study it formally. This proactivity and dedication demonstrate my motivation to learn and constantly grow.",
          paragraph6:
            "In addition, I enjoy working in collaborative teams, where I can contribute my ideas and constructive suggestions. Actively participating in team meetings allows me to improve code quality and development efficiency. I consider teamwork essential to achieve outstanding results."
        },

        experienceTitle: "Experience",
        experienceItem1: {
          title: "Web Developer",
          date: "MIXO 2022 - 2023",
          description:
            "As a full-stack web developer, I have gained practical experience in frontend and backend development through my work on various projects, including Mixo. I have been responsible for designing and developing website pages, using my skills in frontend and backend technologies."
        },
        experienceItem2: {
          title: "Web Designer",
          date: "Mercat Immobiliari 2022",
          description:
            "As a self-taught web designer, I have developed websites using the WordPress platform, with a special focus on the real estate sector through the Mercat Immobiliari project."
        },
        experienceItem3: {
          title: "Sales",
          date: "Ereven, 2017, Yerevan (Armenia)",
          description:
            "I assisted customers with their purchases and provided product recommendations while performing tasks such as loading and unloading merchandise."
        },

        languege: "Language",
        languagesItem1: {
          language: "Armenian",
          level: "Native level"
        },
        languagesItem2: {
          language: "Spanish",
          level: "Advanced level"
        },
        languagesItem3: {
          language: "English",
          level: "Intermediate level"
        },
        languagesItem4: {
          language: "Russian",
          level: "Intermediate level"
        },

        contactTitle: "Contact",
        contactContent: {
          tel: "Tel:",
          email: "Email:",
          address: "Address:",
          github: "Github:",
          linkedin: "Linkedin:"
        },

        formationsTitle: "Education",
        formationsContent: {
          fpTitle: "Higher Degree in Web Development",
          fpDate:
            "Xavier School of Professional Technical Education, Barcelona, 2021-2023",
          musicologyTitle: "Bachelor's Degree in Musicology",
          musicologyDate: "Central University of Armenia, Armenia, 2017-2019",
          highSchoolTitle: "Scientific-Technological High School Diploma",
          highSchoolDate: "Yerevan Secondary School N 195, Armenia, 2017",
          complementaryTitle: "Additional Training",
          cpTitle: "Web Design and Programming CP (480h), 2021",
          cpDate: "IVEAEMPA - BAIX WORLD TRADE CENTER"
        }
      }
    },
    ES: {
      translation: {
        home: "Inicio",
        about: "Sobre mí",
        experience: "Experiencia",
        languege: "Idioma",
        contact: "Contacto",
        formations: "Formación",
        downloadCV: "Descargar",
        indexParagraph1:
          "Poseo experiencia en el desarrollo de aplicaciones web utilizando una variedad de tecnologías, incluyendo Java, Vue.js, PHP, Node.js, Express y MongoDB. También estoy familiarizado con bases de datos relacionales como MySQL y PostgreSQL, y tengo habilidades en el manejo de sistemas de control de versiones como Git y GitHub.",
        indexParagraph2:
          "Además, tengo conocimientos en tecnologías front-end como HTML5 y CSS3, y he trabajado con frameworks modernos como Next.js y Bootstrap 5. También tengo experiencia en el uso de bibliotecas de interfaz de usuario como Material UI para crear interfaces atractivas y responsivas.",
        indexParagraph3:
          "En el ámbito de desarrollo backend, he trabajado con Node.js y Express para crear APIs robustas y escalables. También he utilizado bases de datos NoSQL como MongoDB para el almacenamiento eficiente de datos.",
        indexParagraph4:
          "Además, tengo experiencia en el uso de Flask, un framework de Python, para el desarrollo rápido de aplicaciones web. También he explorado el campo del big data utilizando Pandas y Matplotlib para el análisis y visualización de datos.",
        indexParagraph5:
          "También tengo conocimientos en WordPress para la creación y personalización de sitios web, así como una sólida comprensión de la programación orientada a objetos en Java, Python, JavaScript y PHP.",
        indexParagraph6:
          "Aunque soy un desarrollador junior, estoy comprometido en seguir aprendiendo y mejorar mis habilidades técnicas en el desarrollo web.",
        welcomeTitle:
          "Bienvenidos a mi CV interactivo de desarrollo web full stack",
        technicalSkillsTitle: "Mis habilidades técnicas",
        aboutTitle: "Sobre mí",
        aboutContent: {
          paragraph1:
            "¡Hola a todos! Mi nombre es Karlen Hakobyan y me complace compartir con ustedes un poco sobre mí. Soy un apasionado desarrollador web con un fuerte deseo de convertir ideas en realidad.",
          paragraph2:
            "He completado un Grado Superior en Desarrollo de Aplicaciones Web, donde adquirí un conjunto sólido de habilidades y conocimientos necesarios para enfrentar los desafíos del mundo de la programación. Sin embargo, mi pasión por la música es lo que realmente me define.",
          paragraph3:
            "Desde hace tiempo, he estado tocando instrumentos de viento armenios como el duduk, zurna, parkapzuk y shvi. La música es mi verdadero escape y una fuente inagotable de inspiración para mi trabajo como desarrollador web.",
          paragraph4:
            "La creatividad es uno de los elementos clave que aplico en el diseño y desarrollo de aplicaciones web. Siempre busco nuevas ideas y soluciones innovadoras para hacer que mis proyectos se destaquen y brinden una experiencia excepcional.",
          paragraph5:
            "Antes de embarcarme en mi formación en diseño web, comencé a aprender por mi cuenta de forma autodidacta. Fue entonces cuando descubrí mi pasión por este campo y decidí estudiarlo formalmente. Esta proactividad y dedicación demuestran mi motivación para aprender y crecer constantemente.",
          paragraph6:
            "Además, disfruto trabajando en equipos colaborativos, donde puedo aportar mis ideas y sugerencias constructivas. Participar activamente en reuniones de equipo me permite mejorar la calidad del código y la eficiencia del desarrollo. Considero que el trabajo en equipo es esencial para lograr resultados sobresalientes."
        },

        experienceTitle: "Experiencia",
        experienceItem1: {
          title: "Desarrollador web",
          date: "MIXO 2022 - 2023",
          description:
            "Como desarrollador web full-stack, he adquirido experiencia práctica en el desarrollo de frontend y backend a través de mi trabajo en varios proyectos, incluido Mixo. He sido responsable del diseño y desarrollo de páginas de sitios web, usando mis habilidades en tecnologías frontend y backend."
        },
        experienceItem2: {
          title: "Diseñador web",
          date: "Mercat Immobiliari 2022",
          description:
            "Como diseñador web autodidacta, he desarrollado sitios web utilizando la plataforma WordPress, con especial foco en el sector inmobiliario a través del proyecto Mercat Immobiliari."
        },
        experienceItem3: {
          title: "Ventas",
          date: "Ereven, 2017, Yerevan (Armenia)",
          description:
            "Asistí a los clientes con sus compras y brindé recomendaciones de productos mientras realizaba tareas como cargar y descargar mercancías."
        },

        languege: "Idioma",
        languagesItem1: {
          language: "Armenio",
          level: "Nivel nativo"
        },
        languagesItem2: {
          language: "Español",
          level: "Nivel alto"
        },
        languagesItem3: {
          language: "Inglés",
          level: "Nivel medio"
        },
        languagesItem4: {
          language: "Ruso",
          level: "Nivel medio"
        },

        contactTitle: "Contacto",
        contactContent: {
          tel: "Tel:",
          email: "Email:",
          address: "Dirección:",
          github: "Github:",
          linkedin: "Linkedin:"
        },

        formationsTitle: "Formación",
        formationsContent: {
          fpTitle: "FP de Grado Superior de Desarrollo de aplicaciones web",
          fpDate: "Xavier Escola técnico profesional, Barcelona, 2021-2023",
          musicologyTitle: "Grado en musicología",
          musicologyDate: "Universidad Central de Armenia, Armenia, 2017-2019",
          highSchoolTitle: "Bachillerato científico tecnológico",
          highSchoolDate: "Escuela secundaria Yerevan N 195, Armenia, 2017",
          complementaryTitle: "Formación complementaria",
          cpTitle: "CP de Programación y diseño de páginas web (480h), 2021",
          cpDate: "IVEAEMPA - BAIX WORLD TRADE CENTER"
        }
      }
    }
  },
  lng: "ES",
  fallbackLng: "EN"
});

export default i18n;

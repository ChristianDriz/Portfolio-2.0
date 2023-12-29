import Poster from '../img/projects/poster.png'
import Ordering from '../img/projects/ordering.png'
import Dashboard from '../img/projects/dashboard.png'
import Ecommerce from '../img/projects/ecommerce.png'
import FuelOn from '../img/projects/fuel on.png'
import WeatherApp from '../img/projects/weather app.png'
import PortfolioUI from '../img/projects/portfolio ui.png'
import Portfolio from '../img/projects/portfolio.png'
import Messaging from '../img/projects/messaging.png'
import ToDo from '../img/projects/To do app.png'
import AgeCal from '../img/projects/age-calculator.png'
import NewsLetter from '../img/projects/newsletter.png'

const Data = [
    { 
        id: 1, 
        type: 'web', 
        title: 'Personal Portfolio', 
        desc: 'My personal portfolio with responsive and dark mode feature using react and tailwind. ', 
        img: Portfolio, 
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/ChristianDriz/Portfolio-2.0',
        preview: 'https://drix-portfolio.vercel.app/'
    },
    { 
        id: 2, 
        type: 'web', 
        title: 'Fuel-On', 
        desc: 'An On-line Information Management System with 2D Mapping that is capable of monitoring and improving the efficiency of fuel distribution at gasoline stations. ', 
        img: FuelOn, 
        tech: ['HTML', 'CSS', 'JavaScript','Bootstrap', 'PHP'],
        github: 'https://github.com/ChristianDriz/fuel-on',
    },
    { 
        id: 3, 
        type: 'web', 
        title: 'Suit Up', 
        desc: 'A simple ecommerce front end web design using bootstrap and jquery.', 
        img: Ecommerce, 
        tech: ['HTML', 'CSS', 'JavaScript','Bootstrap']
    },
    { 
        id: 4, 
        type: 'web', 
        title: 'Messaging', 
        desc: 'A simple front end messaging web app with login and sign up page using react', 
        img: Messaging, 
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/ChristianDriz/Messaging-React-App',
        preview: 'https://christiandriz.github.io/Messaging-React-App/'

    },
    { 
        id: 5, 
        type: 'web', 
        title: 'Weather App', 
        desc: 'A simple weather application with dark mode feature', 
        img: WeatherApp, 
        tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
        github: 'https://github.com/ChristianDriz/weather-app',
        preview: 'https://christiandriz.github.io/weather-app/'
    },
    { 
        id: 6, 
        type: 'ui', 
        title: 'Admin Dashboard', 
        desc: 'Admin Dashboard user interface using figma', 
        img: Dashboard, 
        tech: ['Figma'] 
    },
    { 
        id: 7,
        type: 'ui', 
        title: 'Food Ordering', 
        desc: 'A simple food ordering user interface using figma', 
        img: Ordering, 
        tech: ['Figma'] 
    },
    { 
        id: 8, 
        type: 'ui', 
        title: 'Portfolio UI Design', 
        desc: 'Portfolio user interface using figma with darkmode feature.', 
        img: PortfolioUI, 
        tech: ['Figma'] 
    },
    { 
        id: 9, 
        type: 'graphics', 
        title: 'Poster', 
        desc: 'Fuel On capstone poster using canva and adobe photoshop', 
        img: Poster, 
        tech: ['Canva', 'Photoshop'] 
    },
    { 
        id: 10, 
        type: 'web', 
        title: 'To Do App', 
        desc: 'A simple to do app using react js and tailwind', 
        img: ToDo, 
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/ChristianDriz/To-do-app',
        preview: 'https://drix-to-do-app.vercel.app/'
    },
    { 
        id: 11, 
        type: 'web', 
        title: 'News Letter', 
        desc: 'A Frontend Mentor challenge: create a Newsletter Sign-up form with a success message using React and Tailwind.', 
        img: NewsLetter, 
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/ChristianDriz/Newsletter-sign-up-form-with-success-message',
        preview: 'https://drix-newsletter-sign-up-form-with-success-message.vercel.app/'
    },
    { 
        id: 12, 
        type: 'web', 
        title: 'Age Calculator', 
        desc: 'A Frontend Mentor challenge: create an Age calculator app using React and Tailwind.', 
        img: AgeCal, 
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/ChristianDriz/Age-calculator-app',
        preview: 'https://drix-age-calculator-app.vercel.app/'
    },
]
export default Data;

// const Data = [
//     { 
//         id: 1, 
//         type: 'web', 
//         title: 'Personal Portfolio', 
//         desc: 'My personal portfolio with responsive and dark mode feature using react and tailwind. ', 
//         img: Portfolio, 
//         tech: ['react', 'tailwind'],
//         github: 'https://github.com/ChristianDriz/Portfolio-2.0',
//         preview: 'https://drix-portfolio.vercel.app/'
//     },
//     { 
//         id: 2, 
//         type: 'web', 
//         title: 'Fuel-On', 
//         desc: 'An On-line Information Management System with 2D Mapping that is capable of monitoring and improving the efficiency of fuel distribution at gasoline stations. ', 
//         img: FuelOn, 
//         tech: ['html5', 'css3', 'javascript','bootstrap', 'php'],
//         github: 'https://github.com/ChristianDriz/fuel-on',
//     },
//     { 
//         id: 3, 
//         type: 'web', 
//         title: 'Suit Up', 
//         desc: 'A simple ecommerce front end web design using bootstrap and jquery.', 
//         img: Ecommerce, 
//         tech: ['html5', 'css3', 'javascript','bootstrap']
//     },
//     { 
//         id: 4, 
//         type: 'web', 
//         title: 'Messaging', 
//         desc: 'A simple front end messaging web app with login and sign up page using react', 
//         img: Messaging, 
//         tech: ['react', 'tailwind'],
//         github: 'https://github.com/ChristianDriz/Messaging-React-App',
//         preview: 'https://christiandriz.github.io/Messaging-React-App/'

//     },
//     { 
//         id: 5, 
//         type: 'web', 
//         title: 'Weather App', 
//         desc: 'A simple weather application with dark mode feature', 
//         img: WeatherApp, 
//         tech: ['html5', 'css3', 'javascript', 'tailwind'],
//         github: 'https://github.com/ChristianDriz/weather-app',
//         preview: 'https://christiandriz.github.io/weather-app/'
//     },
//     { 
//         id: 6, 
//         type: 'ui', 
//         title: 'Admin Dashboard', 
//         desc: 'Admin Dashboard user interface using figma', 
//         img: Dashboard, 
//         tech: ['figma'] 
//     },
//     { 
//         id: 7,
//         type: 'ui', 
//         title: 'Food Ordering', 
//         desc: 'A simple food ordering user interface using figma', 
//         img: Ordering, 
//         tech: ['figma'] 
//     },
//     { 
//         id: 8, 
//         type: 'ui', 
//         title: 'Portfolio UI Design', 
//         desc: 'Portfolio user interface using figma with darkmode feature.', 
//         img: PortfolioUI, 
//         tech: ['figma'] 
//     },
//     { 
//         id: 9, 
//         type: 'graphics', 
//         title: 'Poster', 
//         desc: 'Fuel On capstone poster using canva and adobe photoshop', 
//         img: Poster, 
//         tech: ['simple-icons:canva', 'basil:adobe-photoshop-outline'] 
//     },
//     { 
//         id: 10, 
//         type: 'web', 
//         title: 'To Do App', 
//         desc: 'A simple to do app using react js and tailwind', 
//         img: Poster, 
//         tech: ['react', 'tailwind'],
//         github: 'https://github.com/ChristianDriz/To-do-app',
//         preview: 'https://drix-to-do-app.vercel.app/'
//     },
//     { 
//         id: 11, 
//         type: 'web', 
//         title: 'Solar System', 
//         desc: 'Animated solar system using html and css', 
//         img: Poster, 
//         tech: ['react', 'tailwind'],
//         github: 'https://github.com/ChristianDriz/Solar-System',
//         preview: 'https://christiandriz.github.io/Solar-System/'
//     },
// ]

// export default Data;
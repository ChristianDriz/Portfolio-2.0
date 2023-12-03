import Poster from '../img/projects/poster.png'
import Ordering from '../img/projects/ordering.png'
import Dashboard from '../img/projects/dashboard.png'
import Ecommerce from '../img/projects/ecommerce.png'
import FuelOn from '../img/projects/fuel on.png'
import WeatherApp from '../img/projects/weather app.png'
import PortfolioUI from '../img/projects/portfolio ui.png'
import Portfolio from '../img/projects/portfolio.png'
import Messaging from '../img/projects/messaging.png'

const Data = [
    { 
        id: 1, 
        type: 'web', 
        title: 'Personal Portfolio', 
        desc: 'My personal portfolio with responsive and dark mode feature using react and tailwind. ', 
        img: Portfolio, 
        tech: ['react', 'tailwind'] 
    },
    { 
        id: 2, 
        type: 'web', 
        title: 'Fuel-On', 
        desc: 'An On-line Information Management System with 2D Mapping that is capable of monitoring and improving the efficiency of fuel distribution at gasoline stations. ', 
        img: FuelOn, 
        tech: ['html5', 'css3', 'javascript','bootstrap', 'php'] 
    },
    { 
        id: 3, 
        type: 'web', 
        title: 'Suit Up', 
        desc: 'A simple ecommerce front end web design using bootstrap and jquery.', 
        img: Ecommerce, 
        tech: ['html5', 'css3', 'javascript','bootstrap'] 
    },
    { 
        id: 4, 
        type: 'web', 
        title: 'Messaging', 
        desc: 'A simple front end messaging web app with login and sign up page using react', 
        img: Messaging, 
        tech: ['react', 'tailwind'] 
    },
    { 
        id: 5, 
        type: 'web', 
        title: 'Weather App', 
        desc: 'A simple weather application with dark mode feature', 
        img: WeatherApp, 
        tech: ['html5', 'css3', 'javascript', 'tailwind'] 
    },
    { 
        id: 6, 
        type: 'ui', 
        title: 'Admin Dashboard', 
        desc: 'Admin Dashboard user interface using figma', 
        img: Dashboard, 
        tech: ['figma'] 
    },
    { 
        id: 7,
        type: 'ui', 
        title: 'Food Ordering', 
        desc: 'A simple food ordering user interface using figma', 
        img: Ordering, 
        tech: ['figma'] 
    },
    { 
        id: 8, 
        type: 'ui', 
        title: 'Portfolio UI Design', 
        desc: 'Portfolio user interface using figma with darkmode feature.', 
        img: PortfolioUI, 
        tech: ['figma'] 
    },
    { 
        id: 9, 
        type: 'graphics', 
        title: 'Poster', 
        desc: 'Fuel On capstone poster using canva and adobe photoshop', 
        img: Poster, 
        tech: ['simple-icons:canva', 'basil:adobe-photoshop-outline'] 
    },
]

export default Data;
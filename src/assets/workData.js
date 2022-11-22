import quizzicalPreview from '../assets/img/quizzical-preview.png'
import quizzicalFull from '../assets/img/quizzical-full.png'
import warPreview from '../assets/img/war-preview.png'
import warFull from '../assets/img/war-full.png'
import moviePreview from '../assets/img/movie-preview.png'
import movieFull from '../assets/img/movie-full.png'
import colorPreview from '../assets/img/color-preview.png'
import colorFull from '../assets/img/color-full.png'
import journalPreview from '../assets/img/journal-preview.png'
import journalFull from '../assets/img/journal-full.png'
import blogPreview from '../assets/img/blog-preview.png'
import blogFull from '../assets/img/blog-full.png'
import tindogPreview from '../assets/img/tindog-preview.png'
import tindogFull from '../assets/img/tindog-full.png'

const workData = [
    {
        _id: "1",
        title: "The React",
        titleStrong: "Quizzical App",
        subtitle: "test your knowledge!",
        previewImage: quizzicalPreview,
        fullImage: quizzicalFull,
        p1: "Test your knowledge regarding one of 6 available topics by answering 5 random questions! Each one has a single correct answer. Your final score will be displayed at the end of each game. Can you get a 5/5 score on hard difficulty?",
        p2: "This small poject was made using the Open Trivia Database, which provides the user with a specified number of questions in various categories and difficulties. The app also randomizes placements of correct answers in each question to make each quiz attempt truly unique!",
        p3: "The app was made using React functional components with hooks. You can test it for yourself or check the source code using one of the links provided below:",
        appLink: "https://voluble-crostata-ab0fbc.netlify.app/",
        repoLink: "https://github.com/tentacle-bean/quizzical-app",
    },
    {
        _id: "2",
        title: '"War"',
        titleStrong: "Web Application",
        subtitle: "a classic card game",
        previewImage: warPreview,
        fullImage: warFull,
        p1: "A recreation of the well known War card game in the form of a javascript web application made using the Deck of Cards API. Is your luck good enough to win against the computer?",
        p2: "The goal of the game is to collect all of the cards available in the deck. You can win your opponent's cards by pulling a higher value card during a battle. If both of the cards have the same value - a war starts, and the stakes get higher!",
        p3: "You can check the game out for yourself or look through the source code using one of the two links available below:",
        appLink: "https://tentacle-bean.github.io/war-card-game/",
        repoLink: "https://github.com/tentacle-bean/war-card-game",
    },
    {
        _id: "3",
        title: "Movie Watchlist",
        titleStrong: "Maker",
        subtitle: "keep track of movies",
        previewImage: moviePreview,
        fullImage: movieFull,
        p1: "Having trouble keeping track of all those interesting movies to watch? Just search them up by typing in the title in the searchbar and add them to your personal watchlist!",
        p2: `Every movie you add will be present in the "My Watchlist" tab visible in the top right corner. The app will store your chosen movies in localstorage - so no need to worry about losing your data on refresh! You can also easily remove entries from your watchlist in case you've already seen them.`,
        p3: "Links to the deployed website and it's github repository are available below. Bear in mind the search function won't work due to Netlify's security restrictions and The Open Movie Database's movie data being provided in HTTP instead of HTTPS. If you want to fully test the app you'll need to host it yourself.",
        appLink: "https://funny-sorbet-4c7175.netlify.app/",
        repoLink: "https://github.com/tentacle-bean/movie-watchlist-maker",
    },
    {
        _id: "4",
        title: "The Color Palette",
        titleStrong: "Generator",
        subtitle: "find a color palette",
        previewImage: colorPreview,
        fullImage: colorFull,
        p1: "Need to find an inspiring color combination for your new project? Look no further! Just pick a base color for your new palette, choose a palette type and copy the new colors' hex codes.",
        p2: "This project was made using The Color API. It provides the user with a few color scheme generation types to use, those types being: monochrome, monochrome-dark, monochrome-light, analogic, complement, analogic-complement, triad and some more. The end results vary greatly depending on the option you choose so experiment and find out which mode works best for your needs.",
        p3: "You can check the app for yourself and generate your own color scheme or look through the app's source code using one of the links provided below:",
        appLink: "https://tentacle-bean.github.io/color-picker/",
        repoLink: "https://github.com/tentacle-bean/color-picker",
    },
    {
        _id: "5",
        title: "Travel Journal",
        titleStrong: "Site Mockup",
        subtitle: "a react and css3 practice",
        previewImage: journalPreview,
        fullImage: journalFull,
        p1: "This small mockup of a personal travel journal site was made using React and CSS3. It was made in order to practice writing data-driven components in React, which were created based on the data of 3 chosen locations.",
        p2: "The site's design is fully responsive on most common pc and mobile viewport sizes. Layout of individuald cards was made using CSS grid.",
        p3: "You can check the web app out yourself or look through it's source code using one of the links available below:",
        appLink: "https://loquacious-platypus-506d42.netlify.app/",
        repoLink: "https://github.com/tentacle-bean/travel-journal",
    },
    {
        _id: "6",
        title: "Tindog",
        titleStrong: "Web Application",
        subtitle: "a social media app mockup",
        previewImage: tindogPreview,
        fullImage: tindogFull,
        p1: "Tindog is a small scale mockup of a popular mobile social media app. It was made with responsive web design practice in mind, with some random animal pictures to brighten the mood.",
        p2: "The application is interactive - you can either like or dislike each entry. After doing so an animated badge will appear on each rated picture. The app can be further populated with additional fake animal profiles by adding necessary data - additional components will be automatically created by the app.",
        p3: "You can check the app out yourself or look through it's source code by clicking one of the links below:",
        appLink: "https://astounding-naiad-5f10ec.netlify.app/",
        repoLink: "https://github.com/tentacle-bean/Tindog",
    },
    {
        _id: "7",
        title: "Blog Site",
        titleStrong: "Mockup",
        subtitle: "a website design practice",
        previewImage: blogPreview,
        fullImage: blogFull,
        p1: "A small project created in order to practice designing responsive, aesthetically pleasing websites.",
        p2: "The application interacts with a simple API, posting the contents of the written post and updating the list of placeholder entries at the bottom with newly added data",
        p3: "You can test the application yourself or visit it's repository by using one of the links below:",
        appLink: "https://tentacle-bean.github.io/blog-mockup/",
        repoLink: "https://github.com/tentacle-bean/blog-mockup",
    },
    {
        _id: "8",
        title: "",
        titleStrong: "",
        subtitle: "",
        previewImage: blogPreview,
        fullImage: blogFull,
        p1: "",
        p2: "",
        p3: "",
        appLink: "",
        repoLink: "",
    },
    
]

export default workData
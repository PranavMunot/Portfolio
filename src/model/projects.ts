
type projectType = {
    projectName: string,
    tech: Array<string>,
    timeTaken: string,
    description: Array<string>,
    isLive: boolean,
    liveURL: string,
    gitURL: string
}

const ProjectModel: projectType[] = [{
    projectName: 'Chat Dot',
    tech: ['ExpressJS', 'ReactJS', 'MongoDB', 'socket.io', 'Material UI'],
    timeTaken: '3 Month',
    description: [
        'Chatdot is a free real-time chat application where users can connect instantly using a 6-letter alphanumeric code. After a quick sign-up, you can generate a unique chat code, share it, and start chatting seamlessly. ',
        'With real-time messaging and emoji support, Chatdot makes conversations simple and fun. Whether you’re connecting with friends, colleagues, or new people, the app provides an easy and lightweight way to chat. ',
        'No personal details are required—just instant communication without the clutter. Sign up, share your code, and start chatting effortlessly! 🚀💬😃'
    ],
    isLive: true,
    liveURL: 'https://chatdot.netlify.app/',
    gitURL: 'https://github.com/PranavMunot/Chat.-MERN'
}, {
    projectName: 'LCO Basketball Team',
    tech: ['ReactJS', 'SCSS'],
    timeTaken: '1 Month',
    description: [
        'LCO Basketball Team Website is a dedicated platform showcasing the team, players, and upcoming tournaments. The site highlights player profiles with stats like height, weight, points per game (PPG), and fan count, allowing fans to get to know their favorite athletes.',
        'Featuring sections like “We Are Champions!” and “Go Fight for It, Team”, it celebrates the team’s journey and achievements. The “Tournament” section keeps fans updated on upcoming events, while the FAQ section provides essential details. ',
        'Stay connected with the LCO Basketball Team and follow their progress on the court! 🏀🔥'
    ],
    isLive: true,
    liveURL: 'https://nifty-bassi-5fff1c.netlify.app/',
    gitURL: 'https://github.com/PranavMunot/Lco-sports-website'
}]

export default ProjectModel;
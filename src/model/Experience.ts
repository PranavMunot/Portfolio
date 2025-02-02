
type experienceType = {
    companyName: string,
    designation: string,
    isCurrent: boolean,
    description: Array<string>,
    startDate: string,
    endDate?: string,
}

const ExperienceModel: experienceType[] = [{
    companyName: 'Dassault System Solution Labs',
    designation: 'Software Engineer Specialist',
    isCurrent: true,
    description: [
        `Developed and updated application features based on business requirements using Microfrontend Architecture with Webpack.`,
        `Followed clean coding principles to refactor and optimize code, reducing complexity and improving performance.`,
        `Enhanced app and data grid performance using React, VueJS, JQuery, JQGrid, and other libraries.`,
        `Improved responsiveness and scalability by optimizing DOM manipulation and handling large datasets effectively.`,
    ],
    startDate: 'July 2023',
}, {
    companyName: 'Xoriant Solution Pvt. Ltd.',
    designation: 'Software Engineer',
    isCurrent: false,
    description: [
        `Integrated built-in heart rate and location sensors with the application via the Fitbit API.`,
        `Implemented user authentication in the React application using Fitbit OAuth 2.0 and securely stored sensitive user data in Azure Cloud.`,
        `Engaged in the application's development, debugging, and troubleshooting throughout its life cycle.`,
        `Used ReactJS to create new components from scratch and added functionality to them.`
    ],
    startDate: 'Sept. 2021',
    endDate: 'July 2023'
}]

export default ExperienceModel;
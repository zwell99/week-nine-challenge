// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project."
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide a description of how to install your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide a description of how your project would be used."
    },
    {
        type: "list",
        name: "liscense",
        message: "Please provide the liscense for your project.",
        choices: [
            "Academic Free License v3.0",
            "Apache license 2.0",
            "Artistic license 2.0",
            "Boost Software License 1.0",
            "BSD 2-clause 'Simplified' license",
            "BSD 3-clause New or Revised license",
            "BSD 3-clause Clear license",
            "BSD Zero-Clause license",
            "Creative Commons license family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License 1.1",
            "GNU Affero General Public License v3.0",
            "GNU General Public License family",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please add guidlines for future contributors."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide instruction on how to run tests."
    },
    {
        type: "input",
        name: "githubUserName",
        message: "Please provide your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

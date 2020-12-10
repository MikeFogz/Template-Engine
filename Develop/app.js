const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArr = [];

//1) Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//2) After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

//3) After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


//misinterpreted prompt. User is generating the team, not a team member entering their info. 


//First ask Add Team Member (what role)

function addRole() {
    inquirer.
    prompt([
    {
        type: 'list', 
        name: 'addRole', 
        message: 'What team role are you adding?', 
        choices: [
            'Manager', 'Engineer', 'Intern'
        ]
    },
])
.then((res) => {
    console.log(res);
    if(res.addRole === 'Manager'){
        addManager();
    } else if(res.addRole === 'Engineer'){
        addEngineer();
    } else {
        addIntern();
    }
})
};

// function to add in Manager question prompts
function addManager () {
    inquirer.prompt([
        {
            type: "input", 
            name: "managerName", 
            message: "What is the manager's name?",
        },
        {
            type: "input", 
            name: "managerId", 
            message: "What is the manager's id?",
        },
        {
            type: "input", 
            name: "managerEmail", 
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
        ])
        .then((res) => {
            console.log(res);
        
        })
};

// function to add in Engineer question prompts
function addEngineer () {
    inquirer.prompt([
        {
            type: "input", 
            name: "engineerName", 
            message: "What is the engineer's name?",
        },
        {
            type: "input", 
            name: "engineerId", 
            message: "What is the engineer's id?",
        },
        {
            type: "input", 
            name: "engineerEmail", 
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the engineer's GitHub username?",
        },
        ])
        .then((res) => {
            console.log(res);
            const newEngineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.gitHub)
            teamArr.push(newEngineer);
            addNew();
        })
};


// function to add in Intern question prompts
function addIntern () {
    inquirer.prompt([
        {
            type: "input", 
            name: "internName", 
            message: "What is the intern's name?",
        },
        {
            type: "input", 
            name: "internId", 
            message: "What is the intern's id?",
        },
        {
            type: "input", 
            name: "internEmail", 
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
        },
        ])
        .then((res) => {
            console.log(res);
        
        })
};

// Function asking to add a new team member. 

function addNew() {
    inquirer.prompt([
        {
        type: "confirm",
        name: "addNew",
        message: "Would you like to add new team member?",
        default: true
        }
    ])
    .then((res) => {
        if(res.addNew === true){
            addRole();
        } else{
            renderTeam
        }
    })
}

//function to render the html page
function renderTeam () {

}



//start prompt
addRole()

    // .then((data) = async () => {
    //     console.log(data.role)
    //     if (data.role === "Manager") {
    //         inquirer.prompt([
    //             {
    //                 type: "input",
    //                 name: "officeNumber",
    //                 message: "What is your office number?",
    //             }
    //         ])
    //     } else if (data.role === "Engineer")
    //     {
    //         await inquirer.prompt([
    //             {
    //                 type: "input",
    //                 name: "gitHub",
    //                 message: "What is your GitHub Username?",
    //             }
    //         ])
    //     } else (data.role === "Intern")
    //     {
    //         await inquirer.prompt([
    //             {
    //                 type: "input",
    //                 name: "school",
    //                 message: "What School are you attending?",
    //             }
    //         ])
    //     }
    // })
    // .then((res) => {
    //     console.log(res)
    // })

    // Geting undefined error. 
    // Try creating functions with the prompts within them and call the functions 
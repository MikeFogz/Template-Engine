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
            const newManager = new Manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber)
            teamArr.push(newManager);
            addNew();
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
            const newIntern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool)
            teamArr.push(newIntern);
            addNew();
        })
};

// Function asking to add another team member. 

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
            renderTeam();
        }
    })
}

//function to render the html page
function renderTeam () {
    const HTML = render(teamArr);
    fs.writeFile(outputPath, HTML, (err) => {
        if (err) throw err
    })
}



//start prompt
addRole()

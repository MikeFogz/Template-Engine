const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


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


    // //Position
    // {type: "list", name: "appTitle", message: "Name of your Application",},

    // {type: "list", name: "appLicense", message: "What is your role?", choices: ['MIT', 'Apache', 'GPL', 'None']},
    // if (typeof role = intern 
    

    // Name
    // ID, EMail, Role

    //LIST: Manager, Engineer, Itern
    //IF ELSE 

    inquirer.prompt([
    {
        type: "input", 
        name: "employeeName", 
        message: "What is your Name?",
    },
    {
        type: "input", 
        name: "id", 
        message: "What is your ID?",
    },
    {
        type: "input", 
        name: "email", 
        message: "What is your Email?",
    },
    {
        type: "list", 
        name: "role", 
        message: "What is your role?", 
        choices: ['Manager', 'Engineer', 'Intern']
    },
    ])
    .then((data) = async () => {
        console.log(data.role)
        if (data.role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your office number?",
                }
            ])
        } else if (data.role === "Engineer")
        {
            await inquirer.prompt([
                {
                    type: "input",
                    name: "gitHub",
                    message: "What is your GitHub Username?",
                }
            ])
        } else (data.role === "Intern")
        {
            await inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What School are you attending?",
                }
            ])
        }
    })
    .then((res) => {
        console.log(res)
    })

    // Geting undefined error. 
    // Try creating functions with the prompts within them and call the functions 
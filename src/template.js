const template = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">Team Profile</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${employees(data)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

const manager = managerInfo => {
    return `
    <div class="card text-white bg-secondary m-3 mb-3" style="max-width: 18rem;">
        <div class="card-header">${managerInfo.getName()} - ${managerInfo.getRole()}</div>
        <div class="card-body">
            <h5 class="card-title">ID: ${managerInfo.getId()}</h5>
            <p class="card-text">Email: <a href="mailto:${managerInfo.getEmail()}">${managerInfo.getEmail()}</a></p>
            <p class="card-text">Office Number: ${managerInfo.getOfficeNumber()}</p>
        </div>
    </div>`;
}

const engineer = engineerInfo => {
    return `
    <div class="card text-white bg-secondary m-3 mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineerInfo.getName()} - ${engineerInfo.getRole()}</div>
        <div class="card-body">
            <h5 class="card-title">ID: ${engineerInfo.getId()}</h5>
            <p class="card-text">Email: <a href="mailto:${engineerInfo.getEmail()}">${engineerInfo.getEmail()}</a></p>
            <p class="card-text">GitHub: <a href="https://www.github.com/${engineerInfo.getGithub()}" target="_blank">www.github.com/${engineerInfo.getGithub()}</a></p>
        </div>
    </div>`;
}

const intern = internInfo => {
    return `
    <div class="card text-white bg-secondary m-3 mb-3" style="max-width: 18rem;">
        <div class="card-header">${internInfo.getName()} - ${internInfo.getRole()}</div>
        <div class="card-body">
            <h5 class="card-title">ID: ${internInfo.getId()}</h5>
            <p class="card-text">Email: <a href="mailto:${internInfo.getEmail()}">${internInfo.getEmail()}</a></p>
            <p class="card-text">School: ${internInfo.getSchool()}</p>
        </div>
    </div>`;
}

const employees = employeesData => {
    let html = '';
    
    for (let i = 0; i < employeesData.length; i++) {
        if (employeesData[i].getRole() === 'Manager') {
            html += manager(employeesData[i]);
        }
        if (employeesData[i].getRole() === 'Engineer') {
            html += engineer(employeesData[i]);
        }
        if (employeesData[i].getRole() === 'Intern') {
            html += intern(employeesData[i]);
        }
    }
    return html;
};

module.exports = template;
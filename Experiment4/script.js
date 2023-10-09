const project_links = [
    "https://github.com/SpecularAura/LearningOpenGL",
    "https://github.com/Riteshbhalerao11/Enabled",
    "https://github.com/VESITAIDS25/ZeroTwo-Refaktor",
    "https://github.com/SpecularAura/PredictForestFire",
    "https://github.com/Maverick8479/Wordle",
    "https://github.com/SpecularAura/TurboCSetup"
]

const project_images = [
    "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/cb1dbb7b0cf3aa4677efec16998315275870d24f/ResponsiveWebDesign/PersonalPortfolio/CGMiniProject.png",
    "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/EnabledNew.png",
    "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Hackathon.jpg",
    "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Screenshot%202023-03-06%20135241.png",
    "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Wordle.png",
    "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Screenshot%202023-05-22%20185941.png"
]

const project_titles = [
    "Model Rendering in OpenGL",
    "Enabled",
    "Refaktor - JobEasy",
    "Forest Fire Prediction using ML",
    "Python Wordle",
    "Script Collection TurboC"
]

function addProjects() {
    let projectContainer = document.getElementById("project-container");
    let i;
    let curDiv;
    let curDivHTML;
    for (i = 0; i < project_images.length; i++) {
        if (i % 2 == 0) {
            curDiv = document.createElement("div");
            curDiv.classList.add("row")
            curDivHTML = `<a target="_blank" href="${project_links[i]}"
            class="project-tile col-md d-flex flex-column justify-content-center">
                <div class="img-div"><img
                    src="${project_images[i]}"
                    alt=""></div>
                <div class="btn btn-hover"><span class="h3 text-light">${project_titles[i]}</span></div>
            </a>`
        }
        else {
            curDivHTML += `<a target="_blank" href="${project_links[i]}"
            class="project-tile col-md d-flex flex-column justify-content-center">
                <div class="img-div"><img
                    src="${project_images[i]}"
                    alt=""></div>
                <div class="btn btn-hover"><span class="h3 text-light">${project_titles[i]}</span></div>
            </a>`
            curDiv.innerHTML = curDivHTML;
            projectContainer.appendChild(curDiv);
        }
    }
    console.log(projectContainer)
}

addProjects();


function toggleProjects(event) {
    const projectContainer = document.getElementById("project-container");
    const icon = document.getElementById("toggle-icon");
    icon.classList.toggle("fa-sort-down");
    icon.classList.toggle("fa-sort-up");
    icon.classList.toggle("adjust-pos");
    projectContainer.classList.toggle("hide");
}

document.getElementById("toggle-projects").addEventListener("click", toggleProjects)
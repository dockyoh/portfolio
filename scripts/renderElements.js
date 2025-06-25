import { projects } from "./projects-data.js";

const drawerEl = document.querySelector("header");
const projectsParentEl = document.querySelector(".projects-parent");

export function showNavigation() {
  drawerEl.classList.remove("header-drawer-hide");
}

export function hideNavigation() {
  drawerEl.classList.add("header-drawer-hide");
}

export function renderProjects() {
  projects.map((project) => {
    const projectContainerEl = document.createElement("div");
    const projectImageEl = document.createElement("img");
    const projectInfoEl = document.createElement("div");
    const projectTitleEl = document.createElement("h2");
    const projectDescriptionEl = document.createElement("p");
    const projectTechEl = document.createElement("p");
    const projectButtonsEl = document.createElement("div");
    const projectDemoEl = document.createElement("a");
    const projectCodeEl = document.createElement("a");

    projectContainerEl.setAttribute("class", "projects-container");
    projectImageEl.setAttribute("class", "project-image");
    projectImageEl.setAttribute("src", `${project.image}`);
    projectImageEl.setAttribute("alt", `${project.title} thumbnail`);
    projectInfoEl.setAttribute("class", "project-info");
    projectTitleEl.setAttribute("class", "project-title");
    projectDescriptionEl.setAttribute("class", "project-description");
    projectTechEl.setAttribute("class", "project-tech");
    projectButtonsEl.setAttribute("class", "project-buttons");
    projectDemoEl.setAttribute("class", "project-demo primary-button");
    projectDemoEl.setAttribute("href", `${project.liveDemo}`);
    projectDemoEl.setAttribute("target", "_blank");
    projectCodeEl.setAttribute("class", "project-code primary-button");
    projectCodeEl.setAttribute("href", `${project.sourceCode}`);
    projectCodeEl.setAttribute("target", "_blank");

    projectTitleEl.textContent = project.title;
    projectDescriptionEl.textContent = project.description;
    projectTechEl.textContent = project.techStack;
    projectTechEl.textContent = project.techStack;
    projectDemoEl.textContent = "Live Demo";
    projectCodeEl.textContent = "GitHub Code";

    projectsParentEl.appendChild(projectContainerEl);

    projectContainerEl.appendChild(projectImageEl);
    projectContainerEl.appendChild(projectInfoEl);

    projectInfoEl.appendChild(projectTitleEl);
    projectInfoEl.appendChild(projectDescriptionEl);
    projectInfoEl.appendChild(projectTechEl);
    projectInfoEl.appendChild(projectButtonsEl);

    projectButtonsEl.appendChild(projectDemoEl);
    projectButtonsEl.appendChild(projectCodeEl);
  });
}

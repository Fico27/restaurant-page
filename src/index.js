import { loadContent } from "./content.js"
import { createMenu } from "./menu.js"


loadContent()
const homeButton = document.querySelector(".home")
const menuButton = document.querySelector(".menu")
const contactButton = document.querySelector(".contact")


homeButton.addEventListener("click", loadContent());
menuButton.addEventListener("click", createMenu());



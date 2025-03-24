
// import { createMenu } from "./menu.js"
import { loadContent, createMenu } from "./content.js"
import { createContact } from "./contact.js"



const homeButton = document.querySelector(".home")
const menuButton = document.querySelector(".menu")
const contactButton = document.querySelector(".contact")


homeButton.addEventListener("click", loadContent());
menuButton.addEventListener("click", createMenu());
contactButton.addEventListener("click", createContact());


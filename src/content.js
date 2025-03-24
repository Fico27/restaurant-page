
import { createMenu } from "./menu.js";
export { loadContent, createMenu };


function loadContent(){



    const content = document.querySelector("#content");
    const mainHeader = document.createElement('h1');
    const mainImg = document.createElement('img');
    const description = document.createElement('p');
    
    mainHeader.innerHTML = "Welcome to the home of the best Chopped Cheese in NYC!"
    mainImg.src = "https://thetasteofmontana.com/wp-content/uploads/2023/04/SpicyChoppedCheese-Re-upped-2.jpg"
    description.innerHTML = 'Come on down to our shop. We are open all hours!'
    
    content.appendChild(mainHeader)
    content.appendChild(description)
    content.appendChild(mainImg)
    
}



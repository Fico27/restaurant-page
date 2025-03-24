export { createContact }

function createContact() {
    const content = document.querySelector("#content");
    const mainHeader = document.createElement('h1');
    mainHeader.innerHTML = "Contact us"

    content.appendChild(mainHeader)


    const div1 = document.createElement("div")
    content.appendChild(div1)
    const phone = document.createElement("p")
    const email = document.createElement("p")
    const name = document.createElement("h3")

    name.innerHTML = "<strong>Owner:</strong> Beppo The Cheesey Chef"
    phone.innerHTML = "<strong>Phone:</strong> 1-555-8959"
    email.innerHTML = "<strong>Email:</strong> ImARealBoy@NotReal.com"

    div1.appendChild(name)
    div1.appendChild(phone)
    div1.appendChild(email)
}


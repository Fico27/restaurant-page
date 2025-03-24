
export { createMenu }

const content = document.querySelector("#content");
const mainHeader = document.createElement('h1');





// appending each div to the content box aka menu item to content box.

function createMenu(){

    while(content.firstChild){
        content.removeChild(content.firstChild)
    }

    mainHeader.innerHTML = "Our Menu"
    content.appendChild(mainHeader)
    for(let i = 0; i < 3; i++){

            // Creation of Elements
        const div = document.createElement('div')
        const description = document.createElement('p');
        const img = document.createElement('img');
        const h3 = document.createElement("h3")

        // Giving elements class names
        div.className = `menu${i+1}`
        h3.className = `name${i+1}`
        description.className = `item${i+1}`
        img.className = `img${i+1}`



        // appending to elements
        content.appendChild(div)
        div.appendChild(h3)
        div.appendChild(description)
        div.appendChild(img)
        

    }

    const item1Header = document.querySelector(name1)
    const item2Header = document.querySelector(name2)
    const item3Header = document.querySelector(name3)

    const item1Des = document.querySelector(item1)
    const item2Des = document.querySelector(item2)
    const item3Des = document.querySelector(item3)

    const item1Img = document.querySelector(img1)
    const item2Img = document.querySelector(img2)
    const item3Img = document.querySelector(img3)

    item1Header.innerHTML = "Classic Chopped Cheese"
    item2Header.innerHTML = "Spicy Chopped Cheese"
    item3Header.innerHTML = "BBQ Bacon Chopped Cheese"

    item1Des.innerHTML = "The OG sandwich that started it all—seasoned ground beef chopped and grilled with onions, melted American cheese, stuffed into a toasted hero roll with lettuce, tomato, and mayo."
    item2Des.innerHTML = "Kick it up a notch with spicy ground beef mixed with jalapeños, topped with pepper jack cheese, and served on a toasted roll with hot sauce, pickles, and a smear of chipotle mayo."
    item3Des.innerHTML = "A smoky twist featuring chopped beef glazed with tangy BBQ sauce, crispy bacon strips, cheddar cheese, and crunchy onions, all packed into a soft, toasted bun."

    item1Img.src = "https://images.squarespace-cdn.com/content/62227f3fe1583d580047c391/1675270594300-JD48OMWNGZ3KEZFKLDP7/DSC04309.jpg?format=1500w&content-type=image%2Fjpeg"
    item2Img.src = "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Ft0o6qw8l1ci71.jpg"
    item3Img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2021%2F10%2Febrahim-mohamed-bodega-chopped-cheese-bacon.jpg%3Fquality%3D75%26strip%3Dall&f=1&nofb=1&ipt=f2b17520159798a7a6b121c1f0fb231cdbe8b79ac88f723e48ff0a040bf690fd&ipo=images"
}



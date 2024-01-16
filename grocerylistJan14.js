//grab the body from HTML
const body = document.body
//create the container that will hold our grocerylist(if this is how you structured your html), and append it to the body
const groceryList = document.createElement("div")
body.append(groceryList)
//create the header for you page
const groceryHeader = document.createElement("h1")
groceryHeader.textContent = "GroceryList"
groceryList.append(groceryHeader)
//create the div for the pantry items
const pantryHeader = document.createElement("h2")
pantryHeader.style.padding = "20px"
//assign it text
pantryHeader.textContent = "Pantry Items"
//give it an attribute via .setAttribute methods
pantryHeader.setAttribute("id","pantry")
//give it a class via .classList and .add methods
pantryHeader.classList.add("parent")
//add the header you just created to the groceryList
groceryList.append(pantryHeader)

//make an image with javascript
const image = document.createElement("img")
image.setAttribute("src","download-1.jpg")
image.setAttribute("alt","pantry")
//append the image to the appropriate div with chosenDiv.append(image)(no qoutes!!)
const pantryList = document.createElement("div")
pantryList.classList.add("pantryList")
pantryList.append(image)
pantryList.style.borderBottom = "1px solid black"
pantryList.style.marginBottom = "20px"
body.append(pantryList)
const cannedGoods = document.createElement("ul")
cannedGoods.style.fontWeight = "bold"
cannedGoods.classList.add("list")
const cannedGoodsHeader = document.createElement("h3").textContent = "cannedGoods"
cannedGoods.append(cannedGoodsHeader)
pantryList.append(cannedGoods)
var pantryItems = ["Rice", "Beans", "Bread"]
for (let i = 0; i < pantryItems.length;i++){
    cannedGoods.insertAdjacentHTML("beforeend",`<li> ${pantryItems[i]}</li>`)
} 
const seasonings = document.createElement("ul")
seasonings.classList.add("list")
const seasoningsHeader = document.createElement("h3").textContent = "seasonings" 
seasonings.append(seasoningsHeader)
pantryList.append(seasonings)
var seasoningsItems = ["Salt", "Pepper", "Cayenne"]
for (let i = 0; i < seasoningsItems.length;i++){
    seasonings.insertAdjacentHTML("beforeend",`<li> ${seasoningsItems[i]}</li>`)
} 
const grains = document.createElement("ul")
grains.classList.add("list")
const grainsHeader = document.createElement("h3").textContent = "grains" 
grains.append(grainsHeader)
pantryList.append(grains)
var grainsItems = ["Oatmeal", "Pasta", "Grits"]
for (let i = 0; i < grainsItems.length;i++){
    grains.insertAdjacentHTML("beforeend",`<li> ${grainsItems[i]}</li>`)
} 

//create the div for the pantry items
const refrigeratorHeader = document.createElement("h2")
refrigeratorHeader.style.padding = "20px"
//assign it text
refrigeratorHeader.textContent = "Refrigerator Items"
//give it an attribute via .setAttribute methods
refrigeratorHeader.setAttribute("id","refrigerator")
//give it a class via .classList and .add methods
refrigeratorHeader.classList.add("parent")
//add the header you just created to the groceryList


//make an image with javascript
const refrigeratorImage = document.createElement("img")
refrigeratorImage.setAttribute("src","download-1.jpg")
refrigeratorImage.setAttribute("alt","pantry")
//append the image to the appropriate div with chosenDiv.append(image)(no qoutes!!)
const refrigeratorList = document.createElement("div")
refrigeratorList.classList.add("refrigeratorList")
refrigeratorList.append(refrigeratorHeader)
refrigeratorList.append(refrigeratorImage)
refrigeratorList.style.borderBottom = "1px solid black"
body.append(refrigeratorList)
const dairy = document.createElement("ul")
dairy.classList.add("list")
const dairyHeader = document.createElement("h3").textContent = "dairy"
dairy.append(dairyHeader)
refrigeratorList.append(dairy)
var dairyItems = ["Rice", "Beans", "Bread"]
for (let i = 0; i < dairyItems.length;i++){
    dairy.insertAdjacentHTML("beforeend",`<li> ${dairyItems[i]}</li>`)
} 
const fruit = document.createElement("ul")
fruit.classList.add("list")
const fruitHeader = document.createElement("h3").textContent = "fruit and veggies"
fruit.append(fruitHeader)
refrigeratorList.append(fruit)
var fruitItems = ["Rice", "Beans", "Bread"]
for (let i = 0; i < fruitItems.length;i++){
    fruit.insertAdjacentHTML("beforeend",`<li> ${fruitItems[i]}</li>`)
} 
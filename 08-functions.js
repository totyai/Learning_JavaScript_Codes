// Set up the Backpack class
class Backpack {
    constructor(
        id,
        name,
        volume,
        color,
        pocketNum,
        dateAcquired
    ) {
        this.id = id;
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.dateAcquired = dateAcquired;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; // elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }

}

// Create new Backpack object
const everydayPack = new Backpack(
    "pack01",
    "Everyday Backpack",
    30,
    "grey",
    15,
    "December 5, 2018 15:00:00 PST"
);

// Create new Backpack object
const frogPack = new Backpack(
    "pack02",
    "Frog Backpack",
    8,
    "green",
    3,
    "October 16, 2019 15:00:00 PST"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

function createBackpackMarkup(document) {

    const newArr = backpackObjectArray.map((elem) => {

        let art = document.createElement("article");
        art.setAttribute("id", elem.id);

        art.innerHTML = 
            `
            <h1>${elem.name}</h1>
            <ul>
                <li>Volume:<span> ${elem.volume}l</span></li>
                <li>Color:<span> ${elem.color}</span></li>
                <li>Age:<span> ${elem.backpackAge()} days old</span></li>
                <li>Number of pockets:<span> ${elem.pocketNum}</span></li>
            </ul>
            `;
        return art;
    }); 
    return newArr;
}

//Contructor
const backpacksMarkupArray = createBackpackMarkup(document)
// Combine the array items into a single output.
const result = backpacksMarkupArray.reduce((combinedHTML, backpack) => {
    return combinedHTML + backpack.outerHTML;
}, '');


/*
Expected outcome:
<article id="pack01">
        <h1>Everyday Backpack</h1>
        <ul>
            <li>Volume:<span> 30l</span></li>
            <li>Color:<span> grey</span></li>
            <li>Age:<span> 1914 days old</span></li>
            <li>Number of pockets:<span> 15</span></li>
        </ul>
        </article><article id="pack02">
        <h1>Frog Backpack</h1>
        <ul>
            <li>Volume:<span> 8l</span></li>
            <li>Color:<span> green</span></li>
            <li>Age:<span> 1599 days old</span></li>
            <li>Number of pockets:<span> 3</span></li>
        </ul>
        </article>
*/
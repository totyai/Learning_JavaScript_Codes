//Code

function updatePage(document) {
    // Your code goes here.
    document.querySelectorAll("button").forEach((elem) => 
        elem.addEventListener("click", function (event) 
        { 
            event.preventDefault();
            let span_ID = event.target.getAttribute("data-target");
            console.log("span_ID: ", span_ID);

            let input = document.getElementById(span_ID + "-input").value;
            console.log("input: ", input);

            let spanElement = document.getElementById(span_ID).querySelector(".value");
            console.log("spanElement:", spanElement.innerHTML);

            spanElement.textContent = input;
            console.log("after:", spanElement.textContent);
        })
    );
}

//Construction
const inputs = [
    { id: "name-input", value: "Adventure Backpack" },
    { id: "description-input", value: "A durable backpack for outdoor adventures" },
    { id: "color-input", value: "Green" },
    { id: "volume-input", value: "35L" },
];

//Expected outcome
/*
<div id="info">
    <p class="info-item" id="name">Name: <span class="value">Adventure Backpack</span></p>
    <form id="update-name">
        <label for="name-input">Update Name:</label>
        <input type="text" id="name-input">
        <button type="submit" data-target="name">Update</button>
    </form>
    <p class="info-item" id="description">Description: <span class="value">A durable backpack for outdoor adventures</span></p>
    <form id="update-description">
        <label for="description-input">Update Description:</label>
        <input type="text" id="description-input">
        <button type="submit" data-target="description">Update</button>
    </form>
    <p class="info-item" id="color">Color: <span class="value">Green</span></p>
    <form id="update-color">
        <label for="color-input">Update Color:</label>
        <input type="text" id="color-input">
        <button type="submit" data-target="color">Update</button>
    </form> 
    <p class="info-item" id="volume">Volume: <span class="value">35L</span></p>
    <form id="update-volume">
        <label for="volume-input">Update Volume:</label>
        <input type="text" id="volume-input">
        <button type="submit" data-target="volume">Update</button>
    </form>
  </div>
  */
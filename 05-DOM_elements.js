// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;


function createNavMenu(document) {
      // Your code goes here
      //Create ul and add
      let list = document.createElement('ul');
      list.innerHTML = navContent;

      //Create navig item with class
      let navig = document.createElement('nav');
      navig.classList.add("main-navigation");
      navig.appendChild(list);

      //Get Parent HTML
      let header = document.querySelector(".siteheader");

      //Append nav
      header.appendChild(navig);
}

//Contract
const result = document.querySelector(".siteheader").outerHTML;

/*
Expected result:
<header class="siteheader">
        <div class="site-title">Experimental Site</div>
        <div class="site-description">Description of experimental site</div>
      <nav class="main-navigation"><ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
</ul></nav></header>
*/
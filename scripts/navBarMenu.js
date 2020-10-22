let isSubMenuOpen = false;

// Initialize sub-menu list item data
let subMenuItemNames = ['Pokemon', 'Blog', 'History', 'Versions', 'FAQ'];
let subMenuItemLinks = ['#', '#', '#', '#', '#'];

// Initialize sub-menu elements
let subMenuDivEl = document.createElement("div");
subMenuDivEl.id = "subMenu";

let subMenuListEl = document.createElement("ul");
subMenuListEl.id = "subMenuList";

let subMenuListItemEls = [];
let subMenuListItemLinkEls = [];

// Manages state of sub-menu
function initializeSubMenu() {
    // Variables that hold temporary elements
    // in preparation to push to an array.
    let tempListItemEl;
    let tempLinkEl;

    // Initialize each sub-menu item and link
    for (let i=0; i < subMenuItemNames.length; i++) {
        tempListItemEl = document.createElement("li");
        tempLinkEl = document.createElement("a");

        // List Item initialization
        tempListItemEl.className = "subMenuListItem";

        // List Item Link initialization
        tempLinkEl.className = "subMenuListLinkItem";
        tempLinkEl.innerHTML = subMenuItemNames[i];
        tempLinkEl.href = subMenuItemLinks[i];

        // Append elements to arrays
        subMenuListItemEls.push(tempListItemEl);
        subMenuListItemLinkEls.push(tempLinkEl);
    }

    // Remove any leftover data in temp variables
    tempListItemEl = null;
    tempLinkEl = null;

    // Send all sub-menu elements to the webpage
    document.body.appendChild(subMenuDivEl);
    subMenuDivEl.appendChild(subMenuListEl);

    subMenuListItemEls.forEach(function(element, index) {
        element.appendChild(subMenuListItemLinkEls[index]);
        subMenuListEl.appendChild(element);
    });
}

// Called when Menu Button is clicked.
function handleSubMenu() {
    if(isSubMenuOpen) {
        closeSubMenu();
    } else {
        openSubMenu();
    }
}

// Show sub-menu
function openSubMenu() {
    subMenuDivEl.style.display="inline";
    isSubMenuOpen = true;
}

// Hide sub-menu
function closeSubMenu() {
    subMenuDivEl.style.display="none";
    isSubMenuOpen = false;
}

initializeSubMenu();
closeSubMenu();
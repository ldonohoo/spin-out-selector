// Lisa Donohoo
// Spin-Out circular menu selector
// March 2024
//

document.getElementById("project-button").addEventListener("click", spinOutMenu);
document.querySelector("svg").addEventListener("click", pieSelected);

// Create a circular, expanding, spin-out menu with clickable menu option buttons on it
//      toggle it on and off with a click
function spinOutMenu() {
    // Get DOM elements for element to spin out
    let spinOut = document.getElementById("project-container");
    // Check classes on element to see if already spun out or in 
    let alreadyOut = spinOut.classList.contains("spin-out-style"); 
    let alreadyIn = spinOut.classList.contains("spin-in-style"); 
    if (!alreadyIn && !alreadyOut) {
        // this gets activated the first time, initial spin-out of menu
        spinOut.classList.toggle("spin-out-style");
    } else {
        // If NOT initial spin-out of menu, need to remove and re-add element so
        // we can re-run animation on that element
        //    - clone node, remove node, re-append node to parent
        //      (cloneNode = true, clones node and any children)
        let spinOutCopy = spinOut.cloneNode(true);
        spinOut.remove();
        let spinOutParent = document.getElementById("projects-section");
        spinOutParent.appendChild(spinOutCopy);
        // reset spinOut as if you don't it will point to old, removed node
        //      (still exists in memory but removed from DOM!)
        spinOut = document.getElementById("project-container");
        // Then go ahead and toggle both classes to activate animations
        spinOut.classList.toggle("spin-in-style");
        spinOut.classList.toggle("spin-out-style");
    }
}

function pieSelected(event) {
    // pull the wedge number from the class of the target clicked on
    let wedgeNumber = event.target.getAttribute("class");
    console.log(`clicking on project ${wedgeNumber}!`);
}


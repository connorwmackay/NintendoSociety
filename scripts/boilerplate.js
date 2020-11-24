/*
 * Group: Nintendo Boyz
 * Developed By: Connor Mackay
 */

//
// Accordian
// UI
//

let accordianGroupList = document.getElementsByClassName("accordianGroup");

for (let i=0; i < accordianGroupList.length; i++)
{
    for (let j=0; j < accordianGroupList[i].getElementsByClassName("accordianContainer").length; j++)
    {
        let container = accordianGroupList[i].getElementsByClassName("accordianContainer")[j];

        let data = container.getElementsByClassName("accordianData")[0];
        data.style.display="none";
        container.getElementsByClassName("accordianButton")[0].addEventListener("click", function() {
            showAccordianContainer(data, container.parentElement);
        }, false);
    }
}

function showAccordianContainer(element, groupElement) {
    for(let i=0; i < groupElement.getElementsByClassName("accordianContainer").length; i++) {
        let data = groupElement.getElementsByClassName("accordianContainer")[i].getElementsByClassName("accordianData")[0];
        if (data.style.display !== "none") {
            data.style.display = "none";
        }
    }
    if (element.style.display !== "none") {
        element.style.display = "none";
    } else {
        element.style.display="block";
    }
}

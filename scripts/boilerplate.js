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

//
// Gallery
// UI
//
let galleryGroupList = document.getElementsByClassName("galleryGroup");

for (let i=0; i < galleryGroupList.length; i++)
{
    let group = galleryGroupList[i];
    let nextBtn = group.getElementsByClassName("galleryNextBtn")[0];
    let prevBtn = group.getElementsByClassName("galleryPrevBtn")[0];

    nextBtn.addEventListener("click", function() {
        for (let j=0; j < group.getElementsByTagName("img").length; j++)
        {
            let img = group.getElementsByTagName("img")[j];
            if (img.style.display=="block") {
                let len = group.getElementsByTagName("img").length;
                console.log(group.getElementsByTagName("img")[0]);
                console.log(j === len-1);
                if (j === len-1) {
                    group.getElementsByTagName("img")[0].style.display="block";
                    img.style.display="none";
                    break;
                } else {
                    console.log("Next");
                    group.getElementsByTagName("img")[(j+1)].style.display="block";
                    img.style.display="none";
                    break;
                }
            }
        }
    }, false);

    prevBtn.addEventListener("click", function() {
        for (let j=0; j < group.getElementsByTagName("img").length; j++)
        {
            let img = group.getElementsByTagName("img")[j];
            if (img.style.display=="block") {
                if (j === 0)
                {
                    let len = group.getElementsByTagName("img").length;
                    group.getElementsByTagName("img")[len-1].style.display="block";
                    img.style.display="none";
                    break;
                } else {
                    group.getElementsByTagName("img")[j-1].style.display="block";
                    img.style.display="none";
                    break;
                }
            }
        }
    }, false);

    for (let j=0; j < group.getElementsByTagName("img").length; j++)
    {
        let img = group.getElementsByTagName("img")[j];
        img.style.display="none";
        if (j === 0) {
            img.style.display="block";
        }
    }
}

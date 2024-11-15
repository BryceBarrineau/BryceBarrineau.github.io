function openTab(evt,projectID, tabID) {
    var i, tabContent, tabLinks;

    // Get all elements with class "tabContent"
    tabContent = document.getElementById(projectID).getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class "tabLink" and remove "active" class
    tabLinks = document.getElementById(projectID).getElementsByClassName("tabLink");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the clicked tab content and add "active" class to the clicked tab link
    document.getElementById(tabID).style.display = "block";
    evt.currentTarget.className += " active";
}


function openImage(evt, projectID, tabID) {
    var i, tabPhoto, photoLinks;

    console.log("Here", projectID, tabID);
    console.log(document.getElementById(tabID));

    images = document.getElementById(projectID).getElementsByClassName("projImg")
    for(i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    photoLinks = document.getElementById(projectID).getElementsByClassName("photoLink");
    for(i = 0; i < photoLinks.length; i++) {
        photoLinks[i].className = photoLinks[i].className.replace(" active", "")
    }

    document.getElementById(tabID).style.display = "block";
    evt.currentTarget.className += " active";

}
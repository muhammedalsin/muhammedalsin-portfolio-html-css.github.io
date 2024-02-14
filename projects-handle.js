var projectsDiv = document.getElementById("projects");
for (let i = 0; i < Projects.length; i++) {
    var currentProject = Projects[i];

    // div 
    var projectDiv = document.createElement("div");
    var divStyle = document.createAttribute("style");
    projectDiv.classList.add( "pojecte-box" );
    divStyle.value = "display:inline-block; width:300px;margin:15px;";
    projectDiv.setAttributeNode(divStyle)

    // h3
    var title = document.createElement("h3");
    var titleNode = document.createTextNode(currentProject.title);
    title.appendChild(titleNode);

    // img
    var image = document.createElement("img");
    var source = document.createAttribute("src");
    source.value = "./img/" + currentProject.img
    image.setAttributeNode(source)
    var imgStyle = document.createAttribute("style")
    imgStyle.value = "width:180px;";
    image.setAttributeNode(imgStyle)

    // p
    var p = document.createElement("p");
    var pNode = document.createTextNode(currentProject.description);
    p.appendChild(pNode);


    projectDiv.appendChild(title);
    projectDiv.appendChild(image);
    projectDiv.appendChild(p);

    projectsDiv.appendChild(projectDiv)

}

function createPageContent(event) {
    var pdjInnerElemet = document.querySelector(".pdjInnerElement");
    pdjInnerElemet.style.left = "-1300px";

    setTimeout(() => {
        pdjInnerElemet.innerHTML = "";
        var head = document.createElement("h2");
        var text = document.createElement("p");
        var ptohotext = document.createElement("h2");
        head.innerHTML = event.name;
        text.innerHTML = event.text;
        
        pdjInnerElemet.appendChild(head);
        pdjInnerElemet.appendChild(text);
        pdjInnerElemet.appendChild(ptohotext);
        var imagesLenght = event.images.length;
        for(var i = 0; i < imagesLenght/3; i++){
            var images = document.createElement("div");
            images.classList.add("pdjInnerImages");
            for(var j = 0; j < 3; j++){
                if(i * 3 + j > imagesLenght - 1){
                    break;
                }
                let img = document.createElement("img");
                img.src = "data/images/" + event.images[i * 3 + j];

                // Make the images bigger
                img.style.width = "800px";
                img.style.height = "auto";

                let d = document.createElement("div");
                d.classList.add("imgShowUp");

                img.addEventListener('click', () => {
                    d.classList.toggle("bigerImage");
                });

                d.appendChild(img);
                images.appendChild(d);
            }
            pdjInnerElemet.appendChild(images);


        }

        if(event.Link.length != 0){
            let linkHeader = document.createElement("h3");
            linkHeader.innerHTML = "Odkazy";
            pdjInnerElemet.appendChild(linkHeader);

            event.Link.forEach(link => {
                let linkElement = document.createElement("a");
                linkElement.href = link;
                linkElement.innerHTML = " " + link;
                linkElement.target = "_blank"; 
                pdjInnerElemet.appendChild(linkElement);
            });
        }

        pdjInnerElemet.style.left = "0";

    }, 1000);
}



function generatePage(event){
    var List = document.querySelector(".pdjList");
    var listValue = document.createElement("h3");
    listValue.innerHTML = event.name;
    List.appendChild(listValue);
    listValue.addEventListener('click', () => {
        createPageContent(event);
        var pdjLoadElement = document.querySelector(".pdjLoad");
        pdjLoadElement.style.animation = "none";
        pdjLoadElement.offsetHeight; // trigger reflow
        pdjLoadElement.style.animation = "spin 1.5s linear forwards";
    });
    
}


var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/jsons/events.json";


fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    
    Object.keys(data).forEach(event => {
        generatePage(data[event]);
        
    });
   
    var pdjInnerElemet = document.querySelector(".pdjInnerElement");
    pdjInnerElemet.style.left = "0px";
    var List = document.querySelector(".pdjList");
    var h = document.createElement("h2");
    h.innerHTML = "Podujatia";
    List.appendChild(h);   
});
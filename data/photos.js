
function createPageContent(key, data) {
    var pdjInnerElemet = document.querySelector(".pdjInnerElement");
    pdjInnerElemet.style.left = "-1300px";

    setTimeout(() => {
        pdjInnerElemet.innerHTML = "";
        console.log(data);
            

        var head = document.createElement("h2");
        var text = document.createElement("p");
        head.innerHTML = key;
        pdjInnerElemet.appendChild(head);
        var imagesLenght = data[key].length;  
        for(var i = 0; i < imagesLenght/3; i++){
            var images = document.createElement("div");
            images.classList.add("pdjInnerImages");
            for(var j = 0; j < 3; j++){
                if( i*3+j > imagesLenght-1){
                    break;
                }
                let img = document.createElement("img");
                img.src = data[key][i*3+j];


                let d = document.createElement("div");
                d.classList.add("imgShowUp");

                
                img.addEventListener('click', () => {

                    d.classList.toggle("bigerImage");
                    

                });

                d.appendChild(img)
                images.appendChild(d);
            }
            pdjInnerElemet.appendChild(images);


        }

        pdjInnerElemet.style.left = "0";
            
      
         
    }, 1000);
}




function generatePage(event, data){
    var List = document.querySelector(".pdjList");
    var listValue = document.createElement("h3");
    listValue.innerHTML = event;
    List.appendChild(listValue);
    let d = data[event];
    console.log(d);
    Object.keys(data[event]).forEach(item => {
        let ev = document.createElement("p");
        ev.innerHTML = item;
        listValue.appendChild(ev);
        ev.classList.add("yearPhotoEvent");

        ev.addEventListener("click", () => {
            createPageContent(item, data[event]);
            var pdjLoadElement = document.querySelector(".pdjLoad");
            pdjLoadElement.style.animation = "none";
            pdjLoadElement.offsetHeight; 
            pdjLoadElement.style.animation = "spin 1.5s linear forwards";
        });

    });
    listValue.classList.add("extended");

    listValue.addEventListener('click', () => {
        listValue.classList.toggle("extended");

    });

}


var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/jsons/galery.json";


fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    
    Object.keys(data).forEach(event => {
        generatePage(event, data);
        
    });
   
    var pdjInnerElemet = document.querySelector(".pdjInnerElement");
    pdjInnerElemet.style.left = "0px";
    var List = document.querySelector(".pdjList");
    var h = document.createElement("h2");
    h.innerHTML = "Roky";
    List.appendChild(h);    
});
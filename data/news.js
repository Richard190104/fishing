

document.addEventListener("DOMContentLoaded", function () {

    const jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/jsons/news.json";
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const entries = Object.values(data).reverse();
            maxLoad = entries.length;
            for (let entry of entries) {
                document.querySelector(".NewsPicture").appendChild(createNewsWindow(entry));
            }
        })
        .catch(error => console.error("Error loading JSON:", error));

});

function createNewsWindow(entry) {
    const container = document.createElement("div");
    container.classList.add("newsPage-block");

    const newsBlock = document.createElement("div");
    newsBlock.classList.add("newsPage-blockContent");



    const headder = document.createElement("div");
    headder.classList.add("MainPageNewsHeadder");
    const Htext = document.createElement("h2");
    Htext.innerText = entry.name;
    const Dtext = document.createElement("p");
    Dtext.style.color = "white";
    Dtext.innerText = entry.date;

    headder.appendChild(Htext);
    headder.appendChild(Dtext);
    headder.style.margin = "15px";

    const text = document.createElement("p");
    text.innerHTML = entry.text;
    text.style.color = "white";

    if (entry.photos) {
        const photos = entry.photos.split(",");
        photos.forEach(photoName => {
            const img = document.createElement("img");
            img.src = "data/images/" + photoName.trim();
            img.style.maxWidth = "100%";
            img.style.display = "block";
            img.style.marginTop = "10px";
            text.appendChild(img);
        });
    }


    newsBlock.appendChild(headder);
    newsBlock.appendChild(text);
    container.appendChild(newsBlock);
    
    return container;
}




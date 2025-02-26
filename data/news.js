

document.addEventListener("DOMContentLoaded", function () {


    // Fetch and populate news
    const jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/jsons/news.json";
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            maxLoad = Object.values(data).length;
            for (let entry of Object.values(data)) {
                document.querySelector(".NewsPicture").appendChild(createNewsWindow(entry));
            }

            
        })
        .catch(error => console.error("Error loading JSON:", error));

       
   
});

// Function to create news blocks
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

    newsBlock.appendChild(headder);
    newsBlock.appendChild(text);
    container.appendChild(newsBlock);
    container.addEventListener("click", () => {
        //TODO: Redirect to news page
    });
    return container;
}




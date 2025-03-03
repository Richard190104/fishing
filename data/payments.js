
var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/jsons/payments.json";
const container = document.querySelector(".ppz-leftContent");
const container2 = document.querySelector(".ppz-rightContent");
fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    Object.keys(data).forEach(value => {
        createElement(data[value]);
        
    });
   

});

function createElement(value){
    var div = document.createElement("div");
    div.classList.add("ppz-block");
    var head = document.createElement("h2");
    div.appendChild(head);

    head.innerHTML = value.name;
    if(value.type == "text"){
        var text = document.createElement("p");
        text.innerHTML = value.text;
        div.appendChild(text);
        container2.appendChild(div);
    }
    else{

        div.appendChild(createTable(value));
        container.appendChild(div);
    }
    div.addEventListener("click", () => {
        div.classList.toggle("expand");
    });
    
    
}


function createTable(entry){
    let div = document.createElement("div");
   


    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    Object.entries(entry.text).forEach(([key, value]) => {
        
        let row = document.createElement("tr");
        for (v of value){

            let cell2 = document.createElement("td");
            cell2.textContent = v;
            row.appendChild(cell2);

            if (value.length == 1){
                cell2.style.fontWeight = "bolder";

            }

        }

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    table.classList.add("hoverTable");
    div.appendChild(table);
    div.style.width = "100%";
    console.log(div)
    return div;
}
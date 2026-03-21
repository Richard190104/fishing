function createTable(entry){
    let div = document.createElement("div");
    let headder = document.createElement("h3");
    if (entry[0] == "ParticipientsMain" || entry[0] == "ParticipientsControl" || entry[0] == "ParticipientsGuards"){
        if (entry[0] == "ParticipientsMain"){
            var tbl = document.querySelector(".partMain");
            if (!tbl) {
                tbl = document.createElement("table");
                tbl.classList.add("partMain");
                cont.appendChild(tbl);
            }
            let tbody = document.createElement("tbody");
            Object.entries(entry[1]).forEach(([key, value]) => {
                let row = document.createElement("tr");
                value.forEach(v => {
                    let cell = document.createElement("td");
                    cell.textContent = v;
                    row.appendChild(cell);
                });
                tbody.appendChild(row);
            });
            tbl.appendChild(tbody);
        }else if(entry[0] == "ParticipientsControl"){
            var tbl = document.querySelector(".partCont");
            if (!tbl) {
                tbl = document.createElement("table");
                tbl.classList.add("partControl");
                cont.appendChild(tbl);
            }
            let tbody = document.createElement("tbody");
            Object.entries(entry[1]).forEach(([key, value]) => {
                let row = document.createElement("tr");
                value.forEach(v => {
                    let cell = document.createElement("td");
                    cell.textContent = v;
                    row.appendChild(cell);
                });
                tbody.appendChild(row);
            });
            tbl.appendChild(tbody);
        }else if(entry[0] == "ParticipientsGuards"){
            var tbl = document.querySelector(".partGuards");
            if (!tbl) {
                tbl = document.createElement("table");
                tbl.classList.add("partGuards");
                cont.appendChild(tbl);
            }
            let tbody = document.createElement("tbody");
            Object.entries(entry[1]).forEach(([key, value]) => {
                let row = document.createElement("tr");
                value.forEach(v => {
                    let cell = document.createElement("td");
                    cell.textContent = v;
                    row.appendChild(cell);
                });
                tbody.appendChild(row);
            });
            tbl.appendChild(tbody);
        }
        return null;
    }
    // ... rest of the code
}

function renderParticipantsTable(rows, selector) {
    const table = document.querySelector(selector);
    if (!table || !rows) {
        return;
    }

    const oldBody = table.querySelector("tbody");
    if (oldBody) {
        oldBody.remove();
    }

    const tbody = document.createElement("tbody");

    Object.values(rows).forEach((rowValues) => {
        const row = document.createElement("tr");

        rowValues.forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}

async function loadAboutUsTables() {
    try {
        const response = await fetch("data/jsons/AboutUsTables.json");
        if (!response.ok) {
            throw new Error("Unable to load AboutUsTables.json");
        }

        const data = await response.json();
        console.log("Table data loaded successfully:", data);
        renderParticipantsTable(data.ParticipientsMain, ".partMain");
        renderParticipantsTable(data.ParticipientsControl, ".partCont");
        renderParticipantsTable(data.ParticipientsGuards, ".partGuards");
    } catch (error) {
        console.error("Table data loading failed:", error);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAboutUsTables);
} else {
    loadAboutUsTables();
}

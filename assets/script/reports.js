const reports = {
    2024: ["report7.pdf", "report8.pdf"],
    2023: ["report1.pdf", "report2.pdf"],
    2022: ["report3.pdf", "report4.pdf"],
    2021: ["report5.pdf", "report6.pdf"],
};

function loadReports(year) {
    const buttons = document.querySelectorAll(".year-selector button");
    buttons.forEach((button) => {
        if (button.dataset.year === year) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    const reportList = document.getElementById("report-list");
    reportList.innerHTML = "";

    if (reports[year]) {
        reports[year].forEach((report) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <img src="./assets/icons/icon-pdf.png" alt="File icon"> 
            <a href="path/to/reports/${report}" target="_blank">${report}</a>
        `;
            reportList.appendChild(li);
        });
    }
}

// Загрузите отчеты за текущий год по умолчанию
loadReports("2024");
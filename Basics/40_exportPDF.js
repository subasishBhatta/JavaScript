console.log("This is the tutorial to create a PDF file from HTML");

var opt = {
    margin: 1,
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 100 },
    html2canvas: { scale: 3 },         // It increases the file size
    jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
};

function main() {
    let view = document.getElementById("view");
    let exportPdf = document.getElementById("export-pdf");

    exportPdf.addEventListener("click", () => {
        html2pdf(view, opt);
    })
}

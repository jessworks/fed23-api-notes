import printDocs from "./printDocs.js";

let newDocument = document.querySelector("#newDocument");
let saveNewDocumentBtn = document.querySelector("#saveNewDocumentBtn");

export default saveNewDocumentBtn.addEventListener("click", () => {
    console.log("click");

    let saveDocument = {
        document: newDocument.value
    }

    fetch("http://localhost:3000/document", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveDocument)
    })
    .then(res => res.json())
    .then(data => {
        console.log("save document", data);
        newDocument.value = "";

        printDocs();
    })

})
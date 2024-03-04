import printDocs from "./printDocs.js";

let newDocumentTitle = document.querySelector("#newDocumentTitle");
let newDocumentNotes = document.querySelector("#newDocumentNotes")
let saveNewDocumentBtn = document.querySelector("#saveNewDocumentBtn");

export default saveNewDocumentBtn.addEventListener("click", () => {
    console.log("click");

    let saveDocument = {
        document: newDocumentTitle.value,
        notes: newDocumentNotes.value
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
        newDocumentTitle.value = "";
        newDocumentNotes.value = "";

        printDocs();
    })

})
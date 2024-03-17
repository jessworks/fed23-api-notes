import printDocs from "./printDocs.js";

let openDocument = document.querySelector("#openDocument");

export default function readEditDoc(documentId) {
    console.log("readEditDoc", documentId);

    
    fetch("http://localhost:3000/document/" + documentId) // vad missar jag, 500 error
    .then(res => res.json())
    .then(data => {
        console.log("fetch", data);
        
        // vad ska jag skriva här, loopar inte igenom allt endast printa för valt id

        let openDocumentTitleLabel = document.createElement("label");
        openDocumentTitleLabel.setAttribute("for", "openDocumentTitle");
        openDocumentTitleLabel.textContent = "Title";
        openDocument.appendChild(openDocumentTitleLabel);

        let openDocumentTitleTextarea = document.createElement("textarea");
        openDocumentTitleTextarea.id = "openDocumentTitle";
        openDocumentTitleTextarea.name = "openDocumentTitle";
        openDocumentTitleTextarea.setAttribute("readonly", "true");
        openDocumentTitleTextarea.rows = 1;
        openDocumentTitleTextarea.cols = 50;
        openDocument.appendChild(openDocumentTitleTextarea);

        let openDocumentNotesLabel = document.createElement("label");
        openDocumentNotesLabel.setAttribute("for", "openDocumentNotes");
        openDocumentNotesLabel.textContent = "Notes";
        openDocument.appendChild(openDocumentNotesLabel);

        let openDocumentNotesTextarea = document.createElement("textarea");
        openDocumentNotesTextarea.id = "openDocumentNotes";
        openDocumentNotesTextarea.name = "openDocumentNotes";
        openDocumentNotesTextarea.setAttribute("readonly", "true");
        openDocumentNotesTextarea.rows = 15;    
        openDocumentNotesTextarea.cols = 50;
        openDocument.appendChild(openDocumentNotesTextarea);

        
        let editBtn = document.createElement("button");
        editBtn.innerText = "edit";
        openDocument.appendChild(editBtn);

        editBtn.addEventListener("click", () => {
            openDocumentTitleTextarea.removeAttribute("readonly");
            openDocumentNotesTextarea.removeAttribute("readonly");
        })


        let closeBtn = document.createElement("button");
        closeBtn.innerText = "close";
        openDocument.appendChild(closeBtn);

        closeBtn.addEventListener("click", () => {
            //openDocument.setAttribute("hidden", "true");    hur ta bort attributet igen

            openDocumentTitleTextarea.value = "";
            openDocumentNotesTextarea.value = "";
        })

    
        let saveBtn = document.createElement("button");
        saveBtn.innerText = "save";
        openDocument.appendChild(saveBtn);

    // saveBtn 'click'
        // UPDATE db
        // printa listan på nytt

    /*       
        saveBtn.addEventListener("click", () => {

            let updateDocument = {
                openDocumentTitle.value,
                openDocumentNotes.value
            };

            fetch("http://localhost:3000/document/" + documentId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateDocument)
            })
            .then(res => res.json())
            .then(data => {
                console.log("update document", data);

                openDocumentTitle.value = "";
                openDocumentNotes.value = "";

                printDocs();
        })
       */
    
    })
};

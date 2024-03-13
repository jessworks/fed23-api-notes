import deleteDoc from "./deleteDoc.js";

let documentList = document.querySelector("#documentList");

export default function printDocs() {
    fetch("http://localhost:3000/document")
    .then(res => res.json())
    .then(data => {
        console.log("documents", data);

        documentList.innerHTML = "";

        data.map(docsgalore => {
            
            let listItem = document.createElement("li");
            //listItem.innerText = docsgalore.document;
            documentList.appendChild(listItem);

            let documentTitle = document.createElement("h2");
            documentTitle.innerText = docsgalore.document;
            listItem.appendChild(documentTitle);

            let documentNotes = document.createElement("p");
            documentNotes.innerText = docsgalore.notes;
            listItem.appendChild(documentNotes);

            let openBtn = document.createElement("button");
            openBtn.textContent = "open";
            listItem.appendChild(openBtn);

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "delete";

            deleteBtn.addEventListener("click", () => {
                deleteDoc(docsgalore.id)
            })

            listItem.appendChild(deleteBtn);

            
        })
    })
}
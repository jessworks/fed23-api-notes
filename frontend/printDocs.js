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
            listItem.innerText = docsgalore.document;
            documentList.appendChild(listItem);

            let editBtn = document.createElement("button");
            editBtn.textContent = "edit";
            listItem.appendChild(editBtn);

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "delete";
            listItem.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", () => { //vad fattas?
                deleteDoc(docsgalore.id)
            })
        })
    })
}
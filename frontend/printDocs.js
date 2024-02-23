let documentList = document.querySelector("#documentList");

export default function printDocs() {
    fetch("http://localhost:3000/document")
    .then(res => res.json())
    .then(data => {
        console.log("documents", data);

        documentList.innerHTML = "";

        data.map(docsgalore => {
            let li = document.createElement("li");
            li.innerText = docsgalore.document;
            documentList.appendChild(li);

            let editBtn = document.createElement("button");
            editBtn.textContent = "edit";
            li.appendChild(editBtn);

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "delete";
            li.appendChild(deleteBtn);
        })
    })
}
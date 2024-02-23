import printDocs from "./printDocs.js";

export default function deleteDoc(documentId) {
    console.log("delete document", documentId);

    fetch("http://localhost:3000/document/" + documentId, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("deleted", data);
        printDocs();
    })
}
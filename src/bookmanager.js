import { signUp, logOut, logIn, onAuthStateChanged } from "./auth";
import { db } from "./config";
import { doc, setDoc, collection, deleteDoc, onSnapshot } from "firebase/firestore";

const saveBook = async function () {
    const bookName = document.getElementById("bookname").value.trim();
    const author = document.getElementById("author").value.trim();
    const year = document.getElementById("year").value.trim();

    try {
        const bookRef = doc(db, "books", bookName.toLowerCase() + "-" + year.toLowerCase());

        await setDoc(bookRef, {
            name: bookName,
            author: author,
            year: year
        });

        console.log("Book successfully created");

        document.getElementById("bookname").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
    } catch (error) {
        console.error("Error saving book", error);
    }
};

const deleteBook = async function (docID) {
    try {
        await deleteDoc(doc(db, "books", docID));
        console.log(`Document with ID ${docID} deleted successfully`);
    } catch (error) {
        console.error("Error deleting book", error);
    }
};

const booksTableBody = document.getElementById("booksTableBody");

const updateTable = () => {
    onSnapshot(collection(db, "books"), (snapshot) => {
        booksTableBody.innerHTML = "";
        snapshot.forEach((doc) => {
            const book = doc.data();
            const row = `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
            </tr>`;
            booksTableBody.innerHTML += row;
        });
    });
};

updateTable();

document.querySelector("#addBook").addEventListener("submit", (event) => {
    event.preventDefault();
    saveBook();
});

document.querySelector("#deleteBook").addEventListener("submit", (event) => {
    event.preventDefault();
    const book = document.getElementById("bookID").value;
    deleteBook(book);
});
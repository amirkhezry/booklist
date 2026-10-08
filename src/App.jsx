import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import AddBook from "./Components/AddBook/AddBook";
import BookList from "./Components/BookList/BookList";
import Stats from "./Components/Stats/Stats";
import "./App.css";

function App() {
    const [books, setBooks] = useState(() => {
        const savedBooks = localStorage.getItem("books");

        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    function addBook(book) {
        const newBook = {
            id: Date.now(),
            ...book,
        };

        setBooks((currentBooks) => [
            ...currentBooks,
            newBook,
        ]);
    }

    function deleteBook(id) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this book?"
        );

        if (!confirmed) {
            return;
        }

        setBooks((currentBooks) => {
            const updatedBooks = currentBooks.filter(
                (book) => book.id !== id
            );

            if (updatedBooks.length === 0) {
                setSearchTerm("");
            }

            return updatedBooks;
        });
    }

    function showSuccessMessage() {
        setSuccessMessage("Book added successfully!");

        setTimeout(() => {
            setSuccessMessage("");
        }, 2500);
    }

    return (
        <div className="app">
            <div className="container">
                <Header />

                    <main>
                        <Stats books={books} />

                        {successMessage && (
                            <div className="success-message">
                                ✓ {successMessage}
                            </div>
                        )}

                        <AddBook
                            onAddBook={addBook}
                            onSuccess={showSuccessMessage}
                        />

                        <BookList
                            books={books}
                            onDelete={deleteBook}
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                        />
                    </main>
            </div>
        </div>
    );
}

export default App;
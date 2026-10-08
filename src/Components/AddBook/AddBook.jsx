import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "./AddBook.css";

export default function AddBook({ onAddBook, onSuccess }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");

    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!title.trim() || !author.trim() || !year.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        const currentYear = new Date().getFullYear();
        const bookYear = Number(year);

        if (bookYear < 0 || bookYear > currentYear) {
            setError(`Please enter a valid year between 0 and ${currentYear}.`);
            return;
        }

        onAddBook({
            title: title.trim(),
            author: author.trim(),
            year: year.trim(),
        });

        setTitle("");
        setAuthor("");
        setYear("");
        setError("");

        onSuccess();
    }

    return (
        <section className="add-book">
            <div className="section-heading">
                <h2>Add a new book</h2>
                <p>Add a book to your personal collection.</p>
            </div>

            <form onSubmit={handleSubmit} className="book-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>

                    <input
                        id="title"
                        type="text"
                        placeholder="e.g. The Hobbit"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                            setError("");
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author</label>

                    <input
                        id="author"
                        type="text"
                        placeholder="e.g. J.R.R. Tolkien"
                        value={author}
                        onChange={(event) => {
                            setAuthor(event.target.value);
                            setError("");
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Publication Year</label>

                    <input
                        id="year"
                        type="number"
                        placeholder="e.g. 1937"
                        value={year}
                        onChange={(event) => {
                            setYear(event.target.value);
                            setError("");
                        }}
                    />
                </div>

                <button type="submit" className="add-button">
                    <FaPlus />
                    Add Book
                </button>
            </form>

            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}
        </section>
    );
}
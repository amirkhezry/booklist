import { FaBookOpen, FaTrash } from "react-icons/fa6";
import "./BookCard.css";

export default function BookCard({ book, onDelete }) {
    return (
        <article className="book-card">
            <div className="book-icon">
                <FaBookOpen />
            </div>

            <div className="book-info">
                <h3>{book.title}</h3>

                <p className="book-author">
                    {book.author}
                </p>

                <span className="book-year">
                    {book.year}
                </span>
            </div>

            <button
                className="delete-button"
                onClick={() => onDelete(book.id)}
                aria-label={`Delete ${book.title}`}
            >
                <FaTrash />
            </button>
        </article>
    );
}
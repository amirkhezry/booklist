import { FaBook, FaMagnifyingGlass } from "react-icons/fa6";
import BookCard from "../BookCard/BookCard";
import "./BookList.css";

export default function BookList({
    books,
    onDelete,
    searchTerm,
    onSearchChange,
}) {
    const filteredBooks = books.filter((book) => {
        const searchText = searchTerm.toLowerCase();

        return (
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText)
        );
    });

    return (
        <section className="book-list-section">
            <div className="book-list-heading">
                <div>
                    <h2>My Books</h2>
                    <p>Your personal book collection.</p>
                </div>

                <div className="book-count">
                    <FaBook />
                    <span>{books.length}</span>
                </div>
            </div>

            {books.length > 0 && (
                <div className="search-box">
                    <FaMagnifyingGlass />

                    <input
                        type="text"
                        placeholder="Search by title or author..."
                        value={searchTerm}
                        onChange={(event) =>
                            onSearchChange(event.target.value)
                        }
                    />
                </div>
            )}

            {books.length === 0 ? (
                <div className="empty-state">
                    <FaBook />

                    <h3>No books yet</h3>

                    <p>
                        Add your first book to start building your
                        collection.
                    </p>
                </div>
            ) : filteredBooks.length === 0 ? (
                <div className="empty-state">
                    <FaMagnifyingGlass />

                    <h3>No books found</h3>

                    <p>
                        Try searching with a different title or
                        author.
                    </p>
                </div>
            ) : (
                <div className="book-grid">
                    {filteredBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
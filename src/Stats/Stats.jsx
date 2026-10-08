import {
    FaBook,
    FaPenNib,
    FaCalendarDays,
} from "react-icons/fa6";

import "./Stats.css";

export default function Stats({ books }) {
    const totalBooks = books.length;

    const totalAuthors = new Set(
        books.map((book) => book.author.toLowerCase())
    ).size;

    const latestYear =
        books.length > 0
            ? Math.max(...books.map((book) => Number(book.year)))
            : "-";

    return (
        <section className="stats">
            <div className="stat-card">
                <div className="stat-icon">
                    <FaBook />
                </div>

                <div>
                    <span className="stat-label">
                        Total Books
                    </span>

                    <strong className="stat-value">
                        {totalBooks}
                    </strong>
                </div>
            </div>

            <div className="stat-card">
                <div className="stat-icon">
                    <FaPenNib />
                </div>

                <div>
                    <span className="stat-label">
                        Authors
                    </span>

                    <strong className="stat-value">
                        {totalAuthors}
                    </strong>
                </div>
            </div>

            <div className="stat-card">
                <div className="stat-icon">
                    <FaCalendarDays />
                </div>

                <div>
                    <span className="stat-label">
                        Latest Publication
                    </span>

                    <strong className="stat-value">
                        {latestYear}
                    </strong>
                </div>
            </div>
        </section>
    );
}
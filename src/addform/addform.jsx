import { useState } from "react";
import "./addform.css";

export default function Addform() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");

    function handleSubmit() {
        console.log(title);
        console.log(author);
        console.log(year);
    }

    return (
        <div id="addform-main">

            <p className="input-text">Title</p>
            <input
                type="text"
                className="input-box"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <p className="input-text">Author</p>
            <input
                type="text"
                className="input-box"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <p className="input-text">Year</p>
            <input
                type="text"
                className="input-box"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />

            <button
                className="input-button"
                onClick={handleSubmit}
            >
                ADD Book
            </button>

        </div>
    );
}
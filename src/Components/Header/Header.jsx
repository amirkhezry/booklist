import { FaBookOpen } from "react-icons/fa6";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-brand">
                <div className="header-icon">
                    <FaBookOpen />
                </div>

                <div>
                    <h1>AMIR Booklist</h1>
                    <p>Your personal digital bookshelf</p>
                </div>
            </div>
        </header>
    );
}